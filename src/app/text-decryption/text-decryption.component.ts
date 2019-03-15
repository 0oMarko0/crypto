import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../utils/crypto.service';
import { KeyService } from '../key-size/key.service';
import { TextInputService } from '../text-input/text-input.service';

@Component({
  selector: 'app-text-decryption',
  templateUrl: './text-decryption.component.html',
  styleUrls: ['./text-decryption.component.scss']
})
export class TextDecryptionComponent implements OnInit {

  public decryptionText: string;
  private currentEncryptedText = '';
  private currentKey = 3;

  constructor(private textInputService: TextInputService,
              private crypto: CryptoService,
              private keyService: KeyService) { }

  ngOnInit() {
    this.textInputService.textEvent().subscribe((text: string) => {
      this.currentEncryptedText = text;
      this.update();
    });

    this.keyService.keyValueEvent().subscribe((key: number) => {
      this.currentKey = key;
      this.update();
    });
  }

  private update() {
    this.decryptionText = this.crypto.affineDecryption(this.currentEncryptedText, 1, this.currentKey);
  }

}
