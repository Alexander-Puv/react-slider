import React, { useState } from 'react'

const Header = ({setCardsPerView, cardsPerView}) => {
  const [warn, setWarn] = useState('')

  const changeHandler = (e) => {
    const val = Number(e.target.value)
    if (val < 1) { // is value more than 1
      setWarn('Number should be 1 or more')
      setCardsPerView(3)
      return
    }
    if (!Number.isInteger(val)) { // is value intager
      setWarn('Number should be an intager')
      setCardsPerView(3)
      return
    }
    // otherwise change
    setWarn('')
    setCardsPerView(val)
  }

  return (
    <header className='header'>
      <label>Write how many cards per view will be:</label>
      <input
        type='number'
        placeholder='type a number'
        value={cardsPerView}
        onChange={e => changeHandler(e)}
      />
      {warn && <p className='warn red'>{warn}</p>}
      {cardsPerView >= 4 && <p className='warn yellow'>This amount of cards could be too long for your screen</p>}
    </header>
  )
}

export default Header