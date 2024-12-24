
import style from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// ~/book/[id] // 
export default async function Page({params}:{params:{id:string | string}}) { 

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`); 
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
        <div>
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
        </div>
    );
};