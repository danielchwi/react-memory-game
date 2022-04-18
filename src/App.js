import { useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"},
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards & set to initial value
  const shuffleCard = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .map(card => ({...card,  id: Math.random()}))
    .sort((a,b) => a.id - b.id)
    setCards(shuffledCards)
    setTurns(0)
  }

  //handle Choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    console.log(card)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCard}>New Game</button>

      <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App