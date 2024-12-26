
import { BookData } from '@/types_db';
import BookItem from '../components/book-item';
import style from './page.module.css';
import type { Metadata } from "next";

// 메타 데이터 // 
export const metadata: Metadata = {
    title: "한입 북스",
    description: "한입 북스에 등록된 도서를 만나보세요.",
    openGraph : {
        title: "한입 북스",
        description : "한입 북스에 등록된 도서를 만나보세요",
        images : [
            '/thumbnail.png'
        ]
    }
};

// 모든 책 출력 함수 // 
async function AllBooks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);
    if(!response.ok) return <div>오류가 발생했습니다...</div> 
    const allBooks : BookData[] = await response.json(); 

    return(
        <div>
            {
                allBooks.map((book) => <BookItem key={book.id} {...book} />) 
            }
        </div>
    );
};

// 추천 책 출력 함수 // 
async function RecommandBooks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`); 
    if(!response.ok) return <div>오류가 발생했습니다...</div> 
    const recommandBooks : BookData[] = await response.json(); 

    return (
        <div>
            {
                recommandBooks.map((book) => <BookItem key={book.id} {...book} />) 
            }
        </div>
    );
};


// ~/ //
export default function Home() {
  return (
    <div className={style.container}> 
        <section> 
            <h3>📖지금 추천하는 도서</h3> 
            <RecommandBooks />
        </section>
        <section>
            <h3>📖등록된 모든 도서</h3> 
            <AllBooks />
        </section>
    </div>
  );
}

/*
    BookData [
        {
            id : number,
            title: string,
            subTitle: string,
            description: string,
            author: string,
            publisher: string,
            coverImgUrl: string
        },
        {
            id : number,
            title: string,
            subTitle: string,
            description: string,
            author: string,
            publisher: string,
            coverImgUrl: string
        },
        {
            id : number,
            title: string,
            subTitle: string,
            description: string,
            author: string,
            publisher: string,
            coverImgUrl: string
        }
    ]
*/