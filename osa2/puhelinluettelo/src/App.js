import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

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