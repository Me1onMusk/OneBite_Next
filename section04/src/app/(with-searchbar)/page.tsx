
import BookItem from '@/app/components/book-item';
import styles from './page.module.css';
import books from '@/app/mock/books.json';
import { BookData } from '@/types_db';
import BookItemSkeleton from '../components/skeleton/book-item-skeleton';
import { Suspense } from 'react';
import { delay } from '../util/delay';
import BookListSkeleton from '../components/skeleton/book-list-skeleton';

// export const dynamic = '' //(권장 X) 
// 특정 페이지의 유형을 강제로 static, dynamic 페이지로 설정 
// 1. auto : 기본값, 아무것도 강제하지 않음 (생략 가능) 
// 2. force-dynamic : 페이지를 강제로 Dynamic 페이지로 설정 
// 3. force-static : 페이지를 강제로 static 페이지로 설정 
// 4. error : 페이지를 강제로 static 페이지로 설정 (안되면 오류 메세지) 

// 모든 책 출력 // 
async function AllBooks() {
    await delay(3000);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);  //데이터 받아오기 & 캐시 저장X -> 동적 페이지 
    if(!response.ok) return <div>오류가 발생했습니다...</div>     //오류가 발생하면 
    const allBooks : BookData[] = await response.json();          //응답을 json 형태로 변환, 타입은 BookData[] 형태 
    
    return (
        <div>
        {allBooks.map((book) => 
            <BookItem key={book.id} {...book} />
        )}
        </div>
    );
};

// 추천 책 출력 // 
async function RecomandBooks() {
    await delay(1000);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, {next: {revalidate: 3}});  //데이터 받아오기 
    if(!response.ok) return <div>오류가 발생했습니다...</div>            //오류가 발생하면 
    const recomandBooks : BookData[] = await response.json();            //응답을 json 형태로 변환, 타입은 BookData[] 형태 
    
    return (
        <div>
        {recomandBooks.map((book) => 
            <BookItem key={book.id} {...book} />
        )}
        </div>
    );
};

export const dynamic = 'force-dynamic';

// 비동기 함수 - 서버 //
export default function Home() {
    return (
        <div className={styles.container}>
            <section>
                <h3>📖지금 추천하는 도서</h3> 
                <Suspense 
                    fallback={
                        <BookListSkeleton count={3} />
                    }>
                    <RecomandBooks />
                </Suspense>
            </section>
            <section>
                <h3>📖등록된 모든 도서</h3>
                <Suspense
                    fallback={
                        <BookListSkeleton count={3} /> 
                    }>
                    <AllBooks />
                </Suspense>
            </section>
        </div>
    );
}

// 페이지를 구성하는 모든 컴포포넌트들 -> (RSC Payload) 서버 컴포넌트들만 따로 실행 -> 완성된 HTML 페이지 
// RSC Payload : Raeact Server Component를 직렬화 한 결과 