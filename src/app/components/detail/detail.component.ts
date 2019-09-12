import { Component, OnInit } from '@angular/core';
import { Eliquid } from '../../models/eliquid';
import { EliquidServices } from '../../services/eliquid.service';
import { Global } from 'src/app/services/global';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [EliquidServices]
})
export class DetailComponent implements OnInit {
  public eliquid: Eliquid;
  public url: string;

  public name: string;

  constructor(
    private _eliquidService: EliquidServices,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.url = Global.url;
    this.eliquid = new Eliquid('', '', 0, '', 0, 0);
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let name = params.name;

      this.getEliquid(name);
    });
  }

  getEliquid(name) {
    this._eliquidService.getProject(name).subscribe(
      res => {
        this.eliquid.name = res.eliquid.name;
        console.log(this.eliquid.name);
      },
      err => {
        console.log('err', err);
      }
    );
  }

}
