"use client";

import { AuthHeader } from "@/components/auth-header";
import { Button } from "@/components/ui/button";
import { configs } from "@/lib/constants";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <AuthHeader title="Terms of Service" />
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to {configs.appName}. These Terms of Service ("Terms") govern your use of our mobile application and related services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Account Registration</h2>
          <p className="text-muted-foreground">
            To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Use of Service</h2>
          <p className="text-muted-foreground mb-2">
            You agree not to use the Service:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>In any way that violates any applicable national or international law or regulation</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
            <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Payments and Transactions</h2>
          <p className="text-muted-foreground">
            The Service allows you to make various payments and transactions. You agree to pay all fees and charges associated with your transactions. All payment information will be processed securely through our payment processors. We are not responsible for any errors or issues related to payment processing by third-party payment processors.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
          <p className="text-muted-foreground">
            The Service and its original content, features, and functionality are and will remain the exclusive property of {configs.appName} and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of {configs.appName}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Termination</h2>
          <p className="text-muted-foreground">
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the Service or delete your account through the settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            In no event shall {configs.appName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
          <p className="text-muted-foreground">
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact us at support@kintasme.com.
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