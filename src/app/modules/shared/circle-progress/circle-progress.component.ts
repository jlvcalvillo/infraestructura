import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css']
})
export class CircleProgressComponent implements OnInit {

  @Input() value:number = 80;
  color:string = '';

  constructor() { }

  ngOnInit() {
    this.color = this.setColor();
  }

  private setColor():string {
    let colorAux = '';
    if (this.value <=100) {
      colorAux = 'C00000';
    }
    if (this.value <= 85) {
      colorAux = 'D16F00';
    }
    if (this.value <= 70) {
      colorAux = '008948';
    }

    return colorAux;
  }

}
