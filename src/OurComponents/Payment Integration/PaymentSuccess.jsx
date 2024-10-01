import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const referenceNo = searchParams.get("referenceNo");
  // const amount = searchParams.get("amount");
  const date = new Date().toLocaleString();

  const handleRedirectToDashboard = () => {
    window.location.reload();
    navigate("/userdashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-10 min-h-screen">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-green-600">
            Payment Successful!
          </h2>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Thank you for your payment. Your transaction was successful.
          </p>
          <ul className="space-y-2 text-left">
            <li>
              <strong>Reference Number:</strong> {referenceNo}
            </li>
            <li>
              <strong>Amount Paid:</strong> ₹60
            </li>
            <li>
              <strong>Date:</strong> {date}
            </li>
            <li>
              <strong>Status:</strong> Completed
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleRedirectToDashboard}>Go to Dashboard</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
