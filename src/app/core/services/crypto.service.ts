import { Injectable } from '@angular/core';
import { ENCRYPT_SECRET_KEY } from '@constants/app.constant';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {


  encryptValue(value: string): string {
    const cipherText = CryptoJS.AES.encrypt(value, ENCRYPT_SECRET_KEY);
    return cipherText.toString();
  }

  decryptValue(encryptedString: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedString, ENCRYPT_SECRET_KEY);
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedData;
  }
}
