import React from 'react'

const PDFLink = ({text, link}) => {
  return (
    <div>
      <a href={link} className="hover:text-blue-800">{text}</a>
    </div>
  )
}

export default PDFLink
