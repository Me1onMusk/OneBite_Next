
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";  //쿼리 스트링 사용 
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from '@/lib/fetch-books';
import { BookData } from '@/types_db';

// SSR 서버 사이드 랜더링 // 
// context : GetServerSidePropsContext : Home에서 이미 받은 정보를 가지고 있음.
export const getServerSideProps = async (context : GetServerSidePropsContext) => {
    // SSG 방식은 Build Time에서 작동함. 그래서 Query 실행 안됨. 
    const q = context.query.q;
    const books = await fetchBooks(q as string);

    return(
        {
            props : {
                books
            }
        }
    )
}

export default function Page({books}:InferGetServerSidePropsType<typeof getServerSideProps>) { 
    
    // Build 이후 Query를 받아서 실행 // 
    // const router = useRouter();  //라우터
    // const q = router.query.q;    //라우터 -> 쿼리 
    // const [book, setBook] = useState<BookData[]>([]); 
    // const fetchSearchResult = async () => {
    //     const data = await fetchBooks(q as string);  
    //     setBook(data);
    // }; 

    // useEffect(()=>{
    //     if(q) {
    //         fetchSearchResult();  //쿼리가 있으면 책 불러오기
    //     }
    // }, [q]);  

    return (
        <div> 
            {books.map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    );
};

Page.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
};