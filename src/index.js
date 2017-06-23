import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import App from './app'

import stickersReducer from './stickers/reducer'
import stickersCreaterReducer from './sticker-creater/reducer'

import { AppContainer } from 'react-hot-loader'

const reducer = combineReducers({
  stickers: stickersReducer,
  stickerCreater: stickersCreaterReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const init = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

init(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    init(App)
  })
}