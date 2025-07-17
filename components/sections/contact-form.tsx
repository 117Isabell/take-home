"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, message, privacyChecked });
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact us</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <Label
            htmlFor="message"
            className="text-sm font-medium text-gray-700"
          >
            Message
          </Label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 resize-none"
            placeholder="Enter your message"
          />
        </div>

        <div className="flex items-start space-x-2">
          <input
            id="privacy"
            type="checkbox"
            checked={privacyChecked}
            onChange={(e) => setPrivacyChecked(e.target.checked)}
            required
            className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
          <Label htmlFor="privacy" className="text-sm text-gray-600">
            I agree to the processing of my personal data. For more information,
            see the{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-700 underline"
            >
              privacy policy
            </a>
            .
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 text-white hover:bg-purple-700"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
