import { NextApiResponse, NextApiRequest } from "next";
import database from "../baseData";

export async function handler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    const db = database();
    const data = await db.collection('code').getList();
    
    res.status(200).json(data);
}

