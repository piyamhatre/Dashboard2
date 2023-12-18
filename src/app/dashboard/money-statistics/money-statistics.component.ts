// Import necessary modules from Angular and Highcharts
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

// Import DataServiceService for fetching data
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-money-statistics',
  templateUrl: './money-statistics.component.html',
  styleUrls: ['./money-statistics.component.scss']
})
export class MoneyStatisticsComponent implements OnInit {

  // Initialize variables for data and Highcharts options
  statisticData: any;
  chartOptions: any;
  Highcharts: typeof Highcharts = Highcharts;

  // Inject DataServiceService in the constructor
  constructor(private serviceData: DataServiceService) { }

  ngOnInit(): void {
    // Fetch data from the service
    this.statisticData = this.serviceData.responseData['money_statistics'];

    // Initialize and render the bar chart
    this.barChart();
  }

  // Function to create the bar chart using Highcharts
  barChart() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: null
      },
      xAxis: {
        lineWidth: 0,
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
      },
      yAxis: {
        min: 0,
        title: {
          text: null
        },
        labels: {
          // Format y-axis labels to display values in thousands with '$'
          formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
            if (typeof this.value === 'number') {
              return '$' + (this.value / 1000) + 'k';
            }
            return this.value;
          }
        }
      },
      tooltip: {
        // Format tooltip to display data in a table
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>${point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        // Series for Income data
        name: 'Income',
        color: '#8fa7a9',
        data: [12349.9, 3471.5, 36424.93, 34850.18, 27071.67, 24188.03, 30895.83, 26824.87, 23216.4, 21329.79, 40995.6]
      }, {
        // Series for Investment data
        name: 'Investment',
        color: '#8385ae',
        data: [40995.6, 24188.03, 3471.5, 30895.83, 12349.9, 23216.4, 36424.93, 46824.87, 36329.79, 24850.18, 27071.67]
      }, {
        // Series for Expense data
        name: 'Expense',
        color: '#585d82',
        data: [30995.6, 34188.03, 43471.5, 40895.83, 22349.9, 34216.4, 46424.93, 26824.87, 21329.79, 34850.18, 27071.67]
      }]
    };
  }

}
