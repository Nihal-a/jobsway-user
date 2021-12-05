import React from 'react'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import samplePdf from "../../assets/pdf/sample.pdf";


const PdfViewer = ({pdf}) => {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js" style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '100px',
        }}>
           <div className="">
                <Viewer fileUrl={pdf}/>
           </div>
        </Worker>
    )
}


export default PdfViewer
