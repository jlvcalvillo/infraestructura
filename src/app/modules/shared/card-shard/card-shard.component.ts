import { Component, OnInit, Input } from '@angular/core';
import { CardShard } from 'src/app/models/card-shard';

@Component({
  selector: 'app-card-shard',
  templateUrl: './card-shard.component.html',
  styleUrls: ['./card-shard.component.css']
})
export class CardShardComponent implements OnInit {

  @Input()
  cardShard:CardShard;

  constructor() {}

  ngOnInit() {
  }

}
