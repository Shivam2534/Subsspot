import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle, Youtube } from "lucide-react";
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
  const [referenceNo, setReferenceNo] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setReferenceNo(searchParams.get("referenceNo"));
    setDate(new Date().toLocaleString());
  }, [location]);

  const handleRedirectToDashboard = () => {
    navigate("/userdashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <Link to="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-[#282828] border-gray-700">
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-center text-red-600">
              Payment Successful!
            </h2>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4 text-gray-300">
              Thank you for your payment. Your transaction was successful.
            </p>
            <ul className="space-y-2 text-left text-gray-300">
              <li>
                <strong className="text-white">Reference Number:</strong>{" "}
                {referenceNo}
              </li>
              <li>
                <strong className="text-white">Amount Paid:</strong> ₹60
              </li>
              <li>
                <strong className="text-white">Date:</strong> {date}
              </li>
              <li>
                <strong className="text-white">Status:</strong>{" "}
                <span className="text-red-600">Completed</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={handleRedirectToDashboard}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Go to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-[#282828] py-6 px-4 text-center text-gray-400">
        <p>&copy; 2023 Subspot. All rights reserved.</p>
      </footer>
    </div>
  );
}
