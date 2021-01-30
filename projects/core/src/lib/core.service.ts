import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private message = 'Hello from core library';

  readMessage(): string {
    return this.message;
  }
}
