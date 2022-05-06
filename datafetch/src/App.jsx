import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [characters, setCharacters] = useState([])

  const [name, setName] = useState('')

  useEffect(() => {
    // this is executed whenever name changes
    console.log('name just changed')
  }, [name])

  useEffect(() => {
    // the 2nd parameter is the 'dependency array' -> if this is empty
    // whatever happens in the useEffect is onlly executed when the component
    // is mounted
    // fetch the data
    axios.get('https://swapi.py4e.com/api/people')
      .then(response => {
        // console.log(response)
        // set the state of characters
        setCharacters(response.data.results)
      })
      .catch(err => console.log(err))
    return () => {
      // this would happen when the component is unmounted
    }
  }, [])

  const handleChange = e => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        {name ? <strong>Hello {name}</strong> : 'Pls type your name 🌈 🦄'}
        <input type="text" onChange={handleChange} value={name} />
        {characters.map((character, i) => {
          return <h1 key={i}>{character.name}</h1>
        })}
      </header>
    </div>
  )
}

export default App
