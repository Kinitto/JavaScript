"use strict";
exports.__esModule = true;
exports.suma = void 0;
var suma = /** @class */ (function () {
    function suma(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    suma.prototype.sumar = function (num1, num2) {
        var area = num1 + num2;
        return area;
    };
    return suma;
}());
exports.suma = suma;
