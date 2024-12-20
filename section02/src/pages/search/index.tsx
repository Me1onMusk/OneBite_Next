
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from '@/lib/fetch-books';
import Head from 'next/head';

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
            <Head>
                <title>한입북스-검색결과</title>
                <meta property='og:image' content='/thumbnail.png' />
                <meta property='og:title' content='한입북스-검색결과' />
                <meta property='og:description' content='한입 북스에 등록된 도서들을 만나보세요' /> 
            </Head>
            {books.map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    );
};

Page.getLayout = (page:ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
};