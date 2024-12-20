
// 구조 분해 //

// promise //
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


// async & await //