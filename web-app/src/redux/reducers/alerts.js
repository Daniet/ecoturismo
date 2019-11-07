const defaultState = [
  'Incendios',
  'Inundaciones',
  'Derrumbes',
  'Zona peligrosa',
  'Caza o pesca ilegal',
  'Deforestacion',
  'Cultivos ilicitos',
]

function reducer(state = defaultState, { type, payload}){
  return state
}

export default reducer
