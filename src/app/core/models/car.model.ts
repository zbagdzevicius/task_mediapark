export class Car {

    id: number;
    name: string;
    price: number;
    additional?: string;

    constructor() {
        this.id = Math.floor(Math.random() * 1000) + 1;
        this.name = null;
        this.price = null;
        this.additional = null;
    }
}
