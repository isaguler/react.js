import './App.css'
import Nav from './components/Nav'
import Content from './components/Content'
import placeData from './components/data'

function App() {
  const cards = placeData.map(placeData => {
    return (
      <Content 
        key={placeData.id}
        {...placeData}    
      />
    )
  })


  return (
    <div className="App">
      <Nav />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
