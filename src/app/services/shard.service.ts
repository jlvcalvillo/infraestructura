import { Injectable } from '@angular/core';
import { CardShard } from '../models/card-shard';

@Injectable({
  providedIn: 'root'
})
export class ShardService {

  shards:CardShard[] = [
    {
      name:'Shard uno',
      shard1:16,
      shard2:16,
      shard3:16,
      shard4:16,
      shard5:16
    },
    {
      name:'Shard dos',
      shard1:53,
      shard2:53,
      shard3:53,
      shard4:53,
      shard5:53
    },
    {
      name:'Shard tres',
      shard1:43,
      shard2:43,
      shard3:43,
      shard4:43,
      shard5:43
    }
  ]

  constructor() { }

  getShards() {
    return this.shards;
  }
}
