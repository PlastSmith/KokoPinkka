import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const rest = persons.find(({ name }) => name === newName)
    if (rest === undefined) {
      console.log('not found', rest)
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    } else {
      alert(`${newName} is already adde to phonebook`)
      setNewName('')
      setNewNumber('')
      console.log(' person found', rest);
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const handleSearchTermChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value)
    event.target.value === undefined ? setShowAll(true) : setShowAll(false)
    
  }

  let personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(searchTerm))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      filter shown with<input value={searchTerm} onChange={handleSearchTermChange}/>
      </div>
      <br/>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <li key={persons.name}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )

}

export default App