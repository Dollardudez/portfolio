import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const Resume = () => {
    
    return (
        <section id="resume">
          <div className="flex flex-col w-full items-center">
              <Document file={"./media/robert_clancy_2021.pdf"}>
                <Page pageNumber={1} scale={1.5}/>
              </Document>
          </div>
        </section>
      );
}

export default Resume;
