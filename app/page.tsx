import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
// import LogoAnimation from "@/components/LogoAnimation";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Stack from "@/components/stack";


export default function Home() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Stack/>
       
       <Portfolio/>
       <Services/>
       <Contact/>
       <Footer/>
    </div>
  );
}
