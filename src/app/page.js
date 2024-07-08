'use client'
import styles from './page.module.css'
import SubscriberForm from '@/components/addSub'
import EmailNotify from '@/components/EmailNotify'
import SMSNotify from '@/components/SMSNotify'

import React, {useState} from 'react'

export default function Home() {
  const [toggle, setToggle] = useState(0)

  return (
    <main className={styles.main}>
      <h1>Spike System</h1>
      <h2>First, add a Subscriber</h2>
      <SubscriberForm />
      <h2>Then choose which Kind of Notification you would like to send</h2>
      <div>
        <div><button onClick={() => setToggle(0)}>Email Notification</button></div>
        <div><button onClick={() => setToggle(1)}>SMS Notification</button></div>
        <div><button onClick={() => setToggle(2)}>Slack Notification</button></div>
        <div><button onClick={() => setToggle(3)}>In-App Notification</button></div>
      </div>

      {toggle === 0 && <EmailNotify />}
      {toggle === 1 && <SMSNotify />}
      {toggle === 2 && <h2>Slack Notification</h2>}
      {toggle === 3 && <h2>In-App Notification</h2>}


    </main>
  )
}
