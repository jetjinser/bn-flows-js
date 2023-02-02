import type { NextApiRequest, NextApiResponse } from "next"
import { redis } from "@/lib/upstash";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { flows_user, flow_id, address } = req.query;

    if (!flows_user || !flow_id || !address) {
        return res.status(400).send("Bad request");
    }

    if (typeof flow_id == "string") {
        await redis.hdel(`${address}:ch:trigger`, flow_id);
    }

    return res.status(200).send("ok");
}
