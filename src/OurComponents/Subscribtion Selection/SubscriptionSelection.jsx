import React, { useState } from "react";
import {
  ChevronRight,
  Users,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  Mail,
  AlertTriangle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const SubscriptionProcessPage = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleNext = () => {
    if (step === 3 && (!email || email !== confirmEmail || !termsAccepted)) {
      // Show an error or prevent moving to the next step
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // including payment processing and API calls
    console.log("Form submitted");
    // For demo purposes, we'll just move to a "success" step
    setStep(5);
  };

  const navigate = useNavigate();
  function GoToDashboard() {
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Button variant="ghost" onClick={handleBack} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-red-600 flex justify-between">
              <div>Subscribe to YouTube Premium Family Plan</div>
              <Button
                variant="outline"
                className="text-white bg-black size-13"
                onClick={GoToDashboard}
              >
                Dashboard
              </Button>
            </CardTitle>
            <CardDescription>
              Complete the following steps to join our family plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                <li
                  className={`flex md:w-full items-center ${
                    step >= 1 ? "text-red-600 dark:text-red-500" : ""
                  } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
                >
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <CheckCircle
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 ${
                        step >= 1 ? "text-red-600" : "text-gray-400"
                      }`}
                    />
                    Plan
                  </span>
                </li>
                <li
                  className={`flex md:w-full items-center ${
                    step >= 2 ? "text-red-600 dark:text-red-500" : ""
                  } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
                >
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <CheckCircle
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 ${
                        step >= 2 ? "text-red-600" : "text-gray-400"
                      }`}
                    />
                    <span className="mr-2">2</span> Group
                  </span>
                </li>
                <li
                  className={`flex md:w-full items-center ${
                    step >= 3 ? "text-red-600 dark:text-red-500" : ""
                  } after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
                >
                  <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <CheckCircle
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 ${
                        step >= 3 ? "text-red-600" : "text-gray-400"
                      }`}
                    />
                    <span className="mr-2">3</span> Email
                  </span>
                </li>
                <li
                  className={`flex items-center ${
                    step >= 4 ? "text-red-600 dark:text-red-500" : ""
                  }`}
                >
                  <span className="flex items-center">
                    <CheckCircle
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 ${
                        step >= 4 ? "text-red-600" : "text-gray-400"
                      }`}
                    />
                    <span className="mr-2">4</span> Payment
                  </span>
                </li>
              </ol>
            </div>
            {step === 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Confirm Your Plan
                </h3>
                <Card>
                  <CardHeader>
                    <CardTitle>YouTube Premium Family Plan</CardTitle>
                    <CardDescription>Up to 6 family members</CardDescription>
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
                    <div className="text-2xl font-bold">
                      &#8377;60.00
                      <span className="text-sm font-normal">/month</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Group Formation Information
                </h3>
                <Alert>
                  <Users className="h-4 w-4" />
                  <AlertTitle>How groups are formed</AlertTitle>
                  <AlertDescription>
                    After your payment is confirmed, you'll be placed in a group
                    with other subscribers. Groups are typically formed within
                    5-7 days. You'll receive an email notification once your
                    group is complete and your benefits are active.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Email Confirmation
                </h3>
                <p className="mb-4">
                  Please enter the email address you want to use for your
                  YouTube Premium subscription:
                </p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your-email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmEmail">Confirm Email Address</Label>
                    <Input
                      id="confirmEmail"
                      type="email"
                      placeholder="Confirm your email"
                      value={confirmEmail}
                      onChange={(e) => setConfirmEmail(e.target.value)}
                      required
                    />
                  </div>
                  {email && confirmEmail && email !== confirmEmail && (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Email Mismatch</AlertTitle>
                      <AlertDescription>
                        The email addresses you entered do not match. Please
                        check and try again.
                      </AlertDescription>
                    </Alert>
                  )}
                  <Alert>
                    <Mail className="h-4 w-4" />
                    <AlertTitle>Important Information</AlertTitle>
                    <AlertDescription>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          This email will be used to activate your YouTube
                          Premium Family Plan.
                        </li>
                        <li>
                          Ensure it's the email associated with your YouTube
                          account.
                        </li>
                        <li>
                          For a smooth experience, make sure your YouTube
                          account hasn't changed family groups more than once in
                          the past year. This helps us provide the best service
                          to all our users.
                        </li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I confirm that I have read and understood all the
                      instructions above.
                    </label>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                <div className="space-y-4">
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card">Credit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div>
                      <p>
                        You will be redirected to PayPal to complete your
                        payment.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            )}

            {step === 5 && (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">
                  Subscription Successful!
                </h3>
                <p className="text-gray-600 mb-4">
                  Thank you for subscribing to YouTube Premium Family Plan. You
                  will receive a confirmation email shortly.
                </p>
                <Button onClick={() => (window.location.href = "/dashboard")}>
                  Go to Dashboard
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter>
            {step < 4 && (
              <Button
                onClick={handleNext}
                className="w-full"
                disabled={
                  step === 3 &&
                  (!email || email !== confirmEmail || !termsAccepted)
                }
              >
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            {step === 4 && (
              <Button onClick={handleSubmit} className="w-full">
                Pay &#8377;60.00 and Subscribe{" "}
                <CreditCard className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionProcessPage;
