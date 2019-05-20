import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule, MatInputModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatAutocompleteModule, MatInputModule, MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatAutocompleteModule, MatInputModule, MatNativeDateModule],
})
export class MaterialModule {}
