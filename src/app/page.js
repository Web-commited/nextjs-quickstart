'use client'
import styles from './page.module.css'
import SubscriberForm from '@/components/addSub'
import EmailNotify from '@/components/EmailNotify'
import SMSNotify from '@/components/SMSNotify'
import Image from 'next/image'

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
      </div>

      {toggle === 0 && <EmailNotify />}
      {toggle === 1 && <SMSNotify />}
      {toggle === 2 && <div>
        <h2>Slack Notification</h2>
        </div>}
      <a href='https://api.novu.co/v1/subscribers/SMSTest/credentials/slack/oauth?environmentId=6683d627d2d2bee3eb0240ff&integrationIdentifier=slack-Pmbd0LaAt' target='_blank'>Test, still in the works</a>



    </main>
  )
}
