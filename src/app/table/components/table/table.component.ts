import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table/table.service';
import { Cars } from 'src/app/core/models/cars.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/core/models/car.model';
import { CarData } from 'src/app/core/models/car-data.model';
import { AbstractModel } from 'src/app/core/models/abstract.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  carData: CarData = new CarData();
  customField: AbstractModel = new AbstractModel();
  car: Car = new Car(this.carData, this.customField);
  cars: Cars;

  headers = [];
  requiredFieldsCount: number;

  carAddForm: FormGroup;
  carEditForm: FormGroup;
  sortForm: FormGroup;

  isDeleteFormOpen = false;
  isSortFormOpen = false;
  isCarAddOpen = false;
  isCarEditOpen = false;
  currentEditing: Car = null;
  currentEditingCarIndex: number;

  constructor(
    private tableService: TableService,
    private formBuilder: FormBuilder
  ) {
    this.headers = Object.keys(this.carData);
    this.getCarsData();
    this.carAddForm = this.createFormGroup();
    this.carEditForm = this.createFormGroup();
    this.sortForm = this.formBuilder.group({
      sortBy: [null],
      sortType: [null]
    });
  }

  ngOnInit() {
  }

  private getCarsData() {
    this.tableService.getTableData()
      .subscribe((carsArray: Cars) => {
        this.cars = carsArray;
        this.requiredFieldsCount = this.headers.length;
      });
  }

  private createFormGroup() {
    return this.formBuilder.group(
      {
        price: [this.car.carData.price, Validators.required],
        name: [this.car.carData.name, Validators.required],
        id: [this.car.carData.id],
        customFieldName: [this.car.customField.customFieldName],
        customFieldValue: [this.car.customField.customFieldValue]
      }
    );
  }

  addCar() {
    if (this.carAddForm.valid) {
      const form = this.carAddForm.value;
      this.car.carData.id = form.id;
      this.car.carData.name = form.name;
      this.car.carData.price = form.price;
      if (form.customFieldName) {
        this.car.customField.customFieldName = form.customFieldName;
        this.car.customField.customFieldValue = form.customFieldValue;
      }
      this.cars.cars.push(this.car);
      console.log(this.car);
      console.log(this.cars);
      this.carAddForm.reset();
    }
  }

  deleteCar(car: Car) {
    const index = this.cars.cars.indexOf(car);
    if (index !== -1) {
      this.cars.cars.splice(index, 1);
    }
  }

  editCar(car: Car) {
    this.isCarAddOpen = false;

    const currenCarIndex = this.cars.cars.indexOf(car);

    if (currenCarIndex === this.currentEditingCarIndex) {
      this.isCarEditOpen = !this.isCarEditOpen;
    } else if (currenCarIndex !== this.currentEditingCarIndex) {
      this.isCarEditOpen = true;
    }
    this.currentEditingCarIndex = currenCarIndex;
    this.currentEditing = car;

    const customFields = {
      customFieldName: null, customFieldValue: null
    };

    if (this.currentEditing.customField) {
      customFields.customFieldName = this.currentEditing.customField.customFieldName;
      customFields.customFieldValue = this.currentEditing.customField.customFieldValue;
    } else {
      this.currentEditing.customField = {
        customFieldName: null, customFieldValue: null
      };
    }

    this.carEditForm.setValue({
      id: this.currentEditing.carData.id,
      name: this.currentEditing.carData.name,
      price: this.currentEditing.carData.price,
      customFieldName: this.currentEditing.customField.customFieldName,
      customFieldValue: this.currentEditing.customField.customFieldValue
    });

  }

  submitEditedCar() {
    const form = this.carEditForm.value;
    console.log(form);
    this.currentEditing.carData.id = form.id;
    this.currentEditing.carData.name = form.name;
    this.currentEditing.carData.price = form.price;

    if (form.customFieldName) {
      this.currentEditing.customField.customFieldName = form.customFieldName;
      this.currentEditing.customField.customFieldValue = form.customFieldValue;
      if (this.headers.length > this.requiredFieldsCount) {
        this.headers.pop();
      }
      this.headers.push(form.customFieldName);
    }

    this.cars.cars[this.currentEditingCarIndex] = this.currentEditing;
    this.isCarEditOpen = !this.isCarEditOpen;
    this.carEditForm.reset();
    this.currentEditing = null;
  }

  deleteColumn() {
    this.cars.cars.forEach((car) => {
      if (car.customField) {
        car.customField.customFieldName = null;
        car.customField.customFieldValue = null;
      }
    });
    this.headers.pop();
    this.isDeleteFormOpen = false;
  }

  sortDataByColumn() {
    const form = this.sortForm.value;
    const column = form.sortBy;
    const type = form.sortType;
    if (column === 'name') {
      if (type === 'ascending') {
        this.cars.cars.sort((a, b) => {
          if (a.carData.name < b.carData.name) { return -1; }
          if (a.carData.name > b.carData.name) { return 1; }
          return 0;
        });
      } else {
        this.cars.cars.sort((a, b) => {
          if (a.carData.name < b.carData.name) { return 1; }
          if (a.carData.name > b.carData.name) { return -1; }
          return 0;
        });
      }
    }
    if (column === 'id') {
      if (type === 'ascending') {
        this.cars.cars.sort((a, b) => {
          return a.carData.id - b.carData.id;
        });
      } else {
        this.cars.cars.sort((a, b) => {
          return b.carData.id - a.carData.id;
        });
      }
    }
    if (column === 'price') {
      if (type === 'ascending') {
        this.cars.cars.sort((a, b) => {
          return a.carData.price - b.carData.price;
        });
      } else {
        this.cars.cars.sort((a, b) => {
          return b.carData.price - a.carData.price;
        });
      }
    }
  }


}
