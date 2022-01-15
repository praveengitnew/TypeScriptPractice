let products:String[]=["tv","mobile","shoe"];
function wePeoducts(){
    var collection=products.entries();
    for(var x of Array.from (collection)){
        console.log(x);
    }

}

wePeoducts();
products.push("watch");//removed last element
wePeoducts();
var removedElements= products.pop();
console.log(`${removedElements}-removed watch`);
wePeoducts();