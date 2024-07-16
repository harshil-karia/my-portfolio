'use client'
import About from "@/components/About";
import Aside from "@/components/Aside";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
//import Home from "@/components/Home";
import '../components/style.css';
import { usePathname } from "next/navigation";


export default function Home() {
    const url = usePathname()
    //console.log("==================",url)
  return (
  <div className="main-container">
    <Aside />
    {/* <Home /> */}
    {/* <Portfolio/> */}
    {/* <About/> */}
    {/* <Services/>     */}
    {/* <Contact/> */}
  </div>  
  );
}
