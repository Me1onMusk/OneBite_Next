import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import books from '@/mock/books.json'
import BookItem from "./book-item";

export default function Page() { 
    return (
        <div>
            {books.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    );
};

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}