"use client";

import { AuthHeader } from "@/components/auth-header";
import { Button } from "@/components/ui/button";
import { configs } from "@/lib/constants";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <AuthHeader title="Privacy Policy" />
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground">
            This Privacy Policy describes how {configs.appName} ("we", "our", or "us") collects, uses, and shares your personal information when you use our mobile application and related services (collectively, the "Service").
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
          <p className="text-muted-foreground mb-2">
            We collect several types of information from and about users of our Service, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Personal Information:</strong> This includes your name, email address, phone number, and payment information when you register for an account or make transactions.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our Service, including your browsing actions, patterns, and device information.
            </li>
            <li>
              <strong>Transaction Data:</strong> Records of purchases, transfers, and other financial activities you conduct through our Service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-2">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Provide, maintain, and improve our Service</li>
            <li>Process your transactions and send related information</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Information Sharing</h2>
          <p className="text-muted-foreground mb-2">
            We may share your personal information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Service providers who perform services on our behalf</li>
            <li>Payment processors to complete your transactions</li>
            <li>Legal authorities when required by law or to protect our rights</li>
            <li>Business partners with your consent or as disclosed at the time of collection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Data Security</h2>
          <p className="text-muted-foreground">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
          <p className="text-muted-foreground mb-2">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Withdrawing your consent at any time</li>
            <li>Objecting to processing of your personal information</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at support@kintasme.com.
          </p>
        </section>

        <div className="pt-6 border-t">
          <p className="text-sm text-muted-foreground mb-4">Last Updated: June 1, 2024</p>
          <Button asChild variant="outline">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}