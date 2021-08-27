import { TerminalIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";


const Portfolio = () => {

  
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <TerminalIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-mono title-font mb-4 text-white">
                Apps I've Built
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                I was properly introduced to web development in May of 2020, since then, I've decided that 
                web development is the career for me. If some of these projects seem half finished, it is because they ARE!
                I plan to continue working on these projects until I am satisfied with their aesthetic appeal and functionality.
              </p>
              <h5 className="lg:w-2/3 mx-auto leading-relaxed text-base text-green-500">
                ATTENTION! the only Demo link that works as of now is the MHK Chests link!!!!
              </h5>
            </div>
            <div className="flex flex-wrap -m-4">
              {projects.map((project) => (
                <div
                  className="sm:w-1/2 w-100 p-4">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <button onClick={()=> window.location.href=project.github} className="m-11 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <img src="./media/github.png"></img>
                      Code
                  </button>
                  <button onClick={()=> window.location.href=project.link} className="m-11 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>
                      Demo
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Portfolio
