
import { BookData } from "@/types_db";

export default async function fetchBooks(q?: string) : Promise<BookData[]> {
    let url = `http://localhost:12345/book`;

    // Query 질의 // 
    if(q)
        url += `/search?q=${q}`;
    
    try{ 
        const response = await fetch(url);
        if(!response.ok)
            throw new Error();
        return await response.json();
    }catch(error) {
        console.error(error);
        return [];
    }
}