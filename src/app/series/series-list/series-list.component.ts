import { Component, OnInit } from '@angular/core';
import { Series} from '../series';
import { SeriesService } from '../series.service';


@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Array<Series> = [];
  prom: number=0;
  constructor(private seriesService: SeriesService) { }
  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
      this.getPromedio();
    });
  }
  getPromedio():void {
    let series = 0;
    let temporadas = 0;
    let promedio = 0;
    for (let serie of this.series){
      temporadas += serie.seasons;
      series++;
    }
    promedio = temporadas/series;
    this.prom =promedio;
  }

  ngOnInit() {
    this.getSeries();

  }

}
