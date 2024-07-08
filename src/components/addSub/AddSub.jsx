import { useState } from 'react';

const SubscriberForm = () => {
    const [subscriberId, setSubscriberId] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/createSubscriber', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    subscriberId,
                    email,
                    firstName,
                    lastName,
                    phone: phone.toString(), 
                }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Form submitted successfully:', data);
            setResponse(data);
            // Handle success, e.g., show a success message
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a Subscriber here!</h2>
            <input
                type="text"
                placeholder="Subscriber ID"
                value={subscriberId}
                onChange={(e) => setSubscriberId(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Submit</button>
            {response && <p>{JSON.stringify(response)}</p>}
        </form>
    );
};

export default SubscriberForm;
