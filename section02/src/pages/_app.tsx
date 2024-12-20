
import GlobalLayout from "@/components/global-layout";
import SearchableLayout from "@/components/searchable-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

// 페이지 설정 // 
type NextPageWithLayout = NextPage & { 
    getLayout ?: (page:ReactNode) => ReactNode; 
}; 

// Component 현재 페이지 <- pageProps 여기에 전달할 Props 
// 루트 부모 // 
export default function App({ Component, pageProps }: AppProps & {Componet: NextPageWithLayout}) {
    const getLayout = Component.getLayout ?? ((page:ReactNode)=> page); 
    const router = useRouter(); 
    const onClickButton = () => { 
        router.push('/test')
    };

    // pre-fetch 설정해주기 // 
    useEffect(()=>{
        router.prefetch('/test');
    }, []);

  return (
    <GlobalLayout>
        {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}

{/* <header>
<Link href={'/'}>인덱스</Link>
&nbsp;
<Link href={'/search'} prefetch={false}>서치</Link>
&nbsp;
<Link href={'/book/1'}>북</Link>
&nbsp;
<button onClick={onClickButton}>
    test 페이지로 이동
</button>
</header> */}