import React, { Component } from 'react'
import { connect } from 'react-redux'

import AutoResizeTextarea from './autoresize-textarea'

import './sticker-creater.css'

const randomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const a = Math.random().toFixed(2)
  
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

class StickerCreater extends Component {
  constructor (props) {
    super(props)
  }
  
  textareaRef = el => this.textarea = el
  
  saveNote = () => {
    this.props.saveNote({
      content: this.textarea.value,
      color: randomColor()
    })
    this.textarea.value = ''
  }
  
  render () {
    return (
      <div className="sticker-creater">
        { this.props.stickerCreater.editorOn ? (
          <div className="sticker-creater__editor">
            <div 
              onClick={this.props.editorOff} 
              className="sticker-creater__editor__close">
              <i className="fa fa-2x fa-times" aria-hidden="true"></i>
            </div>
            <AutoResizeTextarea 
              data-ref={this.textareaRef}
              className="sticker-creater__editor__textarea"
              placeholder="note..." />
            <div 
              className="sticker-creater__editor__done"
              onClick={this.saveNote}>DONE</div>
          </div>
        ) : (
          <div 
            className="sticker-creater__trigger" 
            onClick={this.props.editorOn}>Add to-do ...</div>
        ) }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  stickerCreater: store.stickerCreater
})

const mapDispatchToProps = dispatch => ({
  editorOn: () => dispatch({ type: 'EDITOR_ON' }),
  editorOff: () => dispatch({ type: 'EDITOR_OFF' }),
  saveNote: (note) => dispatch({ type: 'SAVE_NOTE', payload: note }),
})

export default connect(mapStateToProps, mapDispatchToProps)(StickerCreater)