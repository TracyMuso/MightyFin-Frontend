import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import NavMenu from "@/components/NavMenu";
import LoanSteps from "@/components/LoanSteps";
import SocialProof from "@/components/SocialProof";
import BlogandNews from "@/components/BlogxNews";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex flex-col font-Montserrat">
      <NavMenu />
      <Hero />
      <Products />
      <SocialProof />
      <AboutUs />
      <LoanSteps />
      <BlogandNews />
      <Footer />
    </main>
  );
}
