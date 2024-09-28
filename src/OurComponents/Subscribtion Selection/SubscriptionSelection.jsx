import {
  Youtube,
  Check,
  ArrowRight,
  PlayCircle,
  Download,
  Music,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function PlanInfo() {
  const navigate = useNavigate();
  function NavigateToGroupSelection() {
    navigate("/GroupSelection");
  }
  function Gotodashboard() {
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-black border-b border-zinc-800">
        <a href="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </a>
        <Button
          onClick={Gotodashboard}
          className="bg-zinc-800 hover:bg-zinc-700 text-white"
        >
          Dashboard
        </Button>
      </header>

      <main className="flex-grow p-6 bg-black">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600">
              Subscribe to YouTube Premium Family Plan
            </h1>
            <p className="text-lg text-gray-300">Step 1: Plan Information</p>
          </section>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="rounded-full bg-red-600 p-2">
                <Check className="h-5 w-5 text-white" />
              </div>
              <span className="ml-2 text-red-600 font-semibold">1 Plan</span>
            </div>
            <div className="h-px bg-zinc-700 flex-grow mx-4"></div>
            <div className="flex items-center">
              <div className="rounded-full bg-zinc-700 p-2">
                <span className="text-white font-semibold">2</span>
              </div>
              <span className="ml-2 text-zinc-400">Group</span>
            </div>
            <div className="h-px bg-zinc-700 flex-grow mx-4"></div>
            <div className="flex items-center">
              <div className="rounded-full bg-zinc-700 p-2">
                <span className="text-white font-semibold">3</span>
              </div>
              <span className="ml-2 text-zinc-400">Email</span>
            </div>
            <div className="h-px bg-zinc-700 flex-grow mx-4"></div>
            <div className="flex items-center">
              <div className="rounded-full bg-zinc-700 p-2">
                <span className="text-white font-semibold">4</span>
              </div>
              <span className="ml-2 text-zinc-400">Payment</span>
            </div>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                YouTube Premium Family Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                Enjoy ad-free videos, background play, and more for up to 6
                family members.
              </p>
              <div className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg">
                <span className="text-xl font-semibold text-white">Price:</span>
                <span className="text-2xl font-bold text-red-600">
                  ₹60/month
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <PlayCircle className="h-5 w-5 mr-2 text-red-600" />
                  Ad-free videos
                </li>
                <li className="flex items-center text-gray-300">
                  <Download className="h-5 w-5 mr-2 text-red-600" />
                  Download videos for offline viewing
                </li>
                <li className="flex items-center text-gray-300">
                  <Music className="h-5 w-5 mr-2 text-red-600" />
                  Access to YouTube Music Premium
                </li>
                <li className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 mr-2 text-red-600" />
                  Share with up to 5 family members
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-xl text-white">
                How Subspot Works
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-300">
              <p>1. Choose your plan and complete the subscription process.</p>
              <p>
                2. We'll automatically form a family group for you (takes 3-4
                days).
              </p>
              <p>3. You'll receive an email once your group is ready.</p>
              <p>4. Start enjoying all YouTube Premium benefits!</p>
            </CardContent>
          </Card>

          <Button
            onClick={NavigateToGroupSelection}
            className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 text-white flex items-center justify-center"
          >
            Continue to Group Formation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
