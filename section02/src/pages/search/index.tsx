
import { useRouter } from "next/router";  //쿼리 스트링 사용 

export default function Page() { 
    const router = useRouter();
    const { q } = router.query;

    return (
        <div>
            서치: {q}
        </div>
    );
};