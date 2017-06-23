import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import { fetchStickers } from './action'

import StickerCard from '../sticker-card'

import './stickers.css'

class Stickers extends Component {
  constructor (props) {
    super(props)
  }
  
  componentDidMount () {
    // const dom = findDOMNode(this)
    // const domHeight = dom.getBoundingClientRect().height
    const dom = window
    const domHeight = window.innerHeight
    // console.log('domHeight', domHeight)
    // console.log('scrollHeight', dom.scrollHeight)
    // console.log('scrollTop', dom.scrollTop)
    
    dom.addEventListener('scroll', e => {
      window.setInterval(() => {
        // if (dom.scrollHeight < dom.scrollTop + domHeight + 100) {
        //   this.addStickers()
        // }
        
        if (document.body.scrollHeight < dom.scrollY + domHeight + 10 && 
          !this.props.stickers.fetching &&
          this.props.stickers.stickerList.length < this.props.stickers.max
        ) {
          this.props.getSticker()
        }
      }, 50)
    })
    
    this.props.getSticker()
  }
  
  render () {
    // console.log(this.props)
    console.log(this.props.stickers)
    const { fetching, stickerList } = this.props.stickers
    return (
      <div className="stickers">
        {stickerList.map((sticker, index) => (
          <StickerCard 
            key={index} 
            index={index + 1}
            content={sticker.content}
            color={sticker.color} />
        ))}
        {
          fetching && <div className="sticker__card">Loading...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  stickers: store.stickers
})

const mapDispatchToProps = dispatch => ({
  getSticker: () => dispatch(fetchStickers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stickers)