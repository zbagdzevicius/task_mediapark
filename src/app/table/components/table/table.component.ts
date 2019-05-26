import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table/table.service';
import { Cars } from 'src/app/core/models/cars.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/core/models/car.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  car: Car = new Car();
  cars: Cars;
  carAddForm: FormGroup;
  tableKeys: string[];

  constructor(
    private tableService: TableService,
    private formBuilder: FormBuilder
  ) {
    this.getCarsData();
    this.getTableKeys();
    this.carAddForm = this.formBuilder.group(
      {
        id: [this.car.id],
        name: [this.car.name, Validators.required],
        price: [this.car.price, Validators.required],
        additional: [this.car.additional]
      }
    );
  }

  ngOnInit() {
  }

  private getCarsData() {
    this.tableService.getTableData()
      .subscribe((carsData: Cars) => this.cars = carsData);
  }

  private getTableKeys() {
    this.tableKeys = Object.keys(Car);
  }

  addCar() {
    if (this.carAddForm.valid) {
      this.car = this.carAddForm.value;
      this.cars.cars.push(this.car);
      this.carAddForm.reset();
    }
  }

  deleteCar(car: Car) {
    const index = this.cars.cars.indexOf(car);
    if (index !== -1) {
      this.cars.cars.splice(index, 1);
    }
  }

}
