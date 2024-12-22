
'use client';

import { useEffect, useState } from "react";
import style from './searchbar.module.css';
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    // const q = router.q as string;         //앱 라우터에서 사용X 
    const searchParmas = useSearchParams();  //쿼리 스트링
    const [search, setSearch] = useState("");

    const q = searchParmas.get("q");

    // 새로고침시 검색어 남아있게 만들기 //
    useEffect(()=>{
        setSearch(q || "");
    }, [q]);

    // 검색 관련 //
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    // 버튼 관련 //
    const onSubmit = () => { 
        if(!search || search === q) return;  //입력값이 없으면
        router.push(`/search?q=${search}`);
    }; 

    // 엔터키 누르면 검색 실행 //
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') onSubmit();
    };
    
    return (
        <div className={style.container}>
            <input
                onKeyDown={onKeyDown} 
                value = {search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요" />
            <button 
                onClick={onSubmit}>
                검색
            </button>
        </div>
    );
};