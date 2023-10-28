import About from "@/components/About/About";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Contacts from "@/components/Contacts/Contacts";
import Hero from "@/components/Hero/Hero";
import OurGallery from "@/components/OurGallery/OurGallery";
import WeOffer from "@/components/WeOffer/WeOffer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WeOffer />
      <ChooseUs />
      <OurGallery />
      <Contacts />
    </main>
  );
}
