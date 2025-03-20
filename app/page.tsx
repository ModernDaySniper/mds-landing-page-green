import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

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

