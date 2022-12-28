import React from 'react'
import { useState } from 'react'
import { DEFAULT_CARD } from '../utils/consts'
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

const Carousel = ({children}) => {
  const [active, setActive] = useState(DEFAULT_CARD)

  return (
    <div className='carousel'>
      {active > 0 &&
        <button className='nav left' onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      }
      {children.map((child, i) => (
        <div className='card_container' style={{
          '--active': i === active ? 1 : 0,
          '--offset': i - active
        }} key={i}>
          {child}
        </div>
      ))}
      {active < children.length - 1 &&
        <button className='nav right' onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      }
    </div>
  )
}

export default Carousel