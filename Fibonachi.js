// const fibonachi=(numb)=>{
//     if(numb<2){
//         return numb;
//     }
    
//     return fibonachi(numb-1)+fibonachi(numb-2);
// }
// console.log(fibonachi(10))

const fib=function(numb){
if(numb<=1){
    return numb;

}
let prev=0,current=1,next;
for(let i=2; i<=numb; i++){
    next=prev+current;
    prev=current;
    current=next;
}
return next;

}
console.log(fib(10))
