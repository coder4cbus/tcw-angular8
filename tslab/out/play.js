// var age: number = "Too Old"
// console.log(age)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function printPerson (name:string, age:number) {
//     console.log(`Name: ${name} age: ${age}`)
// }
// printPerson("Billy", 8)
// printPerson(8, "Billy")
var Product = /** @class */ (function () {
    function Product(id) {
        this.id = id;
    }
    Product.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("ID: " + this.id);
        console.log("Price: " + this.price);
    };
    return Product;
}());
var Tour = /** @class */ (function (_super) {
    __extends(Tour, _super);
    function Tour(id, duration) {
        var _this = _super.call(this, id) || this;
        _this.duration = duration;
        return _this;
    }
    Tour.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration);
    };
    return Tour;
}(Product));
// function test(p: Product) {
//     p.printDetails()
// }
var t = new Tour(1, "8 hours");
t.title = "Trip to the Taj Mahal";
t.price = 1200.00;
/* class Tour extends Product implements Bookable, Cancelable {

        duration: string;
        availableDates: [Date];
        cancelationFee: number;
    
        constructor(id: number, duration: string) {
            super(id);
    
            this.duration = duration
        }
    
        printDetails() {
            super.printDetails()
    
            console.log(`Duration: ${this.duration}`)
        }
    } */
function test(p) {
    p.printDetails();
}
var Dining = /** @class */ (function (_super) {
    __extends(Dining, _super);
    function Dining(id, duration, cuisine, childPrice) {
        var _this = _super.call(this, id, duration) || this;
        _this.cuisine = cuisine;
        _this.childPrice = childPrice;
        return _this;
    }
    Dining.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Cuisine: " + this.cuisine);
        console.log("Child Price: " + this.childPrice);
    };
    return Dining;
}(Tour));
// var d = new Dining(1, "8 hours", "Indian", 5)
// d.title = "Trip to Germany"
// d.price = 2500
// test(d)
function cancelBooking(c) {
    console.log("Canceling booking. Charges: %d", c.cancelationFee);
}
function cancelBooking2(c) {
    console.log("Canceling : %s (%d)", c.title, c.id);
    console.log("Price: %d", c.price);
    console.log("Cancelation fee: %d", c.cancelationFee);
    console.log("Total Refund: %d", c.price - c.cancelationFee);
}
var t = new Tour(1, "8 hours");
t.title = "Trip to Germany";
t.price = 2500.00;
t.cancelationFee = 100.00;
function configSomething(op) {
    op.maxSize = op.maxSize || 1024;
    console.log("Directory: %s", op.directory);
    console.log("File: %s", op.path);
    console.log("Max size: %s", op.maxSize);
}
/* configSomething({
    directory: "/dir1",
    file: "persons.json"
}) */
configSomething({
    directory: "/dir1",
    path: "persons.json"
});
//# sourceMappingURL=play.js.map