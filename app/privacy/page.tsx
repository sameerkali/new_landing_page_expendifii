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
      updated="18 September 2026"
      intro='Expendifii ("we", "us", "our") builds and operates BiltyOne, Review, and LOL, and builds custom landing pages for small businesses. This policy explains what personal data we collect, why, and what rights you have, under the Digital Personal Data Protection Act, 2023 ("DPDP Act") and the Information Technology Act, 2000.'
      blocks={[
        {
          heading: "Who this applies to",
          body: [
            'This policy covers two groups: the businesses that subscribe to our products ("Business Customers"), and the people who interact with those businesses through our products — for example, someone scanning a Review QR code, collecting a stamp on LOL, or listed as a consignor, consignee, or driver in BiltyOne ("End Users"). Under the DPDP Act, both groups are "Data Principals" whose personal data we process as "Data Fiduciary."',
          ],
        },
        {
          heading: "Personal data we collect from Business Customers",
          body: [
            "Name, business name, phone number, email address, business address, and billing or GST details, so we can set up and invoice your account and provide support.",
          ],
        },
        {
          heading: "Personal data we collect through Review",
          body: [
            "The rating given, the options selected, any text an End User adds, and the time of the response. A name, phone number, or email is not required to leave a review.",
            "The written review is drafted from what the End User selected, shown to them for approval, and posted publicly only if they choose to post it themselves.",
          ],
        },
        {
          heading: "Personal data we collect through LOL",
          body: [
            "A phone number or similar identifier so a returning End User's stamp card can be recognised, along with visit dates, stamp counts, and rewards claimed.",
          ],
        },
        {
          heading: "Personal data we collect through BiltyOne",
          body: [
            "Consignment (GR), customer, driver, and vehicle records that the transporter using BiltyOne enters, including names, phone numbers, addresses, and vehicle numbers. This data belongs to that Business Customer; we process it on their instructions to provide the Service. If your details appear in someone's BiltyOne records, direct requests about them to that transporter, or to us — we'll assist either way.",
          ],
        },
        {
          heading: "Why we process personal data",
          body: [
            "To provide and maintain the Services, invoice and support Business Customers, respond to requests and grievances, comply with applicable law, and — where an End User voluntarily gives information for a specified purpose, such as leaving a review or joining a loyalty programme — to fulfil that purpose. Where the DPDP Act requires it, we rely on consent, which can be withdrawn at any time as described below.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "For as long as the relevant account is active. On request, or within 90 days of an account closing, we delete or anonymise personal data, except where we're required by law to keep it longer.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "We don't sell personal data, and we don't share one Business Customer's data with another. We share it with the hosting, payment, messaging (WhatsApp/SMS), and analytics providers who help us run the Services, acting on our instructions, and with government or regulatory authorities where the law requires it.",
          ],
        },
        {
          heading: "Where your data is stored",
          body: [
            "Our infrastructure may run in India or with cloud providers whose data centres sit outside India. Where personal data is transferred outside India, we take reasonable steps to keep it protected, consistent with the DPDP Act.",
          ],
        },
        {
          heading: "Security",
          body: [
            "We follow reasonable security practices and procedures, consistent with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and the DPDP Act, to guard personal data against unauthorised access, alteration, or loss. No method of transmission or storage is completely secure, and we can't guarantee absolute security.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "As a Data Principal under the DPDP Act, you can ask what personal data we hold about you, ask us to correct or complete it, ask us to erase it once it's no longer needed for the purpose it was collected, withdraw consent you've given, nominate someone else to exercise these rights on your behalf if you die or become incapacitated, and raise a grievance with us.",
            "Write to our Grievance Officer at work.sameerfaridi@gmail.com; we acknowledge requests within 48 hours and respond within 30 days. If you're not satisfied with our response, you may approach the Data Protection Board of India.",
          ],
        },
        {
          heading: "Children's data",
          body: [
            "Our Services are intended for businesses and adults. We don't knowingly collect a child's personal data without a parent or guardian's consent, as the DPDP Act requires. If you believe a child's data reached us without that consent, contact us and we'll delete it.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "Our website uses only the cookies and basic analytics needed to keep you signed in and understand how the site is used — not to build advertising profiles.",
          ],
        },
        {
          heading: "Third-party links",
          body: [
            "Our website and products may link to third-party sites, such as a Google review page, that we don't operate. We're not responsible for their privacy practices.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy from time to time. We'll post the update here and revise the date above, and tell Business Customers by email or WhatsApp when a change is material.",
          ],
        },
        {
          heading: "Grievance officer and contact",
          body: [
            "Grievance Officer: Sameer Faridi.",
            "Expendifii, Noida, Uttar Pradesh, India.",
            "work.sameerfaridi@gmail.com · +91 96393 56395",
          ],
        },
      ]}
    />
  );
}
