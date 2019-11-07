export const type = 'setAlert'

const setAlert = item => {
  return {
    type,
    payload: item
  }
}

export default setAlert
