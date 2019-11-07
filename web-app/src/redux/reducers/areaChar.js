const defaultState = {
  isShow: false,
  name: '',
  values: []
}

function reducer(state = defaultState, {type, payload}){
  if(type === 'setAreaChar'){
    state = Object.assign(state, payload)
  }
  return state
}

export default reducer
