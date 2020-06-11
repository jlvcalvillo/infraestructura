import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @Input() value: number = 0;
  color: string = '';

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
