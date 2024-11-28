import Aboutus from "@/components/aboutus/Aboutus";
import Accountinfo from "@/components/accountinfo/Accountinfo";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/herosection/HeroSection";
import Howitwork from "@/components/howitwork/Howitwork";
import Joinpara from "@/components/joinpara/Joinpara";
import Navbar from "@/components/Navbar";
import Oursolution from "@/components/oursolution/Oursolution";
import Welcom from "@/components/welcomtext/Welcom";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Welcom />
        <Accountinfo />
        <Joinpara />
        <Oursolution />
        <Howitwork />
        <Aboutus />
        <Footer />
      </div>
    </>
  );
}
