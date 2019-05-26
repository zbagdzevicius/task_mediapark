import { CarData } from './car-data.model';
import { AbstractModel } from './abstract.model';

export class Car {

    carData: CarData;
    customField?: AbstractModel;

    constructor(carData: CarData, abstractData: AbstractModel) {
        this.carData = carData;
        this.customField = abstractData;
    }
}
