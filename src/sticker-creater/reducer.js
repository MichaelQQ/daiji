const reducer = (state = { editorOn: false }, action) => {
  // console.log(action)
  switch (action.type) {
    case 'EDITOR_ON':
      return {
        editorOn: true
      }
    case 'EDITOR_OFF':
      return {
        editorOn: false
      }
    case 'SAVE_NOTE':
      return {
        editorOn: false
      }
    default:
      return state
  }
}

export default reducer