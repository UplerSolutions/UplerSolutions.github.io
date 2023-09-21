import type { NextApiRequest, NextApiResponse } from 'next'
import { ISoftware } from '../../../interface/software';
import { software } from "../../../data/software"


type Data = ISoftware[] | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === "GET") {
        res.status(200).json(software)
    } else {
        res.status(405).json({ message: "Método no permitido" })
    }
}
