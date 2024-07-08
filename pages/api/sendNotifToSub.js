import { Novu } from '@novu/node';

export default async function sendNotifToSub(req, res) {
    try {
        const novu = new Novu(process.env.NOVU_API_KEY);
        
        
        if (req.method === 'POST') {
            const subscriberId = req.body.subscriberId;
            const email = req.body.email;
            console.log('subscriberId:', subscriberId);
            console.log('email:', email);
            const result = await novu.trigger("spiketesting", {
                to: {
                    subscriberId:subscriberId,
                    email: email,
                },
                payload: {},
            });
            // Return the result as JSON response
            res.json(result.data);
            
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
