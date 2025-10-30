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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
