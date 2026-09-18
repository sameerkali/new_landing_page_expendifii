import { AudienceRow } from "@/components/audience-row";
import { ContactBand } from "@/components/contact-band";
// import { Faq } from "@/components/faq";
import { FounderNote } from "@/components/founder-note";
import { Hero } from "@/components/hero";
import { KineticHeadline } from "@/components/kinetic-headline";
import { NumbersStrip } from "@/components/numbers-strip";
import { ProductsGrid } from "@/components/products-grid";
import { RevealRoot } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
// import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <RevealRoot>
        <main>
          <Hero />
          <AudienceRow />
          <ProductsGrid />
          <KineticHeadline />
          <NumbersStrip />
          {/* <Testimonials /> */}
          <FounderNote />
          {/* <Faq /> */}
          <ContactBand />
        </main>
      </RevealRoot>
      <SiteFooter />
    </>
  );
}
