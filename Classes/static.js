//  some properties are the same all the time and we do not have to have them in all
//  objects to waste memory, so define them as a static.
// static property is no object level property, it is a class level property
var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "BOA";
        return Check.bankName;
    };
    return Check;
}());
var check1 = new Check();
// check1.bankName = "Barclays"
// class level property
// Check.bankName = "Barclays";
console.log(check1.display());
check1.customerName = "Navid Hejazi";
// console.log(Check.bankName);
