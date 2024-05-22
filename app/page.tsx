import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Image from "next/image";
import FeaturedServices from "@/components/FeaturedServices";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedServices />
      <Testimonials />
      <About />
      <Services />
      <Team />
      <Contacts />
    </>
  );
}
