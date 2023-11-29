import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../baseData'

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const db = database();
    const id = ''

    switch (req.method) {
        case 'GET':
            const record = await db.collection('code').getOne(id);
            
            res.status(200).json(record)
    }
}