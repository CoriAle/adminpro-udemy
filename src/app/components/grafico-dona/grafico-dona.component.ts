import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @Input('labels') doughnutChartLabels:string[] = [];
  @Input('data') doughnutChartData:number[] = [];
  @Input() leyenda:string = "Gráfico"
  @Input('type') doughnutChartType:string = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}