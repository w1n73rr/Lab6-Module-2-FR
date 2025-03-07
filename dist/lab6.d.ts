declare function SealPrototype(constructor: Function): void;
declare function ToUpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare class Car {
    brand: string;
    model: string;
    constructor(brand: string, model: string);
    getInfo(): string;
}
declare const car: Car;
