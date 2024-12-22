
import books from '@/app/mock/books.json';
import BookItem from '@/app/components/book-item';

export default async function Page({searchParams}:{searchParams:Promise<{q?: string}>}) {
    return (
        <div>
            {
                books.map((book)=>
                    <BookItem key={book.id} {...book} />
                )
            }
        </div>
    );
};