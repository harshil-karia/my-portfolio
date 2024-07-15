import About from "@/components/About";
import Aside from "@/components/Aside";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import '../components/style.css';

export default function Home() {
  return (
  <main className="main-container">
    <Aside />
    {/* <Portfolio/> */}
    <About/>
    <Services/>    
    {/* <Contact/> */}
  </main>  
  );
}
