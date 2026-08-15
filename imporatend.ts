

function culcluteTax(amount:number | string | null,TaxtRat:number| string | null){

    if(typeof amount === "string"){
        amount=parseFloat(amount);

    }

    if(amount === null || isNaN(amount)){
        return "Inviled Number"
    }
    if(typeof TaxtRat === "string"){
        amount=parseFloat(TaxtRat);

    }

    if(TaxtRat === null ){
        return "Inviled Number"
    }

   return amount*TaxtRat;

}

console.log(culcluteTax(4,54))