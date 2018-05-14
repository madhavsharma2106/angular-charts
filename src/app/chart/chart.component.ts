import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public chart1 = [];

  public densityData = {
    label: 'Density of Planet (kg/m3)',
    data: [527, 523, 551, 393, 136, 687, 171, 168],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderWidth: 0,
  };

  public densityData2 = {
    label: 'Density of Planet (kg/m3)',
    data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderWidth: 0,
  };
  
  public gravityData = {
    label: 'Gravity of Planet (m/s2)',
    data: [3.7, 8.9, 9.8, 3.7, 23.1, 9.0, 8.7, 11.0],
    backgroundColor: 'rgba(99, 132, 0, 0.6)',
    borderWidth: 0,
  };



  constructor() { }

  ngOnInit() {
    // this.chart1 = new Chart('canvas1',{
    //   type: 'bar',
    //   data:{
    //     labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    //     datasets:[
    //       this.densityData, this.gravityData, this.densityData2
    //     ]
    //   },
    //   options:{
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }]
    //     }
    //   }
    // });

  }



}
