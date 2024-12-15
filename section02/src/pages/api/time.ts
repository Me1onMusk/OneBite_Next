import { NextApiRequest, NextApiResponse } from "next";

export default function Handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    const date = new Date();
    res.json({time: date.toLocaleString()});  //클라이언트 응답 
};