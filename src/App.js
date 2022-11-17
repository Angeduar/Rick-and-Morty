import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters, { Rick } from './data.js'


function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div  style={{display: 'flex' , justifyContent: 'space-evenly'}}>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div className='Div2'>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div className='Div3'>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
