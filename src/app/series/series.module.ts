import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesComponent } from './series.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SeriesComponent, SeriesListComponent],
  declarations: [SeriesComponent,SeriesListComponent]
})
export class SeriesModule { }
