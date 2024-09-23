import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateOrder() {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  async function handleCreateOrder() {
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:3000/api/v1/key/apikey");

      const res = await axios.post("http://localhost:3000/api/v1/createorder", {
        amount: Number(amount),
      });
      const order = res.data.order;
      console.log("order-", order);

      const options = {
        key: key,
        amount: order.amount,
        currency: order.currency,
        name: "Shivam Kanchole",
        description: "Test Transaction by Shivam",
        image: "https://example.com/your-logo.png",
        order_id: order.id,
        handler: function (response) {
          handlePaymentVerification(response);
        },
        prefill: {
          name: "Shivam Kanchole",
          email: "shivamkanchole2002@gmail.com",
          contact: "6262556682",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order. Please try again.");
    }
  }

  async function handlePaymentVerification(response) {
    try {
      const verificationResponse = await axios.post(
        "http://localhost:3000/api/v1/verifyPayment",
        response
      );
      if (verificationResponse.data.success) {
        navigate(verificationResponse.data.redirectURL);
      } else {
        alert("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      alert("Payment verification failed. Please contact support.");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Order</h2>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleCreateOrder}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Create Order
      </button>
    </div>
  );
}

export { CreateOrder };
