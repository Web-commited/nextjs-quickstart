import { Novu } from "@novu/node";




export default async function deletSub(req, res) {
    try {
        const novu = new Novu(process.env.NOVU_API_KEY);
        const subscriberId = req.body.subscriberId;

        await novu.subscribers.delete(subscriberId);
        res.json({ message: "Subscriber deleted successfully" });
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
