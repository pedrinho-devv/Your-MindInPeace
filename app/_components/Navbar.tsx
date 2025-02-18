"use client"

import { useState } from "react";
import { InteractiveHoverButton } from "../../components/magicui/interactive-hover-button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center mt-6 gap-4 py-4 px-14 sm:px-8 relative">
            <div>Logo</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center items-center gap-7">
                <a className="cursor-pointer hover:bg-gray-300 px-2 py-2 hover:text-white rounded-lg duration-500 ease-in-out" href="#">About</a>
                <a className="cursor-pointer hover:bg-gray-300 px-2 py-2 hover:text-white rounded-lg duration-500 ease-in-out" href="#">Services</a>
                <a className="cursor-pointer hover:bg-gray-300 px-2 py-2 hover:text-white rounded-lg duration-500 ease-in-out" href="#">How it Works</a>
                <a className="cursor-pointer hover:bg-gray-300 px-2 py-2 hover:text-white rounded-lg duration-500 ease-in-out" href="#">Testimonials</a>
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
            
            {/* Mobile Menu */}
            {isOpen && (
                <nav className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
                    <a className="cursor-pointer hover:bg-gray-300 px-4 py-2 hover:text-white rounded-lg duration-500 ease-in-out" href="#">About</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-4 py-2 hover:text-white rounded-lg duration-500 ease-in-out" href="#">Services</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-4 py-2 hover:text-white rounded-lg duration-500 ease-in-out" href="#">How it Works</a>
                    <a className="cursor-pointer hover:bg-gray-300 px-4 py-2 hover:text-white rounded-lg duration-500 ease-in-out" href="#">Testimonials</a>
                    <InteractiveHoverButton className="md:block">Book a Session</InteractiveHoverButton>
                </nav>
            )}
        </header>
    );
}
