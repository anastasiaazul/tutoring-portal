const express = require('express')
const app = express()
app.use(express.json())

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
  response.json(documents)
})

app.get('/api/documents/:id', (request, response) => {
  const id = request.params.id;
  const document = documents.find(note => (note.id  === id))

  if (document)
  {
    response.json(document)
  }
  else {
    response.status(404).end()
  }
})

app.delete('/api/documents/:id', (request, response) => {
  const id = request.params.id;
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})