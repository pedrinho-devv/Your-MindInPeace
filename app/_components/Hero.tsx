import Image from "next/image";
import Img from "../Public/imghero.jpg";

export function Hero() {
  return (
    <main className="flex flex-col lg:flex-row justify-center items-center px-11 py-11 gap-8 text-center lg:text-left">
      <div className="flex flex-col items-center gap-5">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight ">
            Find peace. <br />
            Find a shelter in yourself.
            <p className="text-sm font-light mb-4 text-gray-700">
              Talking about your emotions is an act of courage.
            </p>
            <button className="bg-black text-white text-sm px-6 py-4 rounded-lg hover:bg-transparent border border-black hover:text-black duration-300 ease-in-out">Get in Touch</button>
          </h1>
        </div>
      </div>
      <div>
        <Image src={Img} sizes={"100"} alt="Imagem de um psicólogo falando." />
      </div>
    </main>
  );
}
