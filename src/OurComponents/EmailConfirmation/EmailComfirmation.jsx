import { useState } from "react";
import {
  Youtube,
  Check,
  ArrowRight,
  Mail,
  AlertCircle,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import axios from "axios";
import { DeployedBackendURL } from "./Constant.js";
import { useSelector } from "react-redux";

export default function EmailConfirmation() {
  const UserData = useSelector((state) => state.auth.UserData);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();
  const [amount, setamount] = useState(60);

  const isButtonDisabled = !isConfirmed || email !== confirmEmail || !email;

  function GoToPreviousPage() {
    navigate(-1);
  }

  function GoToDashboard() {
    navigate("/dashboard");
  }

  const handleCreateOrder = async () => {
    try {
      console.log("Request is here");

      const {
        data: { key },
      } = await axios.get(`${DeployedBackendURL}/api/v1/key/apikey`);

      const res = await axios.post(
        `${DeployedBackendURL}/api/v1/pay/createorder`,
        {
          amount: Number(amount),
        }
      );
      const order = res.data.order;
      console.log("order-", order);

      const options = {
        key: key,
        amount: order.amount,
        currency: order.currency,
        name: UserData.username,
        description: "Test Transaction by Shivam",
        image: "https://example.com/your-logo.png",
        order_id: order.id,
        handler: function (response) {
          handlePaymentVerification(response);
        },
        prefill: {
          name: UserData.username,
          email: confirmEmail,
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
      // alert("Failed to create order. Please try again.");
    }
  };

  async function handlePaymentVerification(response) {
    try {
      response = {
        ...response,
        userId: UserData._id,
        subscribingEmail: confirmEmail,
        amount: amount,
      };

      const verificationResponse = await axios.post(
        `${DeployedBackendURL}/api/v1/pay/verifyPayment`,
        response
      );

      // console.log("verificationResponse-", verificationResponse.data.data);
      if (verificationResponse.data.success) {
        navigate(verificationResponse.data.redirectURL);
        localStorage.setItem(
          "UserData",
          JSON.stringify(verificationResponse.data.data)
        );

        window.location.reload();
      } else {
        alert("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      alert("Payment verification failed. Please contact support.");
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white ">
      <header className="flex items-center justify-between p-4 bg-black border-b border-zinc-800">
        <a href="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </a>
        <button
          onClick={GoToDashboard}
          className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg"
        >
          Dashboard
        </button>
      </header>

      <main className="flex-grow p-6 bg-black">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">
              Subscribe to YouTube Premium Family Plan
            </h1>
            <p className="text-lg text-gray-300">
              Complete the following steps to join our family plan
            </p>
          </section>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="rounded-full bg-red-600 p-2">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-red-600 font-semibold">1 Plan</span>
            </div>
            <div className="h-px bg-red-600 flex-grow mx-4"></div>
            <div className="flex items-center">
              <div className="rounded-full bg-red-600 p-2">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-red-600 font-semibold">2 Group</span>
            </div>
            <div className="h-px bg-red-600 flex-grow mx-4"></div>
            <div className="flex items-center">
              <div className="rounded-full bg-red-600 p-2">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-red-600 font-semibold">3 Email</span>
            </div>
            <div className="h-px bg-zinc-700 flex-grow mx-4"></div>
            <div className="flex items-center">
              <div className="rounded-full bg-zinc-700 p-2">
                <span className="text-white font-semibold">4</span>
              </div>
              <span className="ml-2 text-zinc-400">Payment</span>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
            <h2 className="text-2xl text-white flex items-center">
              <Mail className="mr-2 h-5 w-5 text-red-600" />
              Email Confirmation
            </h2>
            <div className="space-y-4 mt-4">
              <p className="text-gray-300">
                Please enter the email address you want to use for your YouTube
                Premium subscription:
              </p>
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your-email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 text-white p-2 w-full rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirm-email" className="text-gray-300">
                  Confirm Email Address
                </label>
                <input
                  id="confirm-email"
                  type="email"
                  placeholder="Confirm your email"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  className="bg-zinc-800 border border-zinc-700 text-white p-2 w-full rounded-md"
                />
              </div>
              {email && confirmEmail && email !== confirmEmail && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Email Mismatch</AlertTitle>
                  <AlertDescription>
                    The email addresses you entered do not match. Please check
                    and try again.
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-zinc-800 border border-zinc-700 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-white flex items-center mb-2">
                  <AlertCircle className="mr-2 h-5 w-5 text-yellow-500" />
                  Important Information
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    This email will be used to activate your YouTube Premium
                    Family Plan.
                  </li>
                  <li>
                    Ensure it's the email associated with your YouTube account.
                  </li>
                  <li>
                    Make sure your YouTube account hasn't changed family groups
                    more than once in the past year.
                  </li>
                </ul>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isConfirmed}
                  onChange={(e) => setIsConfirmed(e.target.checked)}
                  className="border border-zinc-700 "
                />
                <label htmlFor="terms" className="text-sm text-gray-300">
                  I confirm that I have read and understood all the instructions
                  above.
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-between space-x-4">
            <button
              onClick={GoToPreviousPage}
              className="rounded-lg w-full bg-zinc-800 hover:bg-zinc-700 text-lg py-6 text-white flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Back
            </button>

            <button
              className={`rounded-lg w-full bg-red-600 hover:bg-red-700 text-lg py-6 text-white flex
                    items-center justify-center ${
                      isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
              disabled={isButtonDisabled}
              onClick={handleCreateOrder}
            >
              Continue to Payment
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 bg-black text-center border-t border-zinc-800">
        <p className="text-sm text-gray-400">
          &copy; 2023 Subspot. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
