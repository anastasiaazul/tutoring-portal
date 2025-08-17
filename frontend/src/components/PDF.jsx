import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

import PDFLink from '../components/PDFLink'
const Pdf = () => {
   const [pdfs, setPdfs] = useState([])

   useEffect(() => {
        const fetchData = async () =>
        {
            try{
                const pdfs = await axios.get('http://localhost:3001/api/pdf/pdfs');
                console.log(pdfs.data)
                setPdfs(pdfs.data);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [])

    
  return (
    <div>
        <ul >
            {pdfs.map(pdf => {
                    if (pdf.fileName.includes(".pdf") )
                    {
                        const sanitized = pdf.fileName.replace(".pdf", "")
                        return (
                        <li key={pdf._id} className='p-2 m-1 border-2 border-1 border-sky-600'> <PDFLink link={pdf.imageUrl} text={sanitized}/></li>
                        )
                    }
                    
            })}  
        </ul>      
    </div>

  )
}

const fetchData = async () => 
{
    try{
        const pdfs = await axios.get('http://localhost:3001/api/pdf/pdfs');
        return pdfs.data
    }
    catch(error)
    {

    }
    
    
}

export default Pdf
