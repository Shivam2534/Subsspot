import { useState } from "react";
import { User, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    subscriptionStatus: "inactive",
  });

  const navigate = useNavigate();

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleSubscribe = () => {
    setShowPaymentModal(true);
    navigate("/SubscriptionSelection");
  };

  const handlePaymentSuccess = () => {
    // Simulate a successful payment
    setUser({ ...user, subscriptionStatus: "active" });
    setShowPaymentModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-red-600 px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-white">
              Your Dashboard
            </h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={user.name}
                />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <Alert className="mb-6">
              <AlertTitle className="text-lg font-semibold">
                Subscription Status:
                {user.subscriptionStatus === "active" ? (
                  <Badge className="ml-2 bg-green-500">Active</Badge>
                ) : (
                  <Badge className="ml-2 bg-yellow-500">Inactive</Badge>
                )}
              </AlertTitle>
              <AlertDescription>
                {user.subscriptionStatus === "active"
                  ? "You are currently subscribed to YouTube Premium Family Plan."
                  : "You are not currently subscribed to any plan."}
              </AlertDescription>
            </Alert>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>YouTube Premium Family Plan</CardTitle>
                <CardDescription>
                  Share premium benefits with up to 5 family members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Ad-free videos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Background play
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Offline downloads
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    YouTube Music Premium included
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <div className="text-2xl font-bold">
                  &#8377;60.00<span className="text-sm font-normal">/month</span>
                  </div>
                  {user.subscriptionStatus === "active" ? (
                    <Button variant="outline" disabled>
                      Subscribed
                    </Button>
                  ) : (
                    <Button onClick={handleSubscribe}>Subscribe Now</Button>
                  )}
                </div>
              </CardFooter>
            </Card>

            {user.subscriptionStatus === "active" && (
              <Card>
                <CardHeader>
                  <CardTitle>Manage Your Subscription</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    Your next billing date is October 15, 2024
                  </p>
                  <Button variant="outline">View Billing History</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Complete Your Subscription</CardTitle>
              <CardDescription>
                Enter your payment details to subscribe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end space-x-2 w-full">
                <Button
                  variant="outline"
                  onClick={() => setShowPaymentModal(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handlePaymentSuccess}>Pay  &#8377;60.00</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
