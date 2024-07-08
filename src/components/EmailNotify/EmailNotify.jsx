// components/NotificationForm.js

import { useState } from 'react';

const NotificationForm = () => {
    const [subscriberId, setSubscriberId] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
 
        e.preventDefault();
        try {
            const response = await fetch('/api/sendNotifToSub', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subscriberId,
                    email,
                }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Notification sent successfully:', data);
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Email Notification</h2>
            <input
                type="text"
                placeholder="Subscriber ID"
                value={subscriberId}
                onChange={(e) => setSubscriberId(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Send Notification</button>
        </form>
    );
};

export default NotificationForm;
