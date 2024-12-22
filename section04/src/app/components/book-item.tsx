
import type { BookData } from "@/types_db";
import style from './book-item.module.css';
import Link from "next/link";

export default function BookItem({
    id,
    title,
    subTitle,
    author,
    publisher,
    coverImgUrl
}:BookData) {
    return (
        <Link href={`/book/${id}`} className={style.container}>
            <img src={coverImgUrl} /> 
            <div>
                <div className={style.title}>{title}</div>
                <div className={style.subTitle}>{subTitle}</div>
                <br />
                <div className={style.author}>
                    {author} | {publisher}
                </div>
            </div>
        </Link>
    );
};