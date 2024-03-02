import './index.css'

const Banner = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <ul>
      <li className={className}>
        <div>
          <h1>{headerText}</h1>
          <p>{description}</p>
          <button className="butn">Show More</button>
        </div>
      </li>
    </ul>
  )
}

export default Banner
