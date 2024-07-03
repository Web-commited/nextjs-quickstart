// Example component that calls the API route
import React, { useState } from 'react';

const CreateTopicForm = () => {
  const [key, setKey] = useState('');
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/createTopics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key, name }),
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
          Topic Key:
          <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        </label>
        <br />
        <label>
          Topic Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <button type="submit">Create Topic</button>
      </form>
      {response && <p>{JSON.stringify(response)}</p>}
    </div>
  );
};

export default CreateTopicForm;
