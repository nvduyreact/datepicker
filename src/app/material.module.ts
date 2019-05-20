import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, Sort} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material';

// import {MatAutocompleteModule, MatInputModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatPaginatorModule, MatSortModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatPaginatorModule, MatSortModule],
})
export class MaterialModule {}
