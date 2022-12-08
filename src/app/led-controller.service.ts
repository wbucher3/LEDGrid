import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LedControllerService {
  url = 'http://localhost:8080/'

  constructor(private http: HttpClientModule) { }

  sendLedUpdate(ledData: number[], index: number) {
    console.log("Service Called on index of " + index + " with data [" + ledData + "]");
    // TODO 
    // return this.http.get(this.url)
    //   .subscribe((data: any) => {
    //     return data;
    //   });
    
  }
}
