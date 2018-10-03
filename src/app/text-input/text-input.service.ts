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

  public matrixTransposeEvent(): Observable<string[][]> {
    return this._transpose.asObservable();
  }

  public emitMatrixTranspose(text: string, size): void {
    this._transpose.next(this.transpose(this.convertTextToMatrix(text, size)));
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

  public convertTextToMatrix(text: String, rowSize: number): string[][] {
    const textArray = text.split('');
    let row = 0;
    let index = 0;
    const matrix = [[]];

    while (index < text.length) {
      matrix[row] = textArray.splice(0, rowSize);
      row++;
      index += rowSize;
    }

    return matrix;
  }

  public transpose(matrix: string[][]): string[][] {
    const m = matrix.length;       // Matrix Row
    const n = matrix[0].length;   // Matrix col
    const transpose = [];
    let newRow = [];

    for (let col = 0; col < n; col++) {
      for (let row = 0; row < m; row++) {
        if (this._alphabet.includes(matrix[row][col])) {
          newRow.push(matrix[row][col]);
        }
      }
      transpose.push(newRow);
      newRow = [];
    }

    return transpose;
  }
}
