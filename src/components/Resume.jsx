import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import {DocumentIcon} from "@heroicons/react/outline";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    
    return (
        <section id="resume">
          <div className="container mx-auto text-center lg:px-40 mt-20">
            <div className="items-center flex flex-col w-full mb-20" >
              <DocumentIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-mono title-font mb-4 text-white">
                My Resume
              </h1>
              <Document file={"./media/robert_clancy_2021.pdf"} className="mt-10">
                <Page pageNumber={1} scale={1.5}/>
              </Document>
            </div>
          </div>
        </section>
      );
}

export default Resume;
