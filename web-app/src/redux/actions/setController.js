export const type = 'setController'

const setController = item => {
  return {
    type,
    payload: item
  }
}

export default setController
