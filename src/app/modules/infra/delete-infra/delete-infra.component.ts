import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-infra',
  templateUrl: './delete-infra.component.html',
  styleUrls: ['./delete-infra.component.css']
})
export class DeleteInfraComponent implements OnInit {

  @Input()
  item:any;

  constructor() { }

  ngOnInit() {
  }

  deleteInfra() {
    console.log("id infra: ", this.item.id);
  }

}
