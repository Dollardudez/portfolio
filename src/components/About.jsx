import React from 'react'

const About = () => {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-mono text-white">
                Hey, I'm Rob.
                <br className="hidden lg:inline-block" />I love learning new technologies.
              </h1>
              <p className="mb-8 leading-relaxed">
                I am a senior studying Computer Science at Kansas State University. At K-State I have a had exposure to software architecture principles, algorithms, 
                assembly programming, web app development, database systems, and .NET 
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
                  Shoot me a message
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-900 bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-black rounded text-lg">
                  Look at my work
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="rounded-full object-center"
                alt="hero"
                src="./media/pic-of-me.jpg"
              />
            </div>
          </div>
        </section>
      );
}

export default About
