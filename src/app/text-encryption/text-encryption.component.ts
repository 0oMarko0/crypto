import { Component, OnInit } from '@angular/core';
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

  constructor(private textInputService: TextInputService,
              private crypto: CryptoService) { }

  ngOnInit() {
    this.textInputService.textEvent().subscribe((text: string) => {
      this.encryptedText = this.crypto.affineEncryption(text, 1, 3);
      this.crypto.emitEncryptedText(this.encryptedText);
    });
  }

}
