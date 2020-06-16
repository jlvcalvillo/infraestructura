import { Component, OnInit, Input } from '@angular/core';
import { CardStorage } from '../../../models/card-storage';

@Component({
  selector: 'app-card-storage',
  templateUrl: './card-storage.component.html',
  styleUrls: ['./card-storage.component.css']
})
export class CardStorageComponent implements OnInit {

  @Input()
  cardStorage:CardStorage;

  constructor() {
  }

  ngOnInit() {
  }

}
