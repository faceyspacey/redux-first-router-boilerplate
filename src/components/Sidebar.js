import React from 'react'
import { connect } from 'react-redux'
import Link, { NavLink } from 'redux-first-router-link'
import styles from '../css/Sidebar'

const Sidebar = ({ path, dispatch }) =>
  <div className={styles.sidebar}>
    <h2>SEO-FRIENDLY LINKS</h2>

    <NavLink activeClassName={styles.active} exact to='/'>HOME</NavLink>

    <NavLink
      activeClassName={styles.active}
      to={{ type: 'LIST', payload: { category: 'redux' } }}
    >
      Redux
    </NavLink>

    <Link
      className={active(path, '/list/react')}
      to={{ type: 'LIST', payload: { category: 'react' } }}
    >
      React
    </Link>

    <div style={{ height: 20 }} />
    <h2>EVENT HANDLERS</h2>

    <span className={active(path, '/')} onClick={() => dispatch({ type: 'HOME' })}>
      HOME
    </span>

    <span
      className={active(path, '/list/redux')}
      onClick={() => dispatch({ type: 'LIST', payload: { category: 'redux' } })}
    >
      Redux
    </span>

    <span
      className={active(path, '/list/react')}
      onClick={() => dispatch({ type: 'LIST', payload: { category: 'react' } })}
    >
      React
    </span>
  </div>

const active = (currentPath, path) => currentPath === path ? styles.active : ''
const mapState = ({ location }) => ({ path: location.pathname })
export default connect(mapState)(Sidebar)
