import { Youtube, Check, ArrowRight, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function GroupSelection() {
  const navigate = useNavigate();

  function NavigateToEmailSelection() {
    navigate("/EmailConfirmation");
  }

  function GoToDashboard() {
    navigate("/dashboard");
  }

  function GoBack() {
    navigate(-1); // Navigate back to the previous page
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex items-center justify-between p-4 bg-black border-b border-zinc-800">
        <a href="/" className="flex items-center space-x-2">
          <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
          <span className="text-lg sm:text-xl font-bold">Subspot</span>
        </a>
        <Button
          onClick={GoToDashboard}
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
              <CardTitle className="text-2xl text-white flex items-center">
                <Users className="mr-2 h-5 w-5 text-red-600" />
                Group Formation Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <h3 className="text-xl font-semibold mb-2">
                How groups are formed
              </h3>
              <p>
                After your payment is confirmed, you'll be placed in a group
                with other subscribers. Groups are typically formed within 3-4
                days. You'll receive an email notification once your group is
                complete and your benefits are active.
              </p>
            </CardContent>
          </Card>

          <div className="flex space-x-4">
            <Button
              onClick={GoBack}
              className="w-full bg-zinc-600 hover:bg-zinc-700 text-lg py-6 text-white flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Back
            </Button>

            <Button
              onClick={NavigateToEmailSelection}
              className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 text-white flex items-center justify-center"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
