'use client'
import Aside from "@/components/Aside";
import '../components/style.css';
import { usePathname } from "next/navigation";
import Home from "@/components/Home";


export default function page() {
  return (
  <div>
    <Aside />
    <Home />
  </div>  
  );
}
