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
      shard2:56,
      shard3:76,
      shard4:86,
      shard5:96
    },
    {
      name:'Shard dos',
      shard1:3,
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
