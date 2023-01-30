import type { NextApiRequest, NextApiResponse } from "next"
import { redis } from "@/lib/upstash";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { address } = req.query;

    if (!address) {
        return res.status(400).send("Bad request");
    }

    try {
        let allFlows = await redis.hgetall(`${address}:ch:trigger`);

        if (allFlows) {
            return res.status(200).json(allFlows);
        } else {
            return res.status(404).send("No flow binding with the address")
        }
    } catch(e: any) {
        return res.status(500).send(e.toString());
    }
}
