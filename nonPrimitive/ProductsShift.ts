let products:String[]=["tv","mobile","shoe","washgmchn","hd"];
function wePeoducts(){
    var collection=products.entries();
    for(var x of Array.from (collection)){
        console.log(x);
    }

}

wePeoducts();
var removedElements= products.splice(2,4);//shift remoe first elements
console.log(`${removedElements}-removed tv`);
wePeoducts();