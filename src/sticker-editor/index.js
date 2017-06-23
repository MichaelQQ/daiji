import React, { Component } from 'react'
import { connect } from 'react-redux'

import './sticker-ediotr.css'

class StickerEditor extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div className="sticker-editor">
        <div className="sticker-editor__close" onClick={this.props.editorOff  }>close</div>
        <div><input type="text" placeholder="title" className="sticker-editor__input" /></div>
        <div><textarea placeholder="note..." className="sticker-editor__textarea"/></div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editorOff: () => dispatch({ type: 'EDITOR_OFF' })
})

export default connect(null, mapDispatchToProps)(StickerEditor)