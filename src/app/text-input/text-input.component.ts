import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

 textInput = new FormControl('');
 @Output() frequencyEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.textInput.valueChanges.subscribe((value) => {
      this.frequency(value);
    });
  }

  frequency(text: String) {
    const textArray = text.split('');
    const textLength = textArray.length;
    const frequency = [];
    let iterator = 0;
    let currentChar = textArray[iterator];
    let currentOccurence = 0;

    while (textArray.length > 0) {
      if (iterator === textArray.length) {
        frequency.push({'label': currentChar, 'value': (currentOccurence / textLength) * 100});
        iterator = 0;
        currentChar = textArray[iterator];
        currentOccurence = 0;
      } // if we are at the end of the string add the curent letter and current occurence
      if (textArray[iterator] === currentChar) {
        currentOccurence++;
        textArray.splice(iterator, 1);
      } else {
        iterator++;
      }
    }

     const resultArray = _.orderBy(frequency, 'label', 'asc')
                          .map((item) => {
                            return item.value;
                          });

    this.frequencyEvent.emit(resultArray);
    return resultArray;
  }

}
