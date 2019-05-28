(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table-table-module"],{

/***/ "./src/app/core/models/abstract.model.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/abstract.model.ts ***!
  \***********************************************/
/*! exports provided: AbstractModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractModel", function() { return AbstractModel; });
var AbstractModel = /** @class */ (function () {
    function AbstractModel() {
        this.customFieldName = null;
        this.customFieldValue = null;
    }
    return AbstractModel;
}());



/***/ }),

/***/ "./src/app/core/models/car-data.model.ts":
/*!***********************************************!*\
  !*** ./src/app/core/models/car-data.model.ts ***!
  \***********************************************/
/*! exports provided: CarData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarData", function() { return CarData; });
var CarData = /** @class */ (function () {
    function CarData() {
        this.id = null;
        this.name = null;
        this.price = null;
    }
    return CarData;
}());



/***/ }),

/***/ "./src/app/core/models/car.model.ts":
/*!******************************************!*\
  !*** ./src/app/core/models/car.model.ts ***!
  \******************************************/
/*! exports provided: Car */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Car", function() { return Car; });
var Car = /** @class */ (function () {
    function Car(carData, abstractData) {
        this.carData = carData;
        this.customField = abstractData;
    }
    return Car;
}());



/***/ }),

/***/ "./src/app/table/components/table/table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/table/components/table/table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-top\">\n  <div class=\"w3-bar\">\n    <button\n      (click)=\"isSortFormOpen = !isSortFormOpen\"\n      class=\"w3-button w3-pale-yellow w3-large\"\n    >\n      <span *ngIf=\"!isSortFormOpen; else sortFormOpened\">Open sorting</span>\n      <ng-template #sortFormOpened>Close sorting</ng-template>\n    </button>\n\n    <button\n      (click)=\"isCarAddOpen = !isCarAddOpen; isCarEditOpen = false\"\n      class=\"w3-button w3-pale-yellow w3-large\"\n    >\n      <span *ngIf=\"!isCarAddOpen; else carAddOpened\">Open car add form</span>\n      <ng-template #carAddOpened>Close car add form</ng-template>\n    </button>\n  </div>\n</div>\n\n<!-- SORT FORM -->\n\n<form\n  [formGroup]=\"sortForm\"\n  (ngSubmit)=\"sortDataByColumn()\"\n  *ngIf=\"isSortFormOpen\"\n>\n  <div class=\"w3-container w3-black\">\n    <h1>Sort table columns</h1>\n  </div>\n\n  <div class=\"w3-row\">\n    <div class=\"w3-third\">\n      <form [formGroup]=\"sortForm\">\n        <div class=\"w3-container w3-black\">\n          <h1>Column</h1>\n        </div>\n        <span *ngFor=\"let header of headers\">\n          <p>\n            <input\n              class=\"w3-radio\"\n              [value]=\"header\"\n              formControlName=\"sortBy\"\n              type=\"radio\"\n            /><label>{{ header }}</label>\n          </p>\n        </span>\n      </form>\n    </div>\n    <div class=\"w3-third\">\n      <div class=\"w3-container w3-black\">\n        <h1>Sort order</h1>\n      </div>\n      <form [formGroup]=\"sortForm\" class=\"w3-select\">\n        <p>\n          <input\n            class=\"w3-radio\"\n            value=\"ascending\"\n            formControlName=\"sortType\"\n            type=\"radio\"\n          /><label>ascending</label>\n        </p>\n        <p>\n          <input\n            class=\"w3-radio\"\n            value=\"descending\"\n            formControlName=\"sortType\"\n            type=\"radio\"\n          /><label>descending</label>\n        </p>\n      </form>\n    </div>\n    <div class=\"w3-third\">\n      <button type=\"submit\" class=\"w3-button w3-khaki\">\n        Sort By selected column\n      </button>\n    </div>\n  </div>\n</form>\n\n<!-- MAIN TABLE -->\n\n<table *ngIf=\"cars\" class=\"w3-table w3-bordered w3-black\">\n  <tr class=\"w3-pale-yellow\">\n    <th></th>\n    <th *ngFor=\"let header of headers; last as isLast\">\n      <span\n        *ngIf=\"\n          headers.length === requiredFieldsCount;\n          else tableHaveCustomColumn\n        \"\n      >\n        {{ header }}\n      </span>\n      <ng-template #tableHaveCustomColumn>\n        <span *ngIf=\"isLast; else notLastElement\">\n          <button class=\"w3-button w3-khaki\" (click)=\"isDeleteFormOpen = true\">\n            {{ header }}\n          </button>\n        </span>\n        <ng-template #notLastElement>\n          {{ header }}\n        </ng-template>\n      </ng-template>\n    </th>\n  </tr>\n  <tr *ngFor=\"let car of cars.cars\">\n    <th>\n      <button (click)=\"deleteCar(car)\" class=\"w3-button w3-khaki\">\n        Delete\n      </button>\n      <button (click)=\"editCar(car)\" class=\"w3-button w3-pale-yellow\">\n        Edit\n      </button>\n    </th>\n    <th *ngFor=\"let item of car.carData | keyvalue\">{{ item.value }}</th>\n    <th *ngIf=\"car.customField\">\n      {{ car.customField.customFieldValue }}\n    </th>\n  </tr>\n</table>\n\n<div class=\"w3-modal\" *ngIf=\"isCarAddOpen\">\n  <div class=\"w3-modal-content\">\n    <div class=\"w3-container w3-black\">\n      <h1>Add new car</h1>\n    </div>\n    <div class=\"w3-container\">\n      <form [formGroup]=\"carAddForm\" (ngSubmit)=\"addCar()\" *ngIf=\"isCarAddOpen\">\n        <input\n          formControlName=\"id\"\n          placeholder=\"id\"\n          type=\"number\"\n          min=\"1\"\n          max=\"9999999\"\n          class=\"w3-input\"\n        />\n        <input formControlName=\"name\" placeholder=\"name\" />\n        <input\n          formControlName=\"price\"\n          placeholder=\"price\"\n          type=\"number\"\n          min=\"100\"\n          max=\"9999999\"\n          class=\"w3-input\"\n        />\n        <input\n          formControlName=\"customFieldName\"\n          placeholder=\"custom column name\"\n          class=\"w3-input\"\n        />\n        <input\n          formControlName=\"customFieldValue\"\n          placeholder=\"custom column value\"\n          class=\"w3-input\"\n        />\n        <button type=\"submit\" class=\"w3-button w3-khaki\">Add</button>\n        <button\n          type=\"submit\"\n          class=\"w3-button w3-pale-yellow w3-right\"\n          (click)=\"isCarAddOpen = false\"\n        >\n          Close\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"w3-modal\" *ngIf=\"isCarEditOpen\">\n  <div class=\"w3-modal-content\">\n    <div class=\"w3-container w3-black\">\n      <h2>Edit existing car</h2>\n    </div>\n    <div class=\"w3-container\">\n      <form [formGroup]=\"carEditForm\" (ngSubmit)=\"submitEditedCar()\">\n        <label><b>Car ID</b></label>\n        <input\n          formControlName=\"id\"\n          placeholder=\"id\"\n          type=\"number\"\n          min=\"1\"\n          max=\"9999999\"\n          class=\"w3-input\"\n        />\n        <label><b>Car model name</b></label>\n        <input formControlName=\"name\" placeholder=\"name\" class=\"w3-input\" />\n        <label><b>Car price</b></label>\n        <input\n          formControlName=\"price\"\n          placeholder=\"price\"\n          type=\"number\"\n          min=\"100\"\n          max=\"9999999\"\n          class=\"w3-input\"\n        />\n        <label><b>Additional column name</b></label>\n        <input\n          formControlName=\"customFieldName\"\n          placeholder=\"custom column name\"\n          class=\"w3-input\"\n        />\n        <label><b>Car additional column value</b></label>\n        <input\n          formControlName=\"customFieldValue\"\n          placeholder=\"custom column value\"\n          class=\"w3-input\"\n        />\n        <button type=\"submit\" class=\"w3-button w3-khaki\">Edit</button>\n        <button\n          type=\"submit\"\n          class=\"w3-button w3-pale-yellow w3-right\"\n          (click)=\"isCarEditOpen = false\"\n        >\n          Close\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"w3-modal\" *ngIf=\"isDeleteFormOpen\">\n  <div class=\"w3-modal-content\">\n    <div class=\"w3-container w3-black\">\n      <h2>Delete whole table column</h2>\n    </div>\n    <div class=\"w3-container\">\n      <p>\n        If you proceed - whole column will be deleted\n      </p>\n      <button class=\"w3-button w3-khaki\" (click)=\"deleteColumn()\">\n        Proceed\n      </button>\n      <button\n        class=\"w3-button w3-pale-yellow w3-right\"\n        (click)=\"isDeleteFormOpen = false\"\n      >\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/table/components/table/table.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/table/components/table/table.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/table/components/table/table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/table/components/table/table.component.ts ***!
  \***********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_table_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/table/table.service */ "./src/app/table/services/table/table.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_models_car_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/car.model */ "./src/app/core/models/car.model.ts");
/* harmony import */ var src_app_core_models_car_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/models/car-data.model */ "./src/app/core/models/car-data.model.ts");
/* harmony import */ var src_app_core_models_abstract_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/models/abstract.model */ "./src/app/core/models/abstract.model.ts");







var TableComponent = /** @class */ (function () {
    function TableComponent(tableService, formBuilder) {
        this.tableService = tableService;
        this.formBuilder = formBuilder;
        this.carData = new src_app_core_models_car_data_model__WEBPACK_IMPORTED_MODULE_5__["CarData"]();
        this.customField = new src_app_core_models_abstract_model__WEBPACK_IMPORTED_MODULE_6__["AbstractModel"]();
        this.car = new src_app_core_models_car_model__WEBPACK_IMPORTED_MODULE_4__["Car"](this.carData, this.customField);
        this.headers = [];
        this.isDeleteFormOpen = false;
        this.isSortFormOpen = false;
        this.isCarAddOpen = false;
        this.isCarEditOpen = false;
        this.currentEditing = null;
        this.headers = Object.keys(this.carData);
        this.getCarsData();
        this.carAddForm = this.createFormGroup();
        this.carEditForm = this.createFormGroup();
        this.sortForm = this.formBuilder.group({
            sortBy: [null],
            sortType: [null]
        });
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.getCarsData = function () {
        var _this = this;
        this.tableService.getTableData()
            .subscribe(function (carsArray) {
            _this.cars = carsArray;
            _this.requiredFieldsCount = _this.headers.length;
        });
    };
    TableComponent.prototype.createFormGroup = function () {
        return this.formBuilder.group({
            price: [this.car.carData.price, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: [this.car.carData.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            id: [this.car.carData.id],
            customFieldName: [this.car.customField.customFieldName],
            customFieldValue: [this.car.customField.customFieldValue]
        });
    };
    TableComponent.prototype.addCar = function () {
        if (this.carAddForm.valid) {
            var form = this.carAddForm.value;
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
    };
    TableComponent.prototype.deleteCar = function (car) {
        var index = this.cars.cars.indexOf(car);
        if (index !== -1) {
            this.cars.cars.splice(index, 1);
        }
    };
    TableComponent.prototype.editCar = function (car) {
        this.isCarAddOpen = false;
        var currenCarIndex = this.cars.cars.indexOf(car);
        if (currenCarIndex === this.currentEditingCarIndex) {
            this.isCarEditOpen = !this.isCarEditOpen;
        }
        else if (currenCarIndex !== this.currentEditingCarIndex) {
            this.isCarEditOpen = true;
        }
        this.currentEditingCarIndex = currenCarIndex;
        this.currentEditing = car;
        var customFields = {
            customFieldName: null, customFieldValue: null
        };
        if (this.currentEditing.customField) {
            customFields.customFieldName = this.currentEditing.customField.customFieldName;
            customFields.customFieldValue = this.currentEditing.customField.customFieldValue;
        }
        else {
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
    };
    TableComponent.prototype.submitEditedCar = function () {
        var form = this.carEditForm.value;
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
    };
    TableComponent.prototype.deleteColumn = function () {
        this.cars.cars.forEach(function (car) {
            if (car.customField) {
                car.customField.customFieldName = null;
                car.customField.customFieldValue = null;
            }
        });
        this.headers.pop();
        this.isDeleteFormOpen = false;
    };
    TableComponent.prototype.sortDataByColumn = function () {
        var form = this.sortForm.value;
        var column = form.sortBy;
        var type = form.sortType;
        if (column === 'name') {
            if (type === 'ascending') {
                this.cars.cars.sort(function (a, b) {
                    if (a.carData.name < b.carData.name) {
                        return -1;
                    }
                    if (a.carData.name > b.carData.name) {
                        return 1;
                    }
                    return 0;
                });
            }
            else {
                this.cars.cars.sort(function (a, b) {
                    if (a.carData.name < b.carData.name) {
                        return 1;
                    }
                    if (a.carData.name > b.carData.name) {
                        return -1;
                    }
                    return 0;
                });
            }
        }
        if (column === 'id') {
            if (type === 'ascending') {
                this.cars.cars.sort(function (a, b) {
                    return a.carData.id - b.carData.id;
                });
            }
            else {
                this.cars.cars.sort(function (a, b) {
                    return b.carData.id - a.carData.id;
                });
            }
        }
        if (column === 'price') {
            if (type === 'ascending') {
                this.cars.cars.sort(function (a, b) {
                    return a.carData.price - b.carData.price;
                });
            }
            else {
                this.cars.cars.sort(function (a, b) {
                    return b.carData.price - a.carData.price;
                });
            }
        }
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/components/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_table_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/table/services/table/table.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/table/services/table/table.service.ts ***!
  \*******************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TableService = /** @class */ (function () {
    function TableService(http) {
        this.http = http;
    }
    TableService.prototype.getTableData = function () {
        return this.http.get('assets/data.json');
    };
    TableService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "./src/app/table/table-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/table/table-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRoutingModule", function() { return TableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/table/components/table/table.component.ts");




var routes = [
    { path: '', component: _components_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"] }
];
var TableRoutingModule = /** @class */ (function () {
    function TableRoutingModule() {
    }
    TableRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TableRoutingModule);
    return TableRoutingModule;
}());



/***/ }),

/***/ "./src/app/table/table.module.ts":
/*!***************************************!*\
  !*** ./src/app/table/table.module.ts ***!
  \***************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-routing.module */ "./src/app/table/table-routing.module.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/table/components/table/table.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_table_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/table/table.service */ "./src/app/table/services/table/table.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _table_routing_module__WEBPACK_IMPORTED_MODULE_3__["TableRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [_services_table_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"]]
        })
    ], TableModule);
    return TableModule;
}());



/***/ })

}]);
//# sourceMappingURL=table-table-module.js.map