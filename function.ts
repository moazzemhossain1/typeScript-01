
function add (num1:number,num2:number):number{
    return num1+num2;
}
const  rersult:number=add(10,20);
// console.log("The sum is =",+rersult)


function calcluterTaxt(numbers:number[],taxt:number,namee?:string){
    return {
        numbers:numbers,
        taxt:taxt,
        namee:namee
    }

}
// console.log(calcluterTaxt([3,22,3],0.3,"chaluee"))




function funString(frinds:string[]){
    return frinds;
}
// console.log(funString(["Rahim,karime,jober"]))





function twoNumber(a:number,b:number):number{
    const c:number=a+b;
    return c;
}
const Sum:number=twoNumber(30,10);
// console.log("The totle is ="+Sum)



function ObjFun(userse:{namee:string,roll:number,id?:number}){
    return userse;

}
const userse={
    namee:"Moazzem",
    roll:842726,
    id:32
}
// console.log(userse)





function threeNumber(a:number,b:number,c:number):number{
    return a+b+c;


}
const totlee=threeNumber(10,20,30);
console.log(totlee)
