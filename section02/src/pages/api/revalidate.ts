
import { NextApiRequest, NextApiResponse } from "next";

// 이 API가 실행되면 
// 홈으로 이동하고 페이징 리랜더링 
export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
) {    
    try{
        await res.revalidate('/');
        return await res.json({revalidate: true});
    }catch(err) {
        res.status(500).send("Revalidate Failed");
        console.log(err);
    }
}