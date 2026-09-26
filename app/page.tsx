import About from "@/components/home/About";
import Advantages from "@/components/home/Advantages";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import KeyFigures from "@/components/home/KeyFigures";
import ProductGrid from "@/components/home/ProductGrid";
import Production from "@/components/home/Production";
import RequestForm from "@/components/RequestForm";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFigures />
      <ProductGrid />
      <Industries />
      <About />
      <Production />
      <Advantages />
      <RequestForm />
    </>
  );
}
