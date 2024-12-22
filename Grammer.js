
/* 객체 */ 
const person = {
    name : "Kim",
    age : 30
}; 

/* 구조 분해 */

/* 
    promise 
*/
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


/*
    async & await 
*/

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