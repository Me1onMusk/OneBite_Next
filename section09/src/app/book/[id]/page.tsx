
import style from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { createReviewAction } from '@/actions/create-review.action';
import { ReviewData } from '@/types_db';

// 동적 페이지 -> 정적 페이지 

// 책 상세 함수 // 
async function BookDetail({bookID}:{bookID:string}) { 
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookID}`); 
    if(!response.ok)
        if(response.status === 404) 
            notFound();
    const book = await response.json();

    const { 
        title,
        subTitle,
        description,
        author,
        publisher,
        coverImgUrl 
    } = book; 

    return (
        <section>
            <div
                className={style.cover_img_container} 
                style={{backgroundImage: `url('${coverImgUrl}')` }}> 
                <Image 
                    src={coverImgUrl} 
                    width={240} 
                    height={300} 
                    alt={`도서 ${title}의 표지 이미지`} />
            </div>
            <div className={style.title}>{title}</div>
            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.author}>{author} | {publisher}</div>
            <div className={style.description}>{description}</div>
        </section>
    );
}

// 리뷰 작성하기 // 
function ReviewEditor({bookID}:{bookID:string}) {
    return (
        <section>
            <form action={createReviewAction}> 
                <input name='bookID' value={bookID} hidden readOnly />
                <input required name='content' placeholder='리뷰 내용' />
                <input required name='author' placeholder='작성자' />
                <button type='submit'>작성하기</button>
            </form>
        </section>
    );
};

// 리뷰 불러오기 // 
async function ReviewList({bookID}:{bookID:string}) { 
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookID}`);

    if(!response.ok) 
        throw new Error(`Review fetch failed : ${response.statusText}`);

    const reviews : ReviewData[] = await response.json();

    return (
        <section>

        </section>
    )
}

// ~/book/[id] // 
export default function Page({params}:{params:{id:string}}) { 
    return (
        <div className={style.container}>
            <BookDetail bookID={params.id} />
            <ReviewEditor bookID={params.id} />
            <ReviewList bookID={params.id} />
        </div>
    )
}; 