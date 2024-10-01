import {
  Youtube,
  Zap,
  CreditCard,
  Gift,
  ArrowRight,
  User,
  Calendar,
  Shield,
  Activity,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShareButtons from "./ShareButtons";

export default function UserDashboard() {
  const UserData = useSelector((state) => state.auth.UserData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const RedirectToContectPage = () => {
    navigate("/contact");
  };

  const logoutUser = () => {
    localStorage.removeItem("UserData");
    navigate("/");
  };

  return UserData ? (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <a href="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </a>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-full bg-[#282828] flex items-center justify-center transition-transform hover:scale-110"
          >
            <User className="h-6 w-6 text-white" />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
              <Link
                to={"/userdashboard"}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
              >
                Profile
              </Link>
              <button
                onClick={logoutUser}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow p-6 bg-gradient-to-b from-[#282828] to-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome {UserData.username}
            </h1>
            <p className="text-xl text-gray-300">
              Let's get you started with YouTube Premium.
            </p>
          </div>

          <Card className="bg-[#1E1E1E] border-red-600 border-2 text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Your Subscription Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Group Formation:</span>
                <span className="text-lg font-semibold text-yellow-400">
                  {UserData?.currentStatus}
                </span>
              </div>
              <Progress value={35} className="h-2 bg-gray-700 " />

              <p className="text-center text-sm text-gray-400">
                Estimated time: 2-3 days
              </p>
              <Button className="w-full bg-red-600 hover:bg-red-700 mt-4">
                Check Status
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6 bg-[#1E1E1E] shadow-lg rounded-lg overflow-hidden ">
            <CardHeader className="bg-[#1E1E1E] text-white">
              <CardTitle className="flex items-center text-lg">
                <Shield className="mr-2 h-5 w-5" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                {[
                  {
                    icon: <User className="h-4 w-4" />,
                    label: "Email",
                    value: UserData.loginEmail,
                  },
                  {
                    icon: <User className="h-4 w-4" />,
                    label: "Subscribed Email",
                    value: UserData?.subscribingEmail,
                  },
                  {
                    icon: <Calendar className="h-4 w-4" />,
                    label: "Account created",
                    value: formatDate(UserData.createdAt),
                  },
                  {
                    icon: <CreditCard className="h-4 w-4" />,
                    label: "Subscription renewal",
                    value: UserData.wantToContinueForTheNextMonth
                      ? " Manual"
                      : "Automatic",
                  },
                  {
                    icon: <Shield className="h-4 w-4" />,
                    label: "Account status",
                    value: UserData.isVerified ? "Verified" : "Not verified",
                  },
                  {
                    icon: <Activity className="h-4 w-4" />,
                    label: "Subscription status",
                    value: UserData.isSubscribed ? "Active" : "Inactive",
                  },
                  {
                    icon: <Users className="h-4 w-4" />,
                    label: "subscribed",
                    value: UserData.isSubscribed
                      ? "Subscribed"
                      : "Not Subscribed",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm "
                  >
                    <div className="text-gray-400 ">{item.icon}</div>
                    <span className="text-white">{item.label}:</span>
                    <span className="font-medium  text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-6  lg:grid-cols-2">
            <Card className="bg-[#282828] shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  Family Group
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 ">
                <p className="text-sm  mb-2 text-white">
                  {UserData.isAPartOfFamily
                    ? "You are part of a family group"
                    : "You are not yet part of a family group"}
                </p>
                <p className="text-xs text-white">
                  Family changes: {UserData.noOfTimesFamilyChanged}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#282828] shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center text-lg">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Status
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      UserData.isPaymentCompleted
                        ? "bg-green-500"
                        : "bg-orange-400"
                    }`}
                  ></div>
                  <p className="text-sm text-white ml-2">
                    {UserData.isPaymentCompleted
                      ? "Payment Completed"
                      : "Payment Pending"}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-xs text-white">
                    Last Paid On: {formatDate(UserData?.lastPaymentDate)}
                  </p>
                  <p className="text-xs text-white">
                    Next Payment Date: {formatDate(UserData?.nextPaymentDate)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {UserData.paymentHistory.length > 0 && (
            <Card className="bg-[#282828] border-gray-700 text-white">
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {UserData.paymentHistory.map((payment, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{formatDate(payment.date)}</span>
                      <div className="flex gap-8 justify-center items-center">
                        <span>₹{payment.amount}</span>
                        <span className=" text-green-500 text-xl">
                          {payment.status}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <Card className="bg-[#282828] border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">What's Next?</CardTitle>
              <CardDescription>
                Here's what you can expect in the coming days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-green-400">Sign up completed ✓</li>
                <li className="text-green-400">Have you subscribed ✓</li>
                <li
                  className={`${
                    UserData?.isAPartOfFamily
                      ? "text-green-400"
                      : "text-orange-300"
                  }`}
                >
                  Group formation in progress...
                </li>
                <li>{`You'll be added to a YouTube Premium family group`}</li>
                <li>Enjoy ad-free videos, background play, and more!</li>
              </ol>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2 text-white">
            <Card className="bg-[#282828] border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                  Get Started
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center">
                  Complete Your Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center">
                  Set Up Payment Method <CreditCard className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#282828] border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="mr-2 h-5 w-5 text-pink-400" />
                  Refer a Friend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Invite friends and both get one month free!
                </p>
                <Button className="w-full p-0 flex justify-start bg-[#282828] hover:bg-[#282828]">
                  {/* Send Invites */}
                  <ShareButtons />
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-red-600 to-red-800 text-white">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
              <p className="text-lg mb-4">
                With Subspot, you're saving up to 60% compared to a regular
                YouTube Premium subscription!
              </p>
              <div className="flex justify-between items-center bg-black bg-opacity-20 p-4 rounded-lg">
                <span>Regular Price: ₹149/month</span>
                <span className="font-bold">Your Price: ₹60/month</span>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">
              Our support team is here to assist you with any questions.
            </p>
            <Button
              onClick={RedirectToContectPage}
              className="bg-red-600 hover:bg-red-700"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </main>
    </div>
  ) : (
    <div>please Login</div>
  );
}
