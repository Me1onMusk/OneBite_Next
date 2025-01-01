
import { NextResponse } from "next/server";

// 데이터베이스 // 
const DB = [
    {id: 1, name: "Kim"},
    {id: 2, name: "Lee"},
    {id: 3, name: "Park"}
];

export default function GET(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const name = searchParams.get("name") as string;

    return (
        NextResponse.json({
            users: DB.filter((user) => user.name.includes(name))
        })
    );
};