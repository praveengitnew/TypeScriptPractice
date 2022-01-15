var products = ["tv", "mobile", "shoe"];
function wePeoducts() {
    var collection = products.entries();
    for (var _i = 0, _a = Array.from(collection); _i < _a.length; _i++) {
        var x = _a[_i];
        console.log(x);
    }
}
wePeoducts();
products.push("watch");
wePeoducts();
var removedElements = products.pop();
console.log(removedElements + "-removed watch");
wePeoducts();
