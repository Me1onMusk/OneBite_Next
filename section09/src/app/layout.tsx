
import Link from "next/link";
import "./globals.css";
import style from './layout.module.css';
import { BookData } from "@/types_db";

// 푸터 //
async function Footer() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);
    if(!response.ok) return <div>제작 @Kim</div>
    const books : BookData[] = await response.json();
    const bookCount = books.length;

    return(
        <footer>
            <div>제작 @Kim</div>
            <div>{bookCount}개의 도서가 등록되어 있습니다.</div>
        </footer>
    );
};

// 헤더 // 
function Header() {
    return (
        <header>
            <Link href={'/'}>📚OneBite Books</Link>
        </header>
    );
};

// 메인 Layout //
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="kr">
        <body>
            <div className={style.container}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </body>
    </html>
  );
};