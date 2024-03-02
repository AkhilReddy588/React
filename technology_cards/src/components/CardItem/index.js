import './index.css'

const Card = props => {
  const {cardInfo} = props
  const {title, description, imgUrl, className} = cardInfo
  return ( 
    <ul>
      <li className={className}>
        <h1 className="role">{title}</h1>
        <p className="desc">{description}</p>
        <img src={imgUrl} className="img" alt={title} />
      </li>
    </ul>
  )
}

export default Card
