import React from 'react'
import { connect } from 'react-redux'
import styles from '../css/List'

const List = ({ category, packages }) =>
  <div className={styles.list}>
    <div className={styles.title}>Category: {category}</div>

    <div className={styles.content}>
      <ul>
        {packages.map(pkg => <li key={pkg}>{pkg}</li>)}
      </ul>

      <div className={styles.more}>Wanna master data-fetching? Read:</div>
      <a
        className={styles.link}
        href='https://medium.com/faceyspacey/redux-first-router-data-fetching-solving-the-80-use-case-for-async-middleware-14529606c262'
        target='_blank'
        rel='noopener noreferrer'
      >
        Redux-First Router data-fetching: solving the 80% use case for async
        Middleware 🚀
      </a>
    </div>
  </div>

const mapState = ({ category, packages }) => ({ category, packages })
export default connect(mapState)(List)
