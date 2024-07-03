'use client'
import styles from './page.module.css'
import AddSubscriberToTopic from '@/components/addSubToTopic'
import CreateTopicForm from '@/components/createTopics'
import SubscriberForm from '@/components/addSub'

import React from 'react'

export default function Home() {

  return (
    <main className={styles.main}>
      <AddSubscriberToTopic />
      <CreateTopicForm />
      <SubscriberForm />

    </main>
  )
}
