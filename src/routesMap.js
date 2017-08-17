import { redirect } from 'redux-first-router'

export default {
  HOME: '/',
  LIST: {
    path: '/list/:category',
    thunk: async (dispatch, getState) => {
      const { payload: { category } } = getState().location
      const packages = await fetch(`/api/category/${category}`)

      if (packages.length === 0) {
        const action = redirect({
          type: 'LIST',
          payload: { category: 'redux' }
        })
        dispatch(action)
      }

      dispatch({ type: 'PACKAGES_FETCHED', payload: { category, packages } })
    }
  }
}

const fetch = async path => {
  const category = path.replace('/api/category/', '')

  switch (category) {
    case 'redux':
      return ['reselect', 'recompose', 'redux-first-router']
    case 'react':
      return [
        'react-router',
        'react-transition-group',
        'react-universal-component'
      ]
    default:
      return []
  }
}

const fakeDelay = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
