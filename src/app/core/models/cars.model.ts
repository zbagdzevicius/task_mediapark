import { Car } from './car.model';


export class Cars {

    cars: Array<Car>;

    constructor(array: Array<Car>) {
        this.cars = array;
    }
}
