import React, { useState } from 'react';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { CheckCircle, XCircle } from 'lucide-react';

// List of available platforms
const platforms = [
  { id: 1, name: "Netflix", price: "$12.99 / month" },
  { id: 2, name: "Amazon Prime", price: "$9.99 / month" },
  { id: 3, name: "Disney+", price: "$7.99 / month" },
];

export default function SelectSubscription() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Subscribed to ${selectedPlatform.name} with email: ${email}`);
      setSubscriptionStatus('success');
    } else {
      setSubscriptionStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Choose a Platform to Subscribe</h1>

      {!selectedPlatform ? (
        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Card key={platform.id}>
              <CardHeader>
                <CardTitle>{platform.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">{platform.price}</p>
                <Button
                  onClick={() => handlePlatformSelect(platform)}
                  className="w-full"
                >
                  Select {platform.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Subscribe to {selectedPlatform.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <Label htmlFor="email">Enter Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Subscribe to {selectedPlatform.name}
                </Button>
                {subscriptionStatus === 'success' && (
                  <div className="mt-4 flex items-center text-green-600">
                    <CheckCircle className="mr-2 h-6 w-6" />
                    <span>Subscription successful!</span>
                  </div>
                )}
                {subscriptionStatus === 'error' && (
                  <div className="mt-4 flex items-center text-red-600">
                    <XCircle className="mr-2 h-6 w-6" />
                    <span>Please enter a valid email.</span>
                  </div>
                )}
              </form>
              <Button
                onClick={() => setSelectedPlatform(null)}
                className="mt-4 w-full bg-gray-200 text-gray-800"
              >
                Back to Platform Selection
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
