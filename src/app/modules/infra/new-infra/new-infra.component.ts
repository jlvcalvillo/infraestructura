import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

declare var $: any

@Component({
  selector: 'app-new-infra',
  templateUrl: './new-infra.component.html',
  styleUrls: ['./new-infra.component.css']
})
export class NewInfraComponent implements OnInit {

  @Input()
  urlDestiny:string;

  newInfra = new FormGroup({
    name: new FormControl(),
    percent: new FormControl()
  });

  constructor() {
    $(".modal").modal();
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log("form: ", this.newInfra.value);
  }

}
