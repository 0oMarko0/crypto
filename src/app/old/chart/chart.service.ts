import { Injectable } from '@angular/core';

class ChartDate {
  data: number[];
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  axisLabel() {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x' , 'y', 'z'];
  }

  dataAssembler(data: number[], label: string): ChartDate {
    return { data, label };
  }

  option() {
    return {
      scaleShowVerticalLines: false,
      responsive: true,
    };
  }

  englishLetterFrequency() {
    const frequency = [8.167, 1.492, 2.782, 4.253, 12.702, 2.228,
      2.015, 6.094, 6.966, 0.153, 0.772, 4.025, 2.406, 6.749, 7.507, 1.929,
      0.095, 5.987, 6.327, 9.056, 2.758, 0.978, 2.360, 0.150, 1.974, 0.074];
    return this.dataAssembler(frequency, 'English frequency');
  }
}
