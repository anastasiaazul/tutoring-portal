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

export default { setToken, getMyPdfs }
