import { Component, OnInit } from '@angular/core';
import { KeySizeService } from './key-size.service';

@Component({
  selector: 'app-key-size',
  templateUrl: './key-size.component.html',
  styleUrls: ['./key-size.component.scss']
})
export class KeySizeComponent implements OnInit {

  constructor(private keySizeService: KeySizeService) { }

  ngOnInit() {
  }

  onValueChange(value: number) {
    this.keySizeService.emitKeySize(value);
  }

}
