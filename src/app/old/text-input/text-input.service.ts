import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface LetterCount {
  letter: string;
  count: number;
  index: number;
}

@Injectable({
  providedIn: 'root'
})
export class TextInputService {

  private _textInput = new Subject<string>();
  private _letterFrequency = new Subject<number[]>();
  private _transpose = new Subject<string[][]>();

  private _alphabet: string[] =
    ['a', 'b', 'c', 'd', 'e', 'f', 'g',
      'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u',
      'v', 'w', 'x' , 'y', 'z'];

  constructor() { }

  public alphabet() {
    return this._alphabet;
  }

  public emitText(text: string): void {
    this._textInput.next(text.toLowerCase().trim());
  }

  public textEvent(): Observable<string> {
    return this._textInput.asObservable();
  }

  public letterFrequencyEvent(): Observable<number[]> {
    return this._letterFrequency.asObservable();
  }

  public emitLetterFrequency(text: string): void {
    this._letterFrequency.next(this.letterFrequency(text.toLowerCase()));
  }

  public letterCountArray(text) {
    const letterCount = [];
    this.letterCount(text).forEach((letter) => {
      letterCount[letter.index] = letter.count;
    });
    return letterCount;
  }

  public letterFrequency(text: string): number[] {
    const textLength = text.length;
    const frequency = [];
    this.letterCount(text).forEach((item) => {
       frequency[item.index] = this.frequency(item.count, textLength, 3);
    });

    return frequency;
  }

  private frequency(letterCount: number, textLength: number, decimal: number) {
    const precision = (Math.pow(10, decimal));
    const rawFrequency = ( letterCount / textLength * 100 );
    return Math.round( rawFrequency * precision ) / precision;
  }

  private letterCount(text: string): LetterCount[] {
    const textArray = text.split('');
    const letterDictoanory = {};
    let index = textArray.length;
    let currentLetter;

    while (index--) {
      currentLetter = textArray[index];
      if (this._alphabet.includes(currentLetter)) {
        letterDictoanory[currentLetter] = (letterDictoanory[currentLetter] || 0) + 1;
      }
    }

    const keys = Object.keys(letterDictoanory);
    keys.sort();

    return keys.map((item) => {
      return {
        letter: item,
        count: letterDictoanory[item],
        index: this.mapCharToIndex(item)
      };
    });
  }

  public mapCharToIndex(char: String): number {
    return this._alphabet.indexOf(char.toLowerCase());
  }

  public mapIndexToChar(index: number): string {
    return this._alphabet[index % 26];
  }

  public blocOfText(text: string, keySize: number) {
    const textArray: string[] = text.trim().split('');
    const matrix = [[]];
    let row = [];
    for (let offset = 0; offset < keySize; offset++) {
      for (let i = 0; i < text.length; i++) {
        row.push(textArray[(i * keySize) + offset]);
      }
      matrix.push(row);
      row = [];
    }

    return matrix;
  }
}
