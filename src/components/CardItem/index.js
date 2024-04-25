import './index.css'

const CardItem = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard

  return (
    <li className={`card-style ${className}`}>
      <div className="card-items">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <img src={`${imgUrl}`} alt={title} className="img-icon" />
      </div>
    </li>
  )
}

export default CardItem
