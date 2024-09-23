import { Youtube, Zap, CreditCard, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function UserDashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-[#282828]">
        <a href="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </a>
        <Button className="bg-red-600 hover:bg-red-700">Get Help</Button>
      </header>

      <main className="flex-grow p-6 bg-gradient-to-b from-[#282828] to-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Subspot!</h1>
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
                  In Progress
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
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Send Invites
                </Button>
              </CardContent>
            </Card>
          </div>

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
                <li className="text-yellow-400">
                  Group formation in progress...
                </li>
                <li>You'll be added to a YouTube Premium family group</li>
                <li>Enjoy ad-free videos, background play, and more!</li>
              </ol>
            </CardContent>
          </Card>

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
            <Button className="bg-red-600 hover:bg-red-700">
              Contact Support
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 bg-[#282828] text-center">
        <p className="text-sm text-gray-400">
          &copy; 2023 Subspot. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
