import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSlider } from '@angular/material';
import { CryptoService } from '../crypto.service';
import { KeyService } from '../key-size/key.service';
import { TextInputService } from '../text-input/text-input.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {

  private currentText: string;
  public key = '';

  constructor(private textInputService: TextInputService,
              private crypto: CryptoService,
              private keyService: KeyService) { }

  ngOnInit() {
    // this.textInputService.textEvent().subscribe((text: string) => {
    //   this.currentText = text;
    // });

    // this.key.valueChanges.subscribe((key: string) => {
    //   console.log('key: ', key);
    //   const keyLenght = key.length;
    //   const keyStriped = key.replace(/\n/g, '').replace(/\s/g, '');
    //   this.keyService.emitKeySize(keyLenght);
    //   this.keyService.emitKeyValue(keyStriped);
    // };
  }

  onValueChange(index: any) {
    console.log('number: ', index);
    this.key = this.textInputService.mapIndexToChar(index.value - 1);
    this.keyService.emitKeyValue(index.value);
    const decryptedText = this.crypto.affineDecryption(this.currentText, 1, index.value);
    this.textInputService.emitLetterFrequency(decryptedText);
  }

}
