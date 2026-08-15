

function sumAny(numberse:number,...numb:number[]){
    // console.log(numberse);
    // console.log(numb);
    let numl:number=0;

    for(let num of numb){
        numl=numl+num;
        console.log(numl)
        

    }

}
console.log(sumAny(10,20,34))