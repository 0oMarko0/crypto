import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { TextInputService } from './text-input.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  private currentText: string;
  textInput = new FormControl('');
  constructor(private textService: TextInputService) { }

  ngOnInit() {
    this.textInput.valueChanges.subscribe((value: string) => {
      this.currentText = value;
      this.textService.emitText(value);
      this.textService.emitLetterFrequency(value);
    });
  }
}
