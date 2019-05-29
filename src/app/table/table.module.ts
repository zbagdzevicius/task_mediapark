import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableService } from './services/table/table.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [TableService]
})
export class TableModule { }
