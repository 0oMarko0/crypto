import { Component, OnInit } from '@angular/core';
import { KeyService } from '../key-size/key.service';
import { TextInputService } from '../text-input/text-input.service';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-text-encryption',
  templateUrl: './text-encryption.component.html',
  styleUrls: ['./text-encryption.component.scss']
})
export class TextEncryptionComponent implements OnInit {

  public encryptedText: string;
  public encryptions = ['Viginere', 'Affine'];
  public panelOpenState = false;
  private currentKey = 3;
  private currentText = '';

  constructor(private textInputService: TextInputService,
              private crypto: CryptoService,
              private keyService: KeyService) { }

  ngOnInit() {
    this.textInputService.textEvent().subscribe((text: string) => {
      this.currentText = text;
      this.update();
    });

    this.keyService.keyValueEvent().subscribe((key: number) => {
      this.currentKey = key;
      this.update();
    });
  }

  private update() {
    this.encryptedText = this.crypto.affineEncryption(this.currentText, 1, this.currentKey);
    this.crypto.emitEncryptedText(this.encryptedText);
  }

}
