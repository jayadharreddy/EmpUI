import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private data = new BehaviorSubject<any>('');

  setData(newData: any[]) {
    this.data.next(newData);
  }

  getData() {
    return this.data.asObservable();
  }
}
