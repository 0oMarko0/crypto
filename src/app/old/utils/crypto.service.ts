import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TextInputService } from '../text-input/text-input.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  public _encryptedText: Subject<string> = new Subject<string>();

  public mod = (x, n) => (x % n + n) % n;

  constructor(private textService: TextInputService) { }

  public emitEncryptedText(text: string): void {
    this._encryptedText.next(text.toLowerCase().trim());
  }

  public ecryptedTextEvent(): Observable<string> {
    return this._encryptedText.asObservable();
  }

  public affineEncryption(text: string, key: number, offset: number) {
    const encryptedText: string[] = [];
    const textArray = text.split('');
    const alphabet = this.textService.alphabet();

    for (let i = 0; i < textArray.length; i++) {
      const textLetterIndex = this.textService.mapCharToIndex(textArray[i]);
      const substitutionLetterIndex = this.affineCypher(textLetterIndex, key, offset);
      encryptedText.push(alphabet[substitutionLetterIndex]);
    }

    return encryptedText.join('');
  }

  public affineDecryption(encryptedText: string, key: number, offset: number) {
    const decryptionKey = this.keyInverse(key);
    const encryptedTextArray = encryptedText.split('');
    const clearText: string [] = [];
    const alphabet = this.textService.alphabet();

    if (this.isTheKeyInversible(key)) {
      for (let i = 0; i < encryptedTextArray.length; i++) {
        const textLetterIndex = this.textService.mapCharToIndex(encryptedTextArray[i]);
        const substitutionLetterIndex = this.affineDecryptionCypher(textLetterIndex, decryptionKey, offset);
        clearText.push(alphabet[substitutionLetterIndex]);
      }
    } else {
      console.warn('Key not valid');
    }

    return clearText.join('');
  }

  indexOfCoincidence(letter: number[], text: string, decimals: number) {
    let IC = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const numberOfLetter = letter.length > 0 ? letter.reduce(reducer) : 0;
    letter.forEach((letterCount) => {
        IC += ((letterCount / numberOfLetter) * ((letterCount - 1) / (numberOfLetter - 1)));
    });

    return IC;
  }

  private affineCypher(letterIndex: number, key: number, offset: number) {
    return this.mod((key * letterIndex + offset), 26);
  }

  private affineDecryptionCypher(letterIndex: number, inversedKey: number, offset: number) {
    return this.mod((letterIndex - offset) * inversedKey, 26);
  }

  private keyInverse(key: number) {
    return this.mod(Math.pow(key, 11), 26);
  }

  private isTheKeyInversible(key: number) {
    return this.pgcd(key, 26) === 1;
  }

  private pgcd(a: number , b: number) {
    if (b === 0) {
      return a;
    } else {
      const r = this.mod(a, b);
      return this.pgcd(b, r);
    }
  }
}
