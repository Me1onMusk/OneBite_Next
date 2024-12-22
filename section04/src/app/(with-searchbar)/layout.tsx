
import SearchBar from "@/app/components/saerchbar";
import { ReactNode } from "react";

export default function Layout({children}:{children: ReactNode}) {
    return (
        <div>
            <SearchBar />
            {children}
        </div>
    );
};