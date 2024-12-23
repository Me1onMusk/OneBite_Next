/*
    Next.js
        1. 서버 사이드 랜더링 (SSR) : 서버에서 미리 랜더링 하여 클라이언트로 전달 
        2. 정적 사이트 생성 (SSG) : 빌드 타임에 HTML을 미리 생성하여 배포 
        3. 클라이언트 사이드 랜더링 (CSR) : 일부를 클라이언트에서만 랜더링 
*/



/* 객체 */ 
const person = {
    name : "Kim",
    age : 30
}; 

/* 구조 분해 */

/* promise */
const promise = new Promise ((resolve, reject)=> {
    const success = true;
    if(success) resolve("작업 성공");
    else reject("작업 실패");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })


/* async & await */

/*  
    직렬화(Serialization) 
        네트워크를 통해 전송하기 위해 변경
        JS에서 함수는 직렬화가 불가능 함 
    {"name":"Kim","age":30}; 
*/
const Person = {
    name : "Kim",
    age : 30    
};

/*
    
*/