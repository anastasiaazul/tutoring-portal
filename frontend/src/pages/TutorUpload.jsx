import React, { useState, useEffect } from 'react';
import pdfService from '../services/pdfs';
import userService from '../services/users'
import { TrashIcon} from '@heroicons/react/24/solid';

const TutorUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [student, setStudent] = useState('');
  const [message, setMessage] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');
  const [students, setStudents] = useState([]);
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const studentsRes = await userService.getAllStudents();
    setStudents(studentsRes);
    const pdfsRes = await pdfService.getAllPdfs(); // You need a service for this
    setPdfs(pdfsRes);
  };
  fetchData();
}, []);


  useEffect(() => {
      const fetchStudents = async () =>{
        const response = await userService.getAllStudents();
        setStudents(response);
    };
    fetchStudents();
    }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadMessage('');
    setUploadedFile(null);
  };


  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setUploadMessage('Please select a PDF to upload.');
      return;
    }
    const response = await pdfService.uploadPdf(file);
    if (response.error) {
      setUploadMessage('Failed to upload PDF.');
      return;
    }
    setUploadMessage('PDF uploaded successfully!');
    setUploadedFile(response);
    setFile(null);
  };


  const handleStudentChange = (e) => {
    setStudent(e.target.value);
    setMessage('');
  };


  const handleAssign = async (e) => {
    e.preventDefault();
    if (!uploadedFile || !student) {
      setMessage('Please upload a PDF and select a student.');
      return;
    }
    const response = await pdfService.assignPdfToStudent(uploadedFile.id, student);
    if (response.error) {
        setMessage('Failed to assign PDF to student.');
        return;
    }
    setMessage(`PDF assigned to ${student} successfully!`);
    setUploadedFile(null);
    setStudent('');
  };

  

  return (
    <div className="flex items-start min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 px-2 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8  mx-8 w-1/2 flex flex-col gap-8">
        <form onSubmit={handleUpload} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-sky-900 text-center mb-2">Upload PDF</h2>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full border border-sky-200 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="bg-sky-900 text-white py-2 px-6 rounded hover:bg-sky-700 transition font-semibold"
          >
            Upload
          </button>
          {uploadMessage && (
            <div className="text-center text-sky-900 font-medium mt-2">{uploadMessage}</div>
          )}
        </form>

        <form onSubmit={handleAssign} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-sky-900 text-center mb-2">Assign PDF to Student</h2>
          <select
            value={student}
            onChange={handleStudentChange}
            className="w-full border border-sky-200 rounded px-3 py-2"
            disabled={!uploadedFile}
          >
            <option value="">Select a student</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>{s.username}{console.log(s.username)}</option>
            ))}
          </select>
          <button
            type="submit"
            className={`bg-sky-900 text-white py-2 px-6 rounded hover:bg-sky-700 transition font-semibold ${!uploadedFile ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!uploadedFile} onSubmit={handleAssign}
          >
            Assign
          </button>
          {message && (
            <div className="text-center text-sky-900 font-medium mt-2">{message}</div>
          )}
        </form>
      </div>

      <div className="bg-white rounded-xl w-1/2 shadow-lg p-8  flex flex-col gap-4 mx-8">
        <h2 className="text-2xl font-bold text-sky-900 text-center mb-4">Manage Students</h2>
        <ul>
          {students.map((s) => (
          <li key={s.id} className="py-2 border-b border-sky-100 text-sky-900 ">
            <div className="font-semibold">{s.username}</div>
            <ul className="ml-4 mt-1 text-sky-700 text-sm list-disc list-none">
              {pdfs.filter(pdf =>
                Array.isArray(pdf.assignedTo) &&
                pdf.assignedTo.some(user => user._id === s.id)
              ).length > 0 ? (
                pdfs.filter(pdf =>
                  Array.isArray(pdf.assignedTo) &&
                  pdf.assignedTo.some(user => user._id === s.id)
                ).map(pdf => (
                  <li key={pdf._id}>{pdf.fileName } </li>
                ))
              ) : (
                <li className="text-gray-400 italic">No PDFs assigned</li>
              )}
          </ul>
          </li>
        ))}
        </ul>
      </div>
      </div>
  );
};

export default TutorUpload;