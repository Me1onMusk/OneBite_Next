
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import style from './layout.module.css';
import { BookData } from "@/types_db";

export const metadata: Metadata = {
  title: "한입 북스",
  description: "Generated by create next app"
};

// 푸터 // 
async function Footer() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {cache: "force-cache"});  //자동으로 cache 저장X -> 동적 페이지 
    if(!response.ok) return <footer> 제작 @Kim </footer>

    const books : BookData[] = await response.json();
    const bookCount = books.length;
    
    return (
        <footer>
            <div>제작 @Kim</div>
            <div>{bookCount}개의 도서가 등록되어 있습니다.</div> 
        </footer>
    );
};

// 메인 // 
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="kr">
        <body>
            <div className={style.container}>
                <header>
                    <Link href={'/'}>📚OneBite Books</Link>
                </header>
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </body>
        </html>
    );
}