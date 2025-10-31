const express = require('express')
let phonebook_data = require("./phonebook_data.json")

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

//create userid
const generateUserId = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let userId = '';
  for (let i = 0; i < 8; i++) {
    userId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return userId;
}
app.post("/api/persons", (request, response) => {
  const body = request.body

  // if(!body.name  !body.number) {
  //   return response.status(400).json({
  //     error: "Name is missing"
  //   })
  // }
  console.log("you")
  const person = {
    id: generateUserId(),
    name: body.name,
    number: body.number
  }

  phonebook_data = phonebook_data.concat(person)
  response.json(phonebook_data)

})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
