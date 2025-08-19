import React, { useState } from 'react';

const TutorUpload = () => {
  const [file, setFile] = useState(null);
  const [student, setStudent] = useState('');
  const [message, setMessage] = useState('');

  const students = ['student1'];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleStudentChange = (e) => {
    setStudent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !student) {
      setMessage('Please select a PDF and a student.');
      return;
    }
    setMessage('PDF uploaded and assigned successfully!');
    setFile(null);
    setStudent('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 px-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mx-auto flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-sky-900 text-center mb-2">Upload & Assign PDF</h2>
        <div>
          <label className="block text-sky-900 font-semibold mb-2">Select PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full border border-sky-200 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sky-900 font-semibold mb-2">Assign to Student</label>
          <select
            value={student}
            onChange={handleStudentChange}
            className="w-full border border-sky-200 rounded px-3 py-2"
          >
            <option value="">Select a student</option>
            {students.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-sky-900 text-white py-2 px-6 rounded hover:bg-sky-700 transition font-semibold"
        >
          Upload & Assign
        </button>
        {message && (
          <div className="text-center text-sky-900 font-medium mt-2">{message}</div>
        )}
      </form>
    </div>
  );
};

export default TutorUpload;