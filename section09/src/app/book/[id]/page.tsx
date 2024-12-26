
import style from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ReviewData } from '@/types_db';
import ReviewItem from '@/app/components/review-item';
import { ReviewEditor } from '@/app/components/review-editor';

// 동적 페이지 -> 정적 페이지 

// 책 상세 함수 // 
async function BookDetail({bookId}:{bookId:string}) { 
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`); 
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

// 리뷰 불러오기 // 
async function ReviewList({bookId}:{bookId:string}) { 
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`,
        {
            next: {
                tags: [`review-${bookId}`]
            }
        }
    );

    if(!response.ok) 
        throw new Error(`Review fetch failed : ${response.statusText}`);

    const reviews : ReviewData[] = await response.json();

    return (
        <section>
            {
                reviews.map((review) => (<ReviewItem key={`review-item-${review.id}`} {...review} />))
            }
        </section>
    )
}

// ~/book/[id] // 
export default function Page({ params }:{ params : { id : string } }) { 
    return ( 
        <div className={style.container}>
            <BookDetail bookId={params.id} />
            <ReviewEditor bookId={params.id} />
            <ReviewList bookId={params.id} />
        </div>
    ); 
}; 