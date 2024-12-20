
import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";  //쿼리 스트링 사용 
import { ReactNode } from "react";
import books from '@/mock/books.json';
import style from './index.module.css';
import BookItem from "@/components/book-item";

export default function Page() { 
    const router = useRouter();
    const { q } = router.query;
    
    return (
        <div> 
            {books.map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    );
};

Page.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
};