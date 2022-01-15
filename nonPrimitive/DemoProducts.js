var products = ["tv", "mobile", "shoes"];
function getProducts() {
    var collection = products.entries();
    for (var _i = 0, _a = Array.from(collection); _i < _a.length; _i++) {
        var x = _a[_i];
        console.log(x);
    }
}
getProducts();
products.push("watch");
console.log("new element added:");
getProducts();
products.unshift("hard disk");
console.log("new element added first index");
getProducts();
products.splice(2, 1, "jeans");
getProducts();
