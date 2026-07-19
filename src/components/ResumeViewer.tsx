import { useState, useEffect } from 'react';
import { Download, ArrowLeft, Loader2 } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Initialize PDF.js worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export function ResumeViewer() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>('resume.pdf');
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Find the PDF dynamically
    const publicPdfs = import.meta.glob('/public/*.pdf');
    const pdfPaths = Object.keys(publicPdfs);
    
    if (pdfPaths.length > 0) {
      const path = pdfPaths[0].replace('/public', '');
      setPdfUrl(path);
      setFilename(path.replace('/', ''));
    }

    // Handle resize to keep the PDF responsive
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  if (!pdfUrl) {
    return (
      <div className="min-h-screen bg-[#0d0f12] text-slate-300 flex flex-col items-center justify-center p-6 font-mono">
        <div className="text-red-400 mb-4">Error: No PDF resume found in the public folder.</div>
        <a href="/" className="text-primary hover:underline border border-primary/30 px-4 py-2 rounded">cd .. (Return Home)</a>
      </div>
    );
  }

  // Determine width based on device. Add some padding for mobile.
  const isMobile = containerWidth < 768;
  const pdfWidth = isMobile ? containerWidth - 32 : Math.min(containerWidth - 64, 900);

  return (
    <div className="h-screen w-full bg-[#0d0f12] flex flex-col font-sans overflow-hidden">
      {/* Custom Header with Download Button */}
      <div className="h-16 bg-[#181a1f] border-b border-[#27272A] flex items-center justify-between px-4 md:px-8 shrink-0 relative z-50 shadow-md">
        <a 
          href="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-sm group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>cd ..</span>
        </a>
        
        <div className="font-mono text-sm text-slate-300 hidden md:block">
          ~/public/{filename}
        </div>

        <a 
          href={pdfUrl} 
          download={filename}
          className="flex items-center gap-2 bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-white transition-all px-3 md:px-4 py-2 rounded-md font-mono text-xs md:text-sm shadow-[0_0_10px_rgba(16,185,129,0.2)]"
        >
          <Download size={16} />
          <span>$ download</span>
        </a>
      </div>

      {/* PDF Viewer - Scrollable Area */}
      <div className="flex-1 w-full bg-[#090a0c] overflow-y-auto relative p-4 flex flex-col items-center">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex flex-col items-center justify-center text-primary font-mono mt-20 gap-4">
              <Loader2 className="animate-spin w-8 h-8" />
              <span>Loading Resume...</span>
            </div>
          }
          className="flex flex-col items-center gap-4 drop-shadow-2xl"
        >
          {Array.from(new Array(numPages || 0), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pdfWidth}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="bg-white rounded overflow-hidden"
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
