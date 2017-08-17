import React from 'react'
import Sidebar from './Sidebar'
import Switcher from './Switcher'
import styles from '../css/App'

export default () =>
  <div className={styles.app}>
    <Sidebar />
    <Switcher />
  </div>
