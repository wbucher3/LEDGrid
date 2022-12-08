import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { LedControllerService } from './led-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startingColor: number[] = [100, 200, 20];
  ledCount: number[][] = [];

  constructor(private service: LedControllerService) {
    this.fillGrid();
  }

  // creates the initial condition of the led matrix
  fillGrid() {
    for (let i = 0 ; i < 100; i++) {
      this.ledCount[i] = [255, 255, 255];
    }
  }

  // method that will run when the led is clicked
  ledClick(led: any, i: number) {

    // change the color
    // TODO add some way for user to pick color, slider popup?
    led[0] = Math.floor(Math.random() * 255);
    led[1] = Math.floor(Math.random() * 255);
    led[2] = Math.floor(Math.random() * 255);

    // update backend with new color
    this.service.sendLedUpdate(led, i);
  }

  // set the color of the display
  getColors(list: any) {
    return "rgb(" + list[0] + "," + list[1] + "," + list[2] + ")"
  }
}
