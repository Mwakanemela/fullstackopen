const express = require('express')
const phonebook_data = require("./phonebook_data.json")

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Access Denied!</h1>')
})

//get all persons 
app.get('/api/persons', (request, response) => {
  response.json(phonebook_data)
})

//get all persons info and visitor datetime now
app.get('/api/info', (request, response) => {
    const phonebook_data_size = phonebook_data.length
    const now = new Date();

    response.type('text/plain');
    response.send(`Phonebook has info for ${phonebook_data_size} people \n${now.toString()}`)
    
})

//get single person data
app.get("/api/persons/:id", (request, response) => {

  const person_id = request.params.id

  const person = phonebook_data.find(person => person.id == person_id )

  if(!person) {
    response.status(404).send("Not Found")
  }

  response.json(person)
})

//delete single user
app.delete('/api/persons/:id', (request, response) => {
  const person_id = request.params.id
  person_to_delete = phonebook_data.filter(person => person.id !== person_id)
  // console.log(person_to_delete)
  response.status(204).end()
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
