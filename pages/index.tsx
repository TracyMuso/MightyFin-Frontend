import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import NavMenu from "@/components/NavMenu";
import LoanSteps from "@/components/LoanSteps";
import BlogandNews from "@/components/BlogxNews";
import Footer from "@/components/Footer";
import Products from "@/components/Products";
import Whyus from "@/components/Whyus";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <main className="flex flex-col font-Montserrat">
      <NavMenu />
      <Hero />
      <Products />
      <Whyus />
      <LoanSteps />
      <BlogandNews />
      <SocialProof />
      <Footer />
    </main>
  );
}
