
import BookItem from '@/app/components/book-item';
import styles from './page.module.css';
import books from '@/app/mock/books.json';
import { BookData } from '@/types_db';

async function AllBooks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {cache: "no-store"});  //데이터 받아오기 & 캐시 저장X 
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

async function RecomandBooks() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`);  //데이터 받아오기 
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

// 비동기 함수 - 서버 //
export default function Home() {

    return (
        <div className={styles.container}>
            <section>
                <h3>📖지금 추천하는 도서</h3> 
                <RecomandBooks />
            </section>
            <section>
                <h3>📖등록된 모든 도서</h3>
                <AllBooks />
            </section>
        </div>
    );
}

// 페이지를 구성하는 모든 컴포포넌트들 -> (RSC Payload) 서버 컴포넌트들만 따로 실행 -> 완성된 HTML 페이지 
// RSC Payload : Raeact Server Component를 직렬화 한 결과 