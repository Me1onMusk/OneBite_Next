
import SearchBar from "@/app/components/saerchbar";
import { ReactNode, Suspense } from "react";


export default function Layout({children}:{children: ReactNode}) {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>} > 
                <SearchBar /> 
            </Suspense> 
            {children}
        </div>
    );
}; 

// Suspense (미완성)
// (비동기) SearchBar의 쿼리스트링이 입력되기 전까지 미완성 