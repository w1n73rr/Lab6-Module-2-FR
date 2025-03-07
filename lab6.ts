function SealPrototype(constructor: Function) {
    Object.seal(constructor.prototype);
}

function ToUpperCase(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return typeof result === "string" ? result.toUpperCase() : result;
    };

    return descriptor;
}

@SealPrototype
class Car {
    constructor(public brand: string, public model: string) { }

    @ToUpperCase
    getInfo(): string {
        return `Автомобиль: ${this.brand} ${this.model}`;
    }
}

const car = new Car("Toyota", "Camry");

console.log(car.getInfo());

(car as any).color = "Red";
console.log(car); 

(Car.prototype as any).newMethod = function () {
    return "Это новый метод";
};

console.log((car as any).newMethod);

