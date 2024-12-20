
import { BookData } from "@/types_db";

export default async function fetchOneBook(id: number) : Promise<BookData | null> {
    // const url = `http://localhost:12345/book/${id}`;
    const url = `https://onebite-books-server-main-zeta-nine.vercel.app/book/${id}`;
    
    try{
        const response = await fetch(url);
        if(!response)
            throw new Error();
        return await response.json();
    }catch(error) {
        console.log(error);
        return null;
    }
}