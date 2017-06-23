import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

class AutoResizeTextarea extends Component {
  constructor (props) {
    super(props)
  }
  
  resize = () => {
    const dom = findDOMNode(this)
    
    dom.style.height = 'auto'
    dom.style.height = `${dom.scrollHeight}px`
  }
  
  componentDidMount () {
    this.resize()
  }
  
  render () {
    return (
      <textarea
        onInput={this.resize}
        onKeyUp={this.resize}
        ref={this.props['data-ref']}
        {...this.props}
      />
    )
  }
}

export default AutoResizeTextarea