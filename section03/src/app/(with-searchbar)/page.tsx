
import BookItem from '@/app/components/book-item';
import styles from './page.module.css';
import books from '@/app/mock/books.json';

export default function Home() {
    return (
        <div className={styles.container}>
            <section>
                <h3>📖지금 추천하는 도서</h3> 
                {books.map((book) => 
                    <BookItem key={book.id} {...book} />
                )}
            </section>
            <section>
                <h3>📖등록된 모든 도서</h3>
                {books.map((book) => 
                    <BookItem key={book.id} {...book} />
                )}
            </section>
        </div>
    );
}

// 페이지를 구성하는 모든 컴포포넌트들 -> (RSC Payload) 서버 컴포넌트들만 따로 실행 -> 완성된 HTML 페이지 
// RSC Payload : Raeact Server Component를 직렬화 한 결과 