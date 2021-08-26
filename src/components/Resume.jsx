import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from '../resume.pdf';


const Resume = () => {
    
    return (
        <section id="resume">
          <div>
              <Document file={samplePDF}>
                <Page pageNumber={1} scale={1.5}/>
              </Document>
          </div>
        </section>
      );
}

export default Resume;
