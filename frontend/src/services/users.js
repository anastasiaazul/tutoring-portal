import axios from 'axios'
const baseUrl = '/api/pdf'


const getAllStudents = async () =>
{
    const res = await axios.get('http://localhost:3001/api/students');
    return res.data;
}

export default {getAllStudents}