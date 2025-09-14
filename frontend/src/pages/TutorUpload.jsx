import React, { useState, useEffect } from 'react';
import pdfService from '../services/pdfs';
import userService from '../services/users'

const TutorUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [student, setStudent] = useState('');
  const [message, setMessage] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');
  const [students, setStudents] = useState([]);


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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 px-2">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto flex flex-col gap-8">
        {/* Upload Form */}
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
    </div>
  );
};

export default TutorUpload;