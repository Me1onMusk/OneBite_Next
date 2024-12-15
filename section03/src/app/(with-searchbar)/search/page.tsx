

// 서버 Component // 
export default async function Page({searchParams} : {searchParams:Promise<{q:string}>}) {
    const { q } = await searchParams;
    return (
        <div>
            <h1>서치 결과{q}</h1>
        </div>
    );
};