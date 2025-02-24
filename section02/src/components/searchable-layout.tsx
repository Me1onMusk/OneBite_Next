
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import style from './searchable-layout.module.css';

export default function SearchableLayout({children}:{children:ReactNode}) {
    const router = useRouter();          //라우터 
    const q = router.query.q as string;  //query를 string 타입으로 정의 
    const [search, setSearch] = useState(""); 

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
    const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => { 
        if(e.key === 'Enter') onSubmit(); 
    };

    return ( 
        <div> 
            <div className={style.searchbar_cotainer}> 
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
            {children}
        </div>
    );
};