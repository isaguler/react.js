import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './components/data'

function App() {
  const cards = cardData.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}    
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="cards-list">
        {cards}  
      </section>
    </div>
  )
}

export default App
