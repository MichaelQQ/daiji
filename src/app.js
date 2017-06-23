import React from 'react'
import { connect } from 'react-redux'

import StickerCreater from './sticker-creater'
import StickerEditor from './sticker-editor'
import Stickers from './stickers'
import Footer from './footer'

const App = ({ stickerCreater }) => {
  return (
    <div>
      <StickerCreater />
      {/* { stickerCreater.editorOn && <StickerEditor /> } */}
      <Stickers />  
      <Footer />
    </div>
  )
}

const mapStateToProps = store => ({
  stickerCreater: store.stickerCreater
})

export default connect(mapStateToProps)(App)