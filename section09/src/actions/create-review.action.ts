
'use server';

// 서버 액션 //
export async function createReviewAction(formData: FormData) {    
    const bookID = formData.get('bookID')?.toString();
    const content = formData.get('content')?.toString(); 
    const author = formData.get('author')?.toString(); 

    if(!bookID || !content || !author)
        return;

    try { 
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`, 
            {
                method: "POST", 
                body: JSON.stringify({bookID, content, author})
            });
    }catch(error) { 
        console.log(error); 
        return; 
    }
}