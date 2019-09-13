import { Component, OnInit } from '@angular/core';
import { Eliquid } from '../../models/eliquid';
import { Level } from '../../models/level';
import { EliquidServices } from '../../services/eliquid.service';
import { LevelServices } from '../../services/level.service';
import { Global } from 'src/app/services/global';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [EliquidServices, LevelServices]
})
export class DetailComponent implements OnInit {
  public eliquid: Eliquid;
  public level: Level;
  public stock: string;
  public url: string;
  public id_eliquid: string;

  constructor(
    private _eliquidService: EliquidServices,
    private _levelService: LevelServices,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let name = params.name;

      this.getEliquid(name);
    });
  }

  getEliquid(name) {
    this._eliquidService.getEliquidByName(name).subscribe(
      res => {
        this.eliquid = res.eliquid;
        for (var i = 0; i < res.eliquid.length; i++) {
          this.id_eliquid = res.eliquid[i]._id;
        }
        this.getLevel(this.id_eliquid);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  getLevel(id) {
    this._levelService.getLevel(id).subscribe(
      res => {
        this.level = res.level;
        console.log(this.level);
      },
      err => {
        console.log('err', err);
      }
    );
  }

  getStock(nicotine) {
    this._levelService.getStock(nicotine).subscribe(
      res => {
        this.stock = res.level;
        console.log(this.stock);
      },
      err => {
        console.log('err', err);
      }
    )
  }
}
