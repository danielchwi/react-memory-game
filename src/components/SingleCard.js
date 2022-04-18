import "./SingleCard.css"

export default function SingleCard({src}) {
  return (
    <div className='card'>
        <img className="front" src={src} alt="front card"/>
        <img className="back" src="/img/cover.png" alt="back card"/>
    </div>
  )
}
