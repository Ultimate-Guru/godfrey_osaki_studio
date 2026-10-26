import type { Metadata } from 'next'
import SiteFooter from "@/components/site-footer"
import SiteHeader from "../about/SiteHeader"
import ContactSection from "./ContactSection"

export const metadata: Metadata = {
  title: "Contact Us - Godfrey Osaki Studios",
  description: "Get in touch with us for any inquiries or collaborations.",
};

const page = () => {
  return (
    <main id="top" className="flex min-h-screen flex-col overflow-x-hidden bg-[#faf8f4]">
      <SiteHeader />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}

export default page