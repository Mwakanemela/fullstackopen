const express = require('express')
const phonebook_data = require("./phonebook_data.json")

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Access Denied!</h1>')
})


app.get('/api/persons', (request, response) => {
  response.json(phonebook_data)
})

app.get('/api/info', (request, response) => {
    const phonebook_data_size = phonebook_data.length
    const now = new Date();

    response.type('text/plain');
    response.send(`Phonebook has info for ${phonebook_data_size} people \n${now.toString()}`)
    
})

app.get("/api/persons/:id", (request, response) => {

  const person_id = request.params.id

  const person = phonebook_data.find(person => person.id == person_id )

  if(!person) {
    response.status(404).send("Not Found")
  }

  response.json(person)
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
