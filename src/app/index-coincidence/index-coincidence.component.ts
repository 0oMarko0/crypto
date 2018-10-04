import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { TextInputService } from '../text-input/text-input.service';

@Component({
  selector: 'app-index-coincidence',
  templateUrl: './index-coincidence.component.html',
  styleUrls: ['./index-coincidence.component.scss']
})
export class IndexCoincidenceComponent implements OnInit {
  public alphabet: string[];
  public letterCount: number[];

  constructor(private textInputService: TextInputService) { }

  ngOnInit() {
    this.alphabet = this.textInputService.alphabet();
    this.textInputService.textEvent().subscribe((text) => {
      this.letterCount = this.textInputService.letterCountArray(text);
    });
  }

}
