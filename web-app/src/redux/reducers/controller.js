const defaultState = {
  isShow: false,
  name: '',
  values: [0],
  type: '',
}

function reducer(state = defaultState, { type, payload }){
  if(type === 'setController'){
    state = Object.assign(state, payload)
  }
  return state
}

export default reducer
