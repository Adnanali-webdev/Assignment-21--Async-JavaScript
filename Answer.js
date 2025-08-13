// Q1)
// Ans)
 let arr = [0,1,2,3,4,5,6,7,8,9,10];
function blockEventLoop(){
    console.log("loopStart");
    for(let i = 0; i < 10000000000; i++){
    }  
    let i = 0;
      while(i < arr.length){
       console.log(arr[i]);
       i++
      }
       console.log("loop ends...");
}

async function asyncWait(){
     return new Promise(function executor(resolve,reject){
          console.log("Async function started and entering the executor callback in the promise constructor");
  
        setTimeout(function(){
        console.log("Asynchronous peice of Code it will take some time till the time i will be stored in the callback queue");
          resolve();
    },3000);
    console.log("Async function will end soon and Exiting the executor callback in the promise constructor");
     });
};

asyncWait();
blockEventLoop();


// Q2)
// Ans) 

console.log("1. Start");

setTimeout(() => {
    console.log("3. Inside setTimeout (async task)");
}, 0);

console.log("2. End");

// Q3)
// Ans) 

function delay(message, timer){
    return new Promise(function executor(resolve, reject){
        setTimeout(() => {
            console.log(message);
            resolve()
        },timer)
    })
};

delay(" the delay function to chain multiple promises so that three messages are logged in sequence with delays", 0)
 .then(function fulfillHandler(){
  return delay("first message logged In 1 after 3s", 3000);
})
 .then(function fulfillHandler(){
  return delay("Second message logged In 2 after 6s", 3000);
})
 .then(function fulfillHandler(){
 return delay("Third message logged In 3 after 9s", 3000);
});


//Q4)
//Ans)

const Pending = new Promise(function executor(resolve,reject){

});

console.log("Pending State", Pending);



const fullfilled = new Promise(function executor(resolve,reject){
         let num = "Promise";
        resolve(num)
});

fullfilled.then(function fulfillHandler(value){
    console.log("Fulfilled State", value);
});



const rejected = new Promise(function executor(resolve, reject){
    let num = "Promise";
    reject(num)
});
rejected.catch(function rejectedHandler(error){
    console.log("Rejected State", error);
})


//Q5)
//Ans)


function getRandomValue(max){
    return Math.floor(Math.random() * max)
};


function createPromiseWithTimeout(){
    return new Promise(function executor(resolve,reject){
        setTimeout(() => {
            let num = getRandomValue(10);
            if(num % 2 === 0){
                resolve(num)
            }else{
                reject(num)
            }
        },1000);
    });
};

const PromiseChain = createPromiseWithTimeout()
PromiseChain
    .then(function fulfillHandler(value){
   console.log("Promise has been resolved", value)
 })
    .catch(function rejectedHandler(value){
    console.log("Promise has been rejected", value)
 });
