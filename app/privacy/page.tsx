import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Expendifii collects through BiltyOne, Review, and LOL, and what we do with it.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      kicker="Privacy"
      title="Privacy Policy"
      updated="[date]"
      disclaimer="Placeholder draft. This is not legal advice — have it reviewed and the bracketed values filled in before launch."
      intro='Expendifii ("we") builds and operates BiltyOne, Review, and LOL. This policy explains what we collect and what we do with it.'
      blocks={[
        {
          heading: "Who this covers",
          body: [
            "Two groups: the businesses that pay for our products, and the customers of those businesses who interact with them (for example, someone scanning a review QR code or collecting a stamp).",
          ],
        },
        {
          heading: "What we collect from businesses",
          body: [
            "Name, business name, phone number, email address, and billing details. We use these to run your account, provide support, and invoice you.",
          ],
        },
        {
          heading: "What we collect through Review",
          body: [
            "The rating given, the options the customer selected, any text they add, and the time of the response. We do not require a name, phone number, or email to leave a review.",
            "Review text is drafted for the customer based on what they selected — it is shown to them, and it is posted publicly only if they choose to post it themselves.",
          ],
        },
        {
          heading: "What we collect through LOL",
          body: [
            "A phone number or similar identifier so a returning customer's stamps can be recognised, plus the date and count of visits and rewards claimed.",
          ],
        },
        {
          heading: "What we collect through BiltyOne",
          body: [
            "Consignment, customer, driver, and vehicle records entered by the transporter. This data belongs to the transporter. We store and process it to run the service.",
          ],
        },
        {
          heading: "Who can see it",
          body: [
            "The business that collected it can see its own data. We can access data where needed for support, security, or billing. We do not sell data, and we do not share one business's data with another.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "For as long as the account is active. On request, or within [90] days of an account closing, we delete or anonymise it.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Anyone can ask what we hold about them, ask for a correction, or ask for deletion. Write to work.sameerfaridi@gmail.com and we'll respond within [30] days.",
          ],
        },
        {
          heading: "Third parties",
          body: [
            "We use hosting, payment, and messaging providers to run the service. They process data on our instructions only.",
          ],
        },
        {
          heading: "Cookies",
          body: [
            "We use only what's needed to keep you signed in and to measure basic usage.",
          ],
        },
        {
          heading: "Changes",
          body: ["We'll post changes here and update the date above."],
        },
        {
          heading: "Contact",
          body: [
            "Expendifii, Noida, India.",
            "work.sameerfaridi@gmail.com · +91 96393 56395",
          ],
        },
      ]}
    />
  );
}
