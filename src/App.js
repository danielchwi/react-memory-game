import { useState, useEffect } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  {"src": "/img/helmet-1.png", match: false},
  {"src": "/img/potion-1.png", match: false},
  {"src": "/img/ring-1.png", match: false},
  {"src": "/img/scroll-1.png", match: false},
  {"src": "/img/shield-1.png", match: false},
  {"src": "/img/sword-1.png", match: false}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [isDisable, setIsDisable] = useState(false)

  // shuffle cards & set to initial value
  const shuffleCard = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .map(card => ({...card,  id: Math.random()}))
    .sort((a,b) => a.id - b.id)
    setCards(shuffledCards)
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(0)
  }

  //handle Choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //reset choice and add turn
  const resetChoice = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurn => {return prevTurn + 1})
    setIsDisable(false)
  }

  //handling change and compare it
  useEffect(() => {
    if(choiceOne && choiceTwo){
      setIsDisable(true)
      if (choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map((card)=>{
            if(card.src === choiceOne.src){
              return {...card, match:true}
            }else{
              return card
            }
          })
        })
        resetChoice()
        console.log("Matched 👌",)
      }else{
        setTimeout(() => resetChoice(), 1000)  
        console.log("Not matched 😱 ")
      }
      
    }
  },[choiceOne, choiceTwo])

  // startgame automaticaly
  useEffect(()=>{
    shuffleCard()
  }, [])



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
            fliped = {card === choiceOne || card === choiceTwo || card.match }
            isDisable = {isDisable}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App