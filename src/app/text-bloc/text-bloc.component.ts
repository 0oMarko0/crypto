import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { KeySizeService } from '../key-size/key-size.service';
import { TabGroupService } from '../tab-group/tab-group.service';
import { TextInputService } from '../text-input/text-input.service';

@Component({
  selector: 'app-text-bloc',
  templateUrl: './text-bloc.component.html',
  styleUrls: ['./text-bloc.component.scss']
})
export class TextBlocComponent implements OnInit {
  private currentText: string;
  private keySize = 1;

  public panelOpenState = false;
  public coincidenceIndex = 0.067;
  public blocs: string[][] = [[]];

  constructor(private keySizeService: KeySizeService,
              private textInputService: TextInputService,
              private tabGroupService: TabGroupService,
              private crypto: CryptoService) { }

  ngOnInit() {
    this.textInputService.textEvent().subscribe((text: string) => {
      this.currentText = text;
      this.updateBloc();
    });

    this.keySizeService.keySizeEvent().subscribe((size: number) => {
      this.keySize = size;
      this.updateBloc();
    });
  }

  onClickSendText(bloc: String[]) {
    this.textInputService.emitLetterFrequency(bloc.join(''));
    this.tabGroupService.emitTabIndex(0);
  }

  renderBloc(bloc: string[], truncation: number): string {
    const blocSize = bloc.length;

    if (blocSize < truncation) {
      return bloc.join('');
    } else {
      return bloc.slice(0, truncation).join('') + ' ... ';
    }
  }

  updateBloc() {
    const matrix = this.textInputService.convertTextToMatrix(this.currentText, this.keySize);
    this.blocs = this.textInputService.transpose(matrix);
  }

  coincidenceIndexForBloc(text: string) {
    return this.crypto.indexOfCoincidence(this.textInputService.letterCountArray(text), 5);
  }
}
