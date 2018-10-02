import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeySizeService {

  private keySize: Subject<number> = new Subject<number>();

  constructor() { }

  public emitKeySize(value: any) {
    this.keySize.next(value.value);
  }

  public keySizeEvent(): Observable<number> {
    return this.keySize.asObservable();
  }
}
