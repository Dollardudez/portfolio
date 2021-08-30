import { TerminalIcon } from "@heroicons/react/solid";
import React from "react";
import PortfolioElement from './PortfolioElement';
import { projects } from "../data";


const Portfolio = () => {

  
    return (
        <section id="portfolio" className="text-gray-200 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20 ">
              <TerminalIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-mono title-font mb-4 text-white">
                Apps I've Built
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                I was properly introduced to web development in May of 2021, since then, I've decided that 
                web development is the career for me. If some of these projects seem half finished, it is because they ARE!
                I plan to continue working on these projects until I am satisfied with their aesthetic appeal and functionality.
              </p>
              <h3 className="lg:w-2/3 mx-auto leading-relaxed text-base text-yellow-300 mt-5">
                ATTENTION! the only Demo link that works as of now is the MHK Chests link, Bleakwind Buffet video,
                 and World Cup Database video.
              </h3>
            </div>
            <div className="flex flex-wrap -m-4 flex-1">
              {projects.map((project) => (
                  <PortfolioElement
                    title = {project.title}
                    subtitle = {project.subtitle}
                    description = {project.description}
                    image = {project.image}
                    github = {project.github}
                    link = {project.link}
                    demoType = {project.demoType}
                  />
              ))}
            </div>
          </div>
        </section>
      );
}

export default Portfolio
