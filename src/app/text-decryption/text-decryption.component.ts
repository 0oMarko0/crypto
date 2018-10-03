import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';
import { TextInputService } from '../text-input/text-input.service';

@Component({
  selector: 'app-text-decryption',
  templateUrl: './text-decryption.component.html',
  styleUrls: ['./text-decryption.component.scss']
})
export class TextDecryptionComponent implements OnInit {

  public decryptionText: string;

  constructor(private textInputService: TextInputService,
              private crypto: CryptoService) { }

  ngOnInit() {
    this.crypto.ecryptedTextEvent().subscribe((text: string) => {
      this.decryptionText = this.crypto.affineDecryption(text, 1, 3);
    });
  }

}
