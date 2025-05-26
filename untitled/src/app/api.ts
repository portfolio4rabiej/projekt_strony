import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VintedService {
  private apiUrl = 'https://pro.svc.vinted.com/api/v1/webhooks';
  private accessKey = 'foo';
  private signingKey = 'bar';

  constructor(private http: HttpClient) {}

  registerWebhook(url: string): Observable<any> {
    const timestamp = Math.floor(Date.now() / 1000);
    const body = {
      event_types: ["CREATE_ITEM_SUCCESS"],
      url: url
    };

    const signingPayload = `${timestamp}.POST./api/v1/webhooks.${this.accessKey}.${JSON.stringify(body)}`;
    const signature = this.generateSignature(signingPayload);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Vpi-Access-Key': this.accessKey,
      'X-Vpi-Hmac-Sha256': `t=${timestamp},v1=${signature}`
    });

    return this.http.post(this.apiUrl, body, { headers });
  }

  private generateSignature(payload: string): string {
    const crypto = require('crypto');
    return crypto.createHmac('sha256', this.signingKey).update(payload).digest('hex');
  }
}
