import Image from "next/image";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import Category from "./_components/Category";
import TopSelling from "./_components/TopSelling";
import EasyAndFast from "./_components/EasyAndFast";
import Testimonials from "./_components/Testimonials";
import Partner from "./_components/Partner";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="w-full text-grey relative overflow-hidden">
      <Image
        src={"/images/decore.png"}
        alt="decore"
        width={800}
        height={800}
        className="hidden lg:absolute lg:top-0 lg:right-0 lg:-z-50 lg:block"
      />
      <div className="absolute -top-10 -left-[450px] -z-50 w-[500px] h-[500px] bg-[#D5AEE4] blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-[450px] -z-50 w-[500px] h-[500px] bg-[#D5AEE4] blur-3xl rounded-full"></div>
      <div className="lg:w-4/5 mx-auto py-10 p-5">
        <Navbar />
        <HeroSection />
        <Category />
        <TopSelling />
        <EasyAndFast />
        <Testimonials />
        <Partner />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
