import { Novu } from '@novu/node';

export default async function addSub(req, res) {
    try {
        const novu = new Novu(process.env.NOVU_API_KEY);
        if (req.method === 'POST') {
            const subscriberId = req.body.subscriberId;
            const topicKey = req.body.topicKey;
            const result = await novu.topics.addSubscribers(topicKey, {
                subscribers: [subscriberId],
            });
            res.status(200).json(result.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
