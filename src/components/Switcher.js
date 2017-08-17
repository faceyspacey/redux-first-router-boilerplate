import React from 'react'
import { connect } from 'react-redux'
import universal from 'react-universal-component'
import styles from '../css/Switcher'

const UniversalComponent = universal(({ page }) => import(`./${page}`), {
  minDelay: 500,
  loading: () => <div className={styles.spinner}><div /></div>,
  error: () => <div className={styles.notFound}>PAGE NOT FOUND - 404</div>
})

const Switcher = ({ page }) =>
  <div className={styles.switcher}>
    <UniversalComponent page={page} />
  </div>

const mapState = ({ page }) => ({ page })

export default connect(mapState)(Switcher)
