let products:string[]=["tv","mobile","shoes"];
function getProducts(){
   var collection= products.entries();
   for(var x of Array.from (collection)){

    console.log(x);

   }
}
getProducts();
products.push("watch");
console.log(`new element added:`);
getProducts();
products.unshift("hard disk");
console.log(`new element added first index`);
getProducts();
products.splice(2,0,"jeans");
getProducts();