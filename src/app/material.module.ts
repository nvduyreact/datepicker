import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatAutocompleteModule, MatInputModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatPaginatorModule ],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatPaginatorModule],
})
export class MaterialModule {}
