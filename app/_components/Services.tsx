"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MagicCard } from "../../components/magicui/magic-card";
import Ind from "../assets/ind.jpg";
import Fam from "../assets/fam.jpg";
import Casal from "../assets/casal.jpg";
import Image from "next/image"; // Importe o componente Image do Next.js

const services = [
  { 
    title: "Terapia Individual", 
    img: Ind, 
    description: "A terapia individual oferece apoio para quem busca autoconhecimento e superação de desafios pessoais."
  },
  { 
    title: "Terapia de Casal", 
    img: Casal, 
    description: "A terapia de casal auxilia na resolução de conflitos e melhora da comunicação entre parceiros."
  },
  { 
    title: "Aconselhamento Familiar", 
    img: Fam, 
    description: "O aconselhamento familiar ajuda na compreensão mútua e resolução de conflitos dentro da família."
  },
];

export function TherapyServices() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Nossos Serviços de Terapia
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <MagicCard
              className="flex flex-col items-center justify-center text-center p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              {/* Espaço para a imagem com o componente Image do Next.js */}
              <Image 
                src={service.img} 
                alt={service.title} 
                className="w-full h-40 object-cover rounded-lg mb-4" 
                width={500}  // Defina a largura que preferir
                height={200} // Defina a altura que preferir
                layout="intrinsic" // Pode ser "intrinsic", "responsive" ou "fixed"
              />

              {/* Título */}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>

              {/* Descrição */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>

              {/* Botão */}
              <button className="mt-4 px-5 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition">
                Saiba Mais
              </button>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
