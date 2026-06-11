import TopBar     from "@/components/TopBar";
import Navbar     from "@/components/Navbar";
import Hero       from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Products   from "@/components/Products";
import About      from "@/components/About";
import StatsBar   from "@/components/StatsBar";
import Partners   from "@/components/Partners";
import Contacts   from "@/components/Contacts";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Unified sticky header — TopBar + Navbar in one fixed block */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 shadow-sm">
        <TopBar />
        <Navbar />
      </div>

      <main>
        <Hero />
        <Advantages />
        <Products />
        <About />
        <StatsBar />
        <Partners />
        <Contacts />
      </main>

      <Footer />
    </>
  );
}
