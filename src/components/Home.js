import React from 'react'
import styles from '../css/Home'

const Home = () =>
  <div className={styles.home}>
    <h1 className={styles.title}>HOME</h1>

    <div className={styles.content}>
      <img
        src='https://cdn.reactlandia.com/rudy-logo.png'
        alt='logo'
        style={{ height: 300 }}
      />
      <span className={styles.caption}>RFR will become Rudy</span>

      <div className={styles.more}>Wanna master SSR? Read:</div>
      <a
        className={styles.link}
        href='https://medium.com/faceyspacey/server-render-like-a-pro-w-redux-first-router-in-10-steps-b27dd93859de'
        target='_blank'
        rel='noopener noreferrer'
      >
        Server-Render Like a Pro in 10 Steps /w Redux-First Router 🚀
      </a>
    </div>
  </div>

export default Home
