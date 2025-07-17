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
    <div className="bg-card rounded-lg p-6">
      <h3 className="text-xl font-semibold text-card-foreground mb-6">
        Contact us
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label
            htmlFor="email"
            className="text-sm font-medium text-card-foreground"
          >
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
            className="text-sm font-medium text-card-foreground"
          >
            Message
          </Label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border border-input bg-transparent text-foreground shadow-sm focus:border-ring focus:ring-ring/50 focus:ring-[3px] resize-none px-3 py-2 text-base placeholder:text-muted-foreground"
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
            className="mt-1 h-4 w-4 rounded border-border bg-background text-accent focus:ring-ring"
          />
          <Label htmlFor="privacy" className="text-sm text-muted-foreground">
            I agree to the processing of my personal data. For more information,
            see the{" "}
            <a href="#" className="text-accent hover:text-accent/80 underline">
              privacy policy
            </a>
            .
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
