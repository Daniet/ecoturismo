export const type = 'setMenu'

const setMenu = item => {
  return {
    type,
    payload: item
  }
}

export default setMenu