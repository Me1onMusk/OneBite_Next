
export default async function Page({params} : {params:Promise<{id:string}>}) {
    const {id} = await params;
    return (
        <div>
            <h1>북 {id}</h1>
        </div>
    );
};