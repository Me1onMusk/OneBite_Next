import { ReactNode } from "react";
import SearchBar from "./searchbar";

export default function Layout({children}:{children: ReactNode}) {
    return (
        <div>
            <SearchBar />
            {children}
        </div>
    );
};