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

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200">
      <p className="text-gray-500 p-4 text-xl font-semibold">Loading PDFs…</p>
    </div>
  );

  if (!pdfs.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200">
        <p className="text-gray-500 p-4 text-xl font-semibold">No PDFs assigned yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-sky-900 mb-6 text-center">Your Assigned PDFs</h2>
        <ul className="space-y-4">
          {pdfs.map((pdf) => {
            const name = pdf.fileName ?? '';
            if (name.toLowerCase().endsWith('.pdf')) {
              const text = name.replace(/\.pdf$/i, '');
              return (
                <li
                  key={pdf._id}
                  className="flex items-center justify-between p-4 bg-sky-50 rounded-lg border border-sky-200 shadow hover:shadow-md transition"
                >
                  <span className="text-lg font-medium text-sky-900">{text}</span>
                  <PDFLink link={pdf.signedUrl} text="View PDF" />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pdf;