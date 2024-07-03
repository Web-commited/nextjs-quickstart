import { Novu } from '@novu/node';

export default async function CreateSubscriber(req, res) {
    try {
        const novu = new Novu(process.env.NOVU_API_KEY);
        console.log('reached CreateSubscriber');
        if (req.method === 'POST') {
            const subscriberId = req.body.subscriberId;
            const email = req.body.email;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const phone = req.body.phone;
            await novu.subscribers.identify(subscriberId, {
                email,
                firstName,
                lastName,
                phone,
            });
            res.status(200)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
