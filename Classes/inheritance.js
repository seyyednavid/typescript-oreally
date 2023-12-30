var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        (this.make = make), (this.model = model), (this.year = year);
    }
    BMW.prototype.commonEngineFunc = function () {
        console.log("common func");
    };
    BMW.prototype.start = function () {
        console.log("Start");
    };
    BMW.prototype.stop = function () {
        console.log("Stop");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControlEnable) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControlEnable = cruiseControlEnable;
        return _this;
    }
    ThreeSeries.prototype.cruiseControl = function () {
        this.cruiseControlEnable = true;
        console.log("cruising");
    };
    ThreeSeries.prototype.start = function () {
        console.log("botton Start");
    };
    ThreeSeries.prototype.stop = function () {
        console.log("botton Stop");
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingAssistEnable) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingAssistEnable = parkingAssistEnable;
        return _this;
    }
    FiveSeries.prototype.parkingAssist = function () {
        this.parkingAssistEnable = true;
        console.log("parking");
    };
    FiveSeries.prototype.start = function () {
        console.log("remote Start");
    };
    FiveSeries.prototype.stop = function () {
        console.log("remote Stop");
    };
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("BMW", "328i", "2018", false);
console.log(threeSeries.cruiseControlEnable);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();
var fiveSeries = new FiveSeries("BMW", "535", "2018", false);
console.log(fiveSeries.parkingAssistEnable);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();
