import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { CryptoService } from '../crypto.service';
import { KeyService } from '../key-size/key.service';
import { TextInputService } from './text-input.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  private currentText: string;
  textInput = new FormControl('');

  constructor(private textService: TextInputService,
              private keyService: KeyService,
              private crypto: CryptoService) { }

  ngOnInit() {
    this.textInput.valueChanges.subscribe((value: string) => {
      this.currentText = value.trim().replace(/\n/g, '');
      this.textService.emitText(value);
      this.textService.emitLetterFrequency(value);
    });

    this.keyService.keyValueEvent().subscribe(() => {
      this.update();
    });
  }

  private update() {
    this.textService.emitText(this.currentText);
    this.textService.emitLetterFrequency(this.currentText);
    this.crypto.emitEncryptedText(this.currentText);
  }
}
