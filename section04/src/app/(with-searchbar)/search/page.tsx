
import BookItem from '@/app/components/book-item';
import BookListSkeleton from '@/app/components/skeleton/book-list-skeleton';
import { delay } from '@/app/util/delay';
import { BookData } from '@/types_db'; 
import { Suspense } from 'react';

async function SearchResult({q} : {q: string}) {
    delay(2000);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`); 
    if(!response.ok) 
        return <div>오류가 발생했습니다...</div> 
    const books : BookData[] = await response.json(); 
    
    return (
        <div>
            {
                books.map((book)=>
                    <BookItem key={book.id} {...book} />
                )
            }
        </div>
    );
}

// export const dynamic = 'force-dynamic';

// 동적(Dynamic) 페이지 // 
export default function Page({searchParams}:{searchParams:{q?:string}}) { 
    return ( 
        <Suspense 
            key={searchParams.q || ""}
            fallback={
                <BookListSkeleton count={3} />
            } > 
            <SearchResult q={searchParams.q || ""} /> 
        </Suspense> 
    )
};