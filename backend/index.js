const express = require('express')
require('dotenv').config()
const app = express()
app.use(express.json())
const Document = require('./models/document')

let documents = [
  {
    id: "1",
    title: "Trigonometry",
  },
  {
    id: "2",
    title: "Functions",
  },
  {
    id: "3",
    title: "algebra",
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/documents', (request, response) => {
  Document.find({}).then(documents => response.json(documents))
})

app.get('/api/documents/:id', (request, response) => {
  const id = request.params.id;
  
  Document.findById(request.params.id).then(document => {
    if (document)
    {
      response.json(document)
    }
    else 
    {
      response.status(404).end()
    }
  }).catch(error => {
    console.log(error)
    response.status(500).end()
  })
})

app.delete('/api/documents/:id', (request, response) => {
  const id = request.params.id;
  Document.findByIdAndDelete(id).then(() => response.status.end()).catch()
  const documents = documents.filter(note => (note.id  !== id))
  response.status(204).end()
})

app.post('/api/documents/', (request, response) => {

  const body = request.body
  if (!body.title)
  {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  document =
  {
    title: body.title,
    id: generateId()
  }

  documents.concat(document)
  response.json(document)
})

const generateId = () => {
  const maxId = documents.length < 0? Math.max(...notes.map(n => Number(n.id))) : 0
  return String(maxId + 1)
}

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})