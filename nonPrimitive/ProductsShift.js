var products = ["tv", "mobile", "shoe", "washgmchn", "hd"];
function wePeoducts() {
    var collection = products.entries();
    for (var _i = 0, _a = Array.from(collection); _i < _a.length; _i++) {
        var x = _a[_i];
        console.log(x);
    }
}
wePeoducts();
var removedElements = products.splice(2, 4); //shift remoe first elements
console.log(removedElements + "-removed tv");
wePeoducts();
