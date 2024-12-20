
import { ReactNode, useEffect } from 'react';
import style from './index.module.css';
import SearchableLayout from '@/components/searchable-layout';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
import { InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';

// SSR 사전 랜더링 // 
// 1번만 실행 
// URL 요청 -> SSR 실행 -> Home() 실행 
export const getServerSideProps = async() => { 
    // const allBooks = await fetchBooks();
    // const randomBooks = await fetchRandomBooks();

    // 병렬(동시)로 데이터 불러오기 // 
    const [allBooks, randomBooks] = await Promise.all([
        fetchBooks(),
        fetchRandomBooks()
    ]);

    return (
        { 
            props: { 
                allBooks,
                randomBooks
            }
        }
    );
}; 

// SSG 방식 (Build Time) : 기본 방식 // 
// export const getStaticProps = async () => {
//     // SSR 방식과 동일 // 
// };

// 타입 자동 추론 : InferGetServerSidePropsType<typeof getServerSideProps> 
export default function Home({allBooks, randomBooks}: InferGetServerSidePropsType<typeof getServerSideProps>) { 

    return (
        <div className={style.container}>
            <section>
                <h3>📖지금 추천하는 도서</h3>  
                {randomBooks.map((book)=><BookItem key={book.id} {...book} />)}
            </section>
            <section>
                <h3>📚등록된 모든 도서</h3>
                {allBooks.map((book)=><BookItem key={book.id} {...book} />)}
            </section>
        </div>
    );
};

// 서치바를 Home에만 적용 시키기 // 
Home.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page} </SearchableLayout>
} 

// Data fetch // 
// 단점 : 데이터를 가져오는데 시간이 걸림 
// export default function Page() {
//     const [state, setState] = useState();

//     // 데이터를 비동기적으로 가져오는 함수 //
//     const fetchData = async() => {
//         const response = await fetch("...");
//         const data = await response.json();

//         setState(data);
//     }

//     useEffect(() => {
//         fetchData();
//     }, []);
// }