// services/pdfs.js
import axios from 'axios'
const baseUrl = '/api/pdf'

let token = null
export const setToken = (newToken) => { token = `Bearer ${newToken}` }

const getMyPdfs = async () => {
  const token = localStorage.getItem('token');
  console.log(token)
  const res = await axios.get('http://localhost:3001/api/pdf/me', {
  headers: { Authorization: `Bearer ${token}` }
  });
  console.log(res.data)
  return res.data
}

const uploadPdf = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const response = await axios.post('http://localhost:3001/api/pdf/', formData, config);
    console.log('PDF uploaded successfully:', response.data);
    return response.data;
    
  } catch (error) {
    console.error('Error uploading PDF:', error);
    return { error: 'Failed to upload PDF' };
  }
}




export default { setToken, getMyPdfs, uploadPdf }
