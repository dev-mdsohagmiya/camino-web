import {
  AboutUs,
  ContactForm,
  OurExpertise,
  Team,
  ValueAdding,
} from "./components";
import Hero from "./components/hero/Hero";
import Navbarr from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen">
        <Navbarr />
        <Hero />
      </div>
      <AboutUs />
      <OurExpertise />
      <ValueAdding />
      <Team />
      <ContactForm />
    </main>
  );
}
