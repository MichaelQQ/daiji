import React from 'react'
import ReactMarkdown from 'react-markdown'

import './sticker-card.css'

const StickerCard = (props) => {
  return (
    <div className="sticker__card" style={ { backgroundColor: props.color } }>
      {/* <div>{props.index}</div> */}
      <ReactMarkdown
        className="sticker__card__markdown"
        source={props.content}
      />
    </div>
  )
}

export default StickerCard