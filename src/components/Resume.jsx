import React from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import samplePDF from '../resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const Resume = () => {
    
    return (
        <section id="resume">
          <div className="flex flex-col w-full items-center">
              <Document file={samplePDF}>
                <Page pageNumber={1} scale={1.5}/>
              </Document>
          </div>
        </section>
      );
}

export default Resume;
