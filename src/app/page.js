'use client'
import styles from './page.module.css'
import SubscriberForm from '@/components/addSub'
import EmailNotify from '@/components/EmailNotify'

import React from 'react'

export default function Home() {

  return (
    <main className={styles.main}>
      <h1>Spike System</h1>
      <h2>First, add a Subscriber</h2>
      <SubscriberForm />
      <h2>Then choose which Kind of Notification you would like to send</h2>
      <EmailNotify />

    </main>
  )
}
