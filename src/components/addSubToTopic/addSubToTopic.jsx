// Example component that calls the API route
import React, { useState } from 'react';

const AddSubscriberToTopic = () => {
  const [subscriberId, setSubscriberId] = useState('');
  const [topicKey, setTopicKey] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/addSub', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscriberId, topicKey }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Subscriber ID:
          <input type="text" value={subscriberId} onChange={(e) => setSubscriberId(e.target.value)} />
        </label>
        <br />
        <label>
          Topic Key:
          <input type="text" value={topicKey} onChange={(e) => setTopicKey(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Subscriber</button>
      </form>
      {response && <p>{JSON.stringify(response)}</p>}
    </div>
  );
};

export default AddSubscriberToTopic;
