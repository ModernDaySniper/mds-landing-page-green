import Hero from "./components/pages/Hero"
import WearYourStory from "./components/pages/WearYourStory"
import PortfolioGrid from "./components/pages/PortfolioGrid"
import Timeline from "./components/pages/Timeline"
import Marquee from "./components/pages/Marquee"
import ContactForm from "./components/pages/ContactForm"
import NewsletterSubscribe from "./components/pages/NewsletterSubscribe"
import Services from "./components/pages/Services"
import Testimonials from "./components/pages/Testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <Services />
      <PortfolioGrid />
      <Testimonials />
      <Timeline />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}

