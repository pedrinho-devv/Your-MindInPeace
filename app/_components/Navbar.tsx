"use client"

import { useState, useEffect } from "react";
import { InteractiveHoverButton } from "../../components/magicui/interactive-hover-button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Evita o scroll no background quando o menu mobile está aberto
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-md shadow-md z-50 flex justify-between items-center px-5 sm:px-8 py-4">
                <div className="text-xl font-bold">Logo</div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex justify-center items-center gap-7">
                    <a className="cursor-pointer hover:bg-gray-300 px-3 py-2 hover:text-white rounded-lg duration-300" href="#">About</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-3 py-2 hover:text-white rounded-lg duration-300" href="#">Services</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-3 py-2 hover:text-white rounded-lg duration-300" href="#">How it Works</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-3 py-2 hover:text-white rounded-lg duration-300" href="#">Testimonials</a>
                </nav>
                
                {/* Mobile Menu Button */}
                <div className="flex justify-center items-center gap-3">
                    <InteractiveHoverButton className="hidden md:block">Book a Session</InteractiveHoverButton>
                    {isOpen ? (
                        <AiOutlineClose className="md:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(false)} />
                    ) : (
                        <AiOutlineMenu className="md:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(true)} />
                    )}
                </div>
            </header>

            {/* Espaço para evitar sobreposição do conteúdo */}
            <div className="h-20"></div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="fixed top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-40">
                    <a className="cursor-pointer hover:bg-gray-300 px-4 py-2 hover:text-white rounded-lg duration-300" href="#">About</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-4 py-2 hover:text-white rounded-lg duration-300" href="#">Services</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-4 py-2 hover:text-white rounded-lg duration-300" href="#">How it Works</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-4 py-2 hover:text-white rounded-lg duration-300" href="#">Testimonials</a>
                    <InteractiveHoverButton>Book a Session</InteractiveHoverButton>
                </nav>
            )}
        </>
    );
}
