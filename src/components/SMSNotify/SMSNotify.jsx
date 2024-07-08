// components/SMSForm.js

import { useState } from 'react';

const SMSNotify = () => {
    const [subscriberId, setSubscriberId] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/smsToSub', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subscriberId,
                    phone,
                }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('SMS sent successfully:', data);
            // Handle success, e.g., show a success message
        } catch (error) {
            console.error('Error sending SMS:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>SMS Notification</h2>
            <input
                type="text"
                placeholder="Subscriber ID"
                value={subscriberId}
                onChange={(e) => setSubscriberId(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <button type="submit">Send SMS</button>
        </form>
    );
};

export default SMSNotify;
