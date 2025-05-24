// import React, { useState } from 'react';
// import { BsDownload } from 'react-icons/bs';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
// import './Resume.css';

// // Configure PDF worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// const Resume = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [wid, setWid] = useState(window.innerWidth);

//   const handleResize = () => {
//     setWid(window.innerWidth);
//   };

//   window.addEventListener('resize', handleResize);
//   window.addEventListener('load', handleResize);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="resume-container">
//       <h2 className="resume-title">My Resume</h2>
//       <div className="pdf-wrapper">
//         <Document
//           file="/resume.pdf" // Ensure the correct file path
//           onLoadSuccess={onDocumentLoadSuccess}
//           onLoadError={console.error}
//         >
//           {Array.from(new Array(numPages), (_, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               width={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1}
//             />
//           ))}
//         </Document>
//       </div>
//       <div className="download-container">
//         <a href="/resume.pdf" target="_blank" download="Ayush_Resume.pdf">
//           <button className="download-btn">
//             <BsDownload /> Download CV
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Resume;
