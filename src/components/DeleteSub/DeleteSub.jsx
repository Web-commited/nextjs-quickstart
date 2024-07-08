// components/DeleteSubscriberForm.js

import { useState } from 'react';

const DeleteSub = () => {
    const [subscriberId, setSubscriberId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/deletSub', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ subscriberId }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Subscriber deleted successfully:', data);
            // Handle success, e.g., show a success message
        } catch (error) {
            console.error('Error deleting subscriber:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Subscriber ID"
                value={subscriberId}
                onChange={(e) => setSubscriberId(e.target.value)}
                required
            />
            <button type="submit">Delete Subscriber</button>
        </form>
    );
};

export default DeleteSub;
