import Accountinfo from "@/components/accountinfo/Accountinfo";
import HeroSection from "@/components/herosection/HeroSection";
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
      </div>
    </>
  );
}
