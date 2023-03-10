import { useState } from 'react'
import './App.scss'
import Card from './components/Card'
import Carousel from './components/Carousel'
import { CARDS, DEFAULT_CARD } from './utils/consts'
import Header from './components/Header'

function App() {
  const [cardsPerView, setCardsPerView] = useState(3)

  return (
    <div className="App">
      <Header setCardsPerView={setCardsPerView} cardsPerView={cardsPerView} />
      <Carousel defualtCard={DEFAULT_CARD} cardsPerView={cardsPerView}>
        {[...new Array(CARDS)].map((_, i) => (
          <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' key={i}/>
        ))}
      </Carousel>
    </div>
  )
}

export default App
