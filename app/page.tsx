
import { About } from "./_components/About";
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { Phrases } from "./_components/Phrase";
import { TherapyServices } from "./_components/Services";
import { MarqueeDemo } from "./_components/testimonials";


export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Phrases/>
      <About/>
      <TherapyServices/>
      <MarqueeDemo/>
    </main>
  )
}