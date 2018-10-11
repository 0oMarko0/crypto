import { Component, OnInit } from '@angular/core';
import { KeyService } from './key.service';

@Component({
  selector: 'app-key-size',
  templateUrl: './key-size.component.html',
  styleUrls: ['./key-size.component.scss']
})
export class KeySizeComponent implements OnInit {

  constructor(private keySizeService: KeyService) { }

  ngOnInit() {
  }

  onValueChange(value: any) {
    this.keySizeService.emitKeySize(value.value);
  }

}
