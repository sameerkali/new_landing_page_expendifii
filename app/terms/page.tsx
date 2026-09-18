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
      updated="18 September 2026"
      blocks={[
        {
          heading: "Acceptance of these terms",
          body: [
            'These Terms of Service ("Terms") govern access to and use of BiltyOne, Review, LOL, and any custom landing page we build ("Services"), operated by Expendifii ("we", "us", "our"). By booking a demo, activating an account, or using any Service, you ("Customer", "you") agree to these Terms. If you accept these Terms on behalf of a business, you confirm you have authority to bind that business, and "you" refers to that business.',
          ],
        },
        {
          heading: "Definitions",
          body: [
            '"End Users" means the people who interact with the Services through you — for example, a customer scanning a Review QR code, a customer collecting a stamp on LOL, or a consignor, consignee, or driver recorded in BiltyOne. "Your Data" means the data you or your End Users enter into the Services.',
          ],
        },
        {
          heading: "Eligibility and accounts",
          body: [
            "You must be at least 18 years old and capable of entering into a valid contract under the Indian Contract Act, 1872. We create your account after a demo call. You're responsible for the accuracy of the information you give us, for keeping your login credentials confidential, and for all activity under your account until you tell us it's been compromised.",
          ],
        },
        {
          heading: "What we provide",
          body: [
            "BiltyOne records consignment notes (GRs), customers, drivers, and vehicles for transporters. Review helps a customer draft, and optionally post, a Google review. LOL is a digital loyalty stamp card. We also design, build, and host single-page websites on request. We may add, change, or retire features over time, and we'll give reasonable notice before removing one you actively rely on.",
          ],
        },
        {
          heading: "Fees, billing, and taxes",
          body: [
            "Fees are agreed with you before setup and billed monthly or annually as agreed at onboarding, in Indian Rupees, exclusive of GST and any other tax, which is added where it applies. Invoices are due within 15 days of issue. If an invoice is more than 15 days overdue, we may suspend access after notifying you. We may revise pricing with at least 30 days' written notice; using the Services after that notice period takes effect means you accept the new pricing.",
          ],
        },
        {
          heading: "Your data and its ownership",
          body: [
            "As between you and us, you own Your Data. We process it only to provide, maintain, and support the Services, as described in our Privacy Policy. You can request an export at any time; we aim to provide it within 15 days. You're responsible for having the right to enter your End Users' personal data into the Services, and for giving them any notice and getting any consent that Indian law — including the Digital Personal Data Protection Act, 2023 — requires of you as the business collecting it.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You agree not to use the Services to send unsolicited bulk messages, to collect personal data from End Users without their knowledge, to post a review that the reviewer didn't write or approve, to interfere with the integrity of the Services, or to break any applicable law, including the Information Technology Act, 2000. We may suspend or terminate access if we reasonably believe this section has been breached.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "We own the Services — the software, design, and any landing-page templates — other than Your Data. We grant you a limited, non-exclusive, non-transferable licence to use the Services for your business while you're subscribed. Where we build a custom landing page for you, ownership of the finished page is as agreed in writing at the time; unless we agree otherwise, we keep ownership of the underlying code and templates and license the finished page to you for as long as we host it.",
          ],
        },
        {
          heading: "Confidentiality",
          body: [
            "Each side keeps the other's confidential information confidential and uses it only to perform these Terms, except where disclosure is required by law or by a competent Indian court or authority.",
          ],
        },
        {
          heading: "Availability and support",
          body: [
            "We aim to keep the Services available and responsive but don't guarantee uninterrupted or error-free operation. We'll try to give advance notice of planned maintenance likely to affect you. Support runs over WhatsApp and email during normal business hours in India.",
          ],
        },
        {
          heading: "Suspension and termination",
          body: [
            "Either side can end these Terms for convenience with 30 days' written notice. We may suspend or terminate your access immediately if you materially breach these Terms and don't fix it within 15 days of being told, or if your account is more than 15 days overdue on payment.",
          ],
        },
        {
          heading: "What happens when it ends",
          body: [
            "Your right to use the Services ends on termination. You can request an export of Your Data within 90 days; after that, we may delete or anonymise it, except where we're required by law to keep it longer.",
          ],
        },
        {
          heading: "Disclaimers",
          body: [
            'The Services are provided "as is" and "as available." To the extent Indian law allows, we disclaim implied warranties, including fitness for a particular purpose — except any warranty that can\'t be excluded under the Consumer Protection Act, 2019, or other applicable law.',
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the extent the law allows, neither side is liable to the other for indirect or consequential loss, including lost profit or goodwill. Our total liability under these Terms in any 12-month period is limited to the fees you paid us in the preceding 3 months. Nothing here limits liability that Indian law doesn't allow us to limit, including for fraud or wilful misconduct.",
          ],
        },
        {
          heading: "Indemnity",
          body: [
            "You agree to cover claims, losses, and expenses arising from Your Data, from your use of the Services in breach of these Terms, or from your breach of applicable law — including data protection law — in respect of your End Users.",
          ],
        },
        {
          heading: "Force majeure",
          body: [
            "Neither side is liable for delay or failure caused by events beyond its reasonable control, including internet or power outages, government action, or natural disasters.",
          ],
        },
        {
          heading: "Governing law and jurisdiction",
          body: [
            "These Terms are governed by the laws of India. Courts at Gautam Buddh Nagar, Uttar Pradesh have exclusive jurisdiction over any dispute arising from them, subject to applicable law.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: [
            "We may update these Terms from time to time. We'll notify you of material changes by email or WhatsApp at least 15 days before they take effect. Using the Services after that means you accept the update.",
          ],
        },
        {
          heading: "Grievance officer",
          body: [
            "In line with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, our Grievance Officer is Sameer Faridi, reachable at work.sameerfaridi@gmail.com. We acknowledge grievances within 48 hours and aim to resolve them within 30 days.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Expendifii, India.",
            "work.sameerfaridi@gmail.com · +91 96393 56395",
          ],
        },
      ]}
    />
  );
}
