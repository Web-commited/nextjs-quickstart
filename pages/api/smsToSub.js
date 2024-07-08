import { Novu } from '@novu/node';

export default async function smsToSub(req, res) {
    try {
        const novu = new Novu(process.env.NOVU_API_KEY);
        
        
        if (req.method === 'POST') {
            const subscriberId = req.body.subscriberId;
            const phone = req.body.phone;
            const result = await novu.trigger("spikesmstesting", {
                to: {
                    subscriberId:subscriberId,
                    phone: phone,
                },
                overrides: {
                    from: "Spikesmstesting",
                },
                payload: {},
            });
            res.json(result.data);
            
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
