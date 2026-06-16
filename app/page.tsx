import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import TopBar from "@/components/TopBar";

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
        {/* <StatsBar /> */}
        <Partners />
        <Contacts />
      </main>

      <Footer />
    </>
  );
}
