import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/CV.pdf"; // Đường dẫn tới file PDF
import "./styles/Resume.css"; // Import CSS file cho giao diện

// Cấu hình workerSrc cho pdf.js (Dành cho phiên bản mới của react-pdf)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth); // Lưu chiều rộng của cửa sổ

  // Lắng nghe thay đổi kích thước cửa sổ
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="resume-section">
      {/* Hiển thị PDF */}
      <div className="resume">
        <Document
          file="/CV.pdf"
          onLoadSuccess={() => console.log("PDF Loaded Successfully!")}
          onLoadError={(error) => console.error("PDF Load Error:", error)}
        >
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      {/* Nút tải xuống CV */}
      <div className="download-row">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer noopener"
          className="download-btn"
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>
      </div>
    </div>
  );
}

export default Resume;
