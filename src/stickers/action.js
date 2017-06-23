const randomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const a = Math.random().toFixed(2)
  
  return `rgba(${r}, ${g}, ${b}, ${a})`
}
const fakeStickers = []

const fetchStickers = () => dispatch => {
  dispatch({ type: 'FETCH_STICKERS' })
  
  window.setTimeout(() => {
    dispatch({ type: 'FETCH_STICKERS_DONE', payload: {
      stickers: fakeStickers,
      max: 90
    }})
  }, 5000)
}

export {
  fetchStickers
}