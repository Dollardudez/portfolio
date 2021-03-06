import React from "react";
import { HashLink as Link } from 'react-router-hash-link';


export default function Navbar() {

  return (
    <header className="bg-purple-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="/#about" className="ml-3 text-xl">
            Rob Clancy
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="/#portfolio" className="mr-5 hover:text-white">
            Projects
          </Link>
          <Link to="/#resume" className="mr-5 hover:text-white">
            Resume
          </Link>
          <Link to="/#references" className="mr-5 hover:text-white">
            References
          </Link>
        </nav>
       
      </div>
    </header>
  );
}