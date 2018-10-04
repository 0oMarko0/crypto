import { Component, OnInit } from '@angular/core';
import { TextInputService } from '../text-input/text-input.service';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public axisLabel: string[];
  public chartType = 'bar';
  public chartLegend = true;
  public chartData: any[] = [];

  constructor(private textService: TextInputService,
              private chartService: ChartService) {}

  public ngOnInit() {
    this.setChartOption();
    this.loadChartData();
    this.textService.letterFrequencyEvent()
      .subscribe((frequency: number[]) => {
        this.updateChart(frequency);
      });
  }

  private loadChartData() {
    this.chartData.push(this.chartService.englishLetterFrequency());
    this.chartData.push({ data: [], label: 'Letter frequency' });
  }

  private updateChart(data) {
    const clone = JSON.parse(JSON.stringify(this.chartData));
    clone[1].data = data;
    this.chartData = clone;
  }

  private setChartOption() {
    this.options = this.chartService.option();
    this.axisLabel = this.chartService.axisLabel();
  }

}
