export default (state = [], action = {}) => {
  switch (action.type) {
    case 'PACKAGES_FETCHED':
      return action.payload.packages
    default:
      return state
  }
}
