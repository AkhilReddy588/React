import './App.css'
import Card from './components/CardItem/index'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },

  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },

  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },

  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Learn 4.0 Technologies</h1>
      <p className="para">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia. Qualcomm, etc. Learn directly from proffessionals
        involved in product Development
      </p>
      <div className="cards-container">
        {cardsList.map(eachItem => (
          <Card cardInfo={eachItem} key={eachItem.id} />
        ))} 
      </div>
    </div>
  )
}

export default App
