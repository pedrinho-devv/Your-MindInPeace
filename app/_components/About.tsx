import Image from "next/image";
import ImgAbout from "../public/about.jpg";

export function About() {
  return (
    <section className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-6 px-7 mb-96">
      <div className="flex-shrink-0 w-full lg:w-auto">
        <Image 
          src={ImgAbout} 
          alt="Imagem de sobre" 
          width={500} 
          height={300} 
          objectFit="cover" 
        />
      </div>

      <div className="flex flex-col items-start gap-2 w-full lg:w-auto lg:text-left">
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <p className="bg-black text-white rounded-lg px-4 py-2">Meet your Therapeutic</p>
        </div>
        <h2 className="text-3xl font-extrabold">With a team of experienced and empathetic therapists</h2>
        <p className="text-sm text-gray-400">We believe that emotional well-being is the foundation for a fulfilling life</p>
      </div>
    </section>
  );
}
