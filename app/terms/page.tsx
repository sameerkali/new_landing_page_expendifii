import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms covering access to BiltyOne, Review, and LOL, including payment, data ownership, and cancellation.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      kicker="Terms"
      title="Terms of Service"
      updated="[date]"
      disclaimer="Placeholder draft. This is not legal advice — have it reviewed, fill the bracketed numbers, and confirm the jurisdiction before launch."
      blocks={[
        {
          heading: "The service",
          body: [
            "Expendifii provides access to BiltyOne, Review, and LOL on a subscription basis, along with setup and support.",
          ],
        },
        {
          heading: "Accounts",
          body: [
            "We set up your account after a demo. You're responsible for keeping your login secure and for what's done under it.",
          ],
        },
        {
          heading: "Payment",
          body: [
            "Fees are agreed before setup and billed [monthly/annually]. Unpaid accounts may be suspended after [15] days' notice. We can change pricing with [30] days' notice.",
          ],
        },
        {
          heading: "Your data",
          body: [
            "The data you enter stays yours. You can request an export at any time. See the Privacy Policy for how we handle it.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "Don't use the products to send spam, to collect data from people without their knowledge, or to post reviews on behalf of customers who didn't write or approve them.",
          ],
        },
        {
          heading: "Availability",
          body: [
            "We aim to keep the service running but don't guarantee uninterrupted access. We'll give notice of planned maintenance where we can.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "We're not liable for indirect or consequential loss, or for how you use your own data. Our total liability is limited to the fees you paid in the previous [3] months.",
          ],
        },
        {
          heading: "Ending it",
          body: [
            "Either side can cancel with [30] days' notice. On cancellation you can export your data; after [90] days we delete it.",
          ],
        },
        {
          heading: "Law",
          body: [
            "These terms are governed by the laws of India, with courts in [Noida / Gautam Buddh Nagar] having jurisdiction.",
          ],
        },
        {
          heading: "Contact",
          body: ["work.sameerfaridi@gmail.com"],
        },
      ]}
    />
  );
}
