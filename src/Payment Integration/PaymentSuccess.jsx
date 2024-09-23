import { useLocation } from "react-router-dom";

function PaymentSuccess() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const referenceNo = searchParams.get("referenceNo");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl text-center">
      <h2 className="text-2xl font-bold mb-4 text-green-600">
        Payment Successful!
      </h2>
      <p className="mb-2">Thank you for your payment.</p>
      <p className="font-semibold">Reference Number: {referenceNo}</p>
    </div>
  );
}

export { PaymentSuccess };
