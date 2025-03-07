var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function SealPrototype(constructor) {
    Object.seal(constructor.prototype);
}
function ToUpperCase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
    return descriptor;
}
let Car = class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getInfo() {
        return `Автомобиль: ${this.brand} ${this.model}`;
    }
};
__decorate([
    ToUpperCase
], Car.prototype, "getInfo", null);
Car = __decorate([
    SealPrototype
], Car);
const car = new Car("Toyota", "Camry");
console.log(car.getInfo());
car.color = "Red";
console.log(car);
Car.prototype.newMethod = function () {
    return "Это новый метод";
};
console.log(car.newMethod);
