import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  private keySize: Subject<number> = new Subject<number>();
  private keyValue: Subject<number> = new Subject<number>();

  constructor() { }

  public emitKeySize(value: number) {
    console.log('value');
    this.keySize.next(value);
  }

  public keySizeEvent(): Observable<number> {
    return this.keySize.asObservable();
  }

  public emitKeyValue(value: number) {
    this.keyValue.next(value);
  }

  public keyValueEvent(): Observable<number> {
    return this.keyValue.asObservable();
  }
}
