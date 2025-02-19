
import { Hero } from "./_components/Hero";
import { Navbar } from "./_components/Navbar";
import { Phrases } from "./_components/Phrase";


export default function Home(){
  return(
    <main>
      <Navbar/>
      <Hero/>
      <Phrases/>
    </main>
  )
}