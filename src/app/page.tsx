import About from "@/components/About";
import AccordionFaq from "@/components/AccordionFaq";
import BannerCenter from "@/components/BannerCenter";

import Footer from "@/components/Footer.tsx/Footer";
import GreenBar from "@/components/GreenBar";
import Informations from "@/components/Informations";
import Navbar from "@/components/Navbar";
import Prestations from "@/components/Prestations";
import Realisation from "@/components/Realisation";
 
import Service from "@/components/Service";
import Home from "@/components/Home";
import Services from "@/components/Services";

import ContactBlock from "@/components/ContactBlock";


export default function page() {
  return (
   <>
    <GreenBar/>
    <Navbar/>
  <Home/>
    <Services/>
    <About/>
    <Service/>
   <Prestations/>
   
   <Informations/>
  {/* <DevisClient/> */}
    
   <BannerCenter/>
   <Realisation/>
   <AccordionFaq/>
  
   <ContactBlock/>
   <Footer/>
 
   </>
  )
}
