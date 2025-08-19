// src/pages/Pdf.jsx
import React, { useState, useEffect } from 'react';
import PDFLink from '../components/PDFLink';
import pdfService from '../services/pdfs';

const Pdf = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await pdfService.getMyPdfs();
        const payload = resp?.data ?? resp;
        setPdfs(Array.isArray(payload) ? payload : []);
      } catch (err) {
        console.error('Failed to load PDFs:', err);
        setPdfs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-gray-500 p-4">Loading PDFs…</p>;

  if (!pdfs.length) {
    return <p className="text-gray-500 p-4">No PDFs assigned yet.</p>;
  }

  return (
    <div>
      <ul>
        {pdfs.map((pdf) => {
          const name = pdf.fileName ?? '';
          if (name.toLowerCase().endsWith('.pdf')) {
            const text = name.replace(/\.pdf$/i, '');
            return (
              <li key={pdf._id} className="p-2 m-1 border-2 border-sky-900">
                <PDFLink link={pdf.signedUrl} text={text} />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Pdf;
