import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import NavMenu from "@/components/NavMenu";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavMenu />
      <Hero />
      <SocialProof />
      <AboutUs />
    </main>
  );
}
