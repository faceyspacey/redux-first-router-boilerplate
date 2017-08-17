import React from 'react'
import styles from '../css/Home'
import ArticlePromotion from './ArticlePromotion'

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

      <ArticlePromotion
        title='Wanna master SSR? Read:'
        text='Server-Render Like a Pro in 10 Steps /w Redux-First Router 🚀'
        url='https://medium.com/faceyspacey/server-render-like-a-pro-w-redux-first-router-in-10-steps-b27dd93859de'
      />
    </div>

    <a
      className={styles.nico}
      href='https://twitter.com/nico__delfino'
      target='_blank'
      rel='noopener noreferrer'
    >
      *One of our first users, Nicolas Delfino, designed the logo, check him
      out: @nico__delfino
    </a>
  </div>

export default Home
