import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-purple-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Rob Clancy
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#portfolio" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#resume" className="mr-5 hover:text-white">
            Resume
          </a>
          <a href="#references" className="mr-5 hover:text-white">
            References
          </a>
        </nav>
       
      </div>
    </header>
  );
}