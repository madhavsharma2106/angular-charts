import { Injectable } from '@angular/core';
import { Chart } from "chart.js";

@Injectable()
export class ChartService {

  constructor() { }

  createBarChart(canvasId, dataSets, lables) {
    return new Chart(canvasId, {
      type: 'bar',
      data: {
        labels: lables,
        datasets: dataSets
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }
}