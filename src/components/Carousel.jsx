import React, { useEffect } from 'react'
import { useState } from 'react'
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

const Carousel = ({children, defualtCard, cardsPerView = 1}) => {
  const [active, setActive] = useState(defualtCard)

  const isActive = i => {
    for (let c = 0; c < cardsPerView; c++) {
      if (i === active + c) return 1
    }
    return 0
  }

  return (
    <div className='carousel' style={{'--cards-per-view': cardsPerView}}>
      {active > 0 &&
        <button className='nav left' onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      }
      {children.map((child, i) => (
        <div className='card_container' style={{
          '--active': isActive(i),
          '--offset': i - active
        }} key={i}>
          {child}
        </div>
      ))}
      {active < children.length - cardsPerView &&
        <button className='nav right' onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      }
    </div>
  )
}

export default Carousel