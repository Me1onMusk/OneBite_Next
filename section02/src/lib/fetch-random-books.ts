
import { BookData } from "@/types_db";

export default async function fetchRandomBooks() : Promise<BookData[]> {
    // const url = `http://localhost:12345/book/random`;
    const url = `https://onebite-books-server-main-zeta-nine.vercel.app/book/random`;
    
    try{
        const response = await fetch(url);
        if(!response.ok)
            throw new Error();
        return await response.json();
    }catch(error) {
        console.log(error);
        return [];
    };
};