import "./SingleCard.css"

export default function SingleCard({card, handleChoice, fliped, isDisable}) {

  const handleClick = () => {
    if(!isDisable){
        handleChoice(card)
    }  
  }
  return (
    <div className='card'>
        <div className={fliped? "fliped": ""}>
            <img className="front" src={card.src} alt="front card"/>
            <img className="back" src="/img/cover.png" onClick={handleClick} alt="back card"/>
        </div>
    </div>
  )
}
