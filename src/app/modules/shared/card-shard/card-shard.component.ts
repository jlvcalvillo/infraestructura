import { Component, OnInit } from '@angular/core';
import { CardShard } from 'src/app/models/card-shard';

@Component({
  selector: 'app-card-shard',
  templateUrl: './card-shard.component.html',
  styleUrls: ['./card-shard.component.css']
})
export class CardShardComponent implements OnInit {

  cardShard:CardShard;

  constructor() {
    this.cardShard = {
      name:'Shard uno',
      shard1:20,
      shard2:40,
      shard3:60,
      shard4:80,
      shard5:100
    };
  }

  ngOnInit() {
  }

}
