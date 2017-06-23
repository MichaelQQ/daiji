const initState = {
  fetching: false,
  stickerList: [],
  max: 0
}

const reducer = (state = initState, action) => {
  console.log(action)
  switch(action.type) {
    case 'FETCH_STICKERS':
      return {
        ...state,
        fetching: true
      }
    case 'FETCH_STICKERS_DONE':
      return {
        ...state,
        fetching: false,
        max: action.payload.max,
        stickerList: [...state.stickerList, ...action.payload.stickers]
      }
    case 'SAVE_NOTE':
      return {
        ...state,
        stickerList: [...state.stickerList, action.payload]
      }
    default: return state
  }
}

export default reducer