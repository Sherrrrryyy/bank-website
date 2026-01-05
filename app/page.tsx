import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import FinincialTools from "@/components/FinincialTools";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Secure from "@/components/Secure";
import WhyBank from "@/components/WhyBank";
import Image from "next/image";

export default function Home() {
  return (
 <>
 <HeroSection />
 <FinincialTools />
 <AboutUs />
 <WhyBank />
 <Secure />
 <Contact />
 </>
  );
}
