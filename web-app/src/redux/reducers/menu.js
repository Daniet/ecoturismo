const defaultState = [{
  url: '/rooms',
  name: 'Habitaciones'
}, {
  url: '/devices',
  name: 'Dispositivos'
}, {
  url: '/profile',
  name: 'Usuario'
}]

function reducer(state = defaultState,{ type, payload }){
  if(type === 'setMenu'){
    state.push(payload)
  }
  return state
}

export default reducer
