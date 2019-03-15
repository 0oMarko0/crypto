import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabGroupService {

  private tabIndex: Subject<number> = new Subject<number>();

  constructor() { }

  public emitTabIndex(value: number) {
    this.tabIndex.next(value);
  }

  public tabIndexEvent(): Observable<number> {
    return this.tabIndex.asObservable();
  }
}
