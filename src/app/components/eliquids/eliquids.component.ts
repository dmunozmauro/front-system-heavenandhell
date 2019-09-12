import { Component, OnInit } from '@angular/core';
import { Eliquid } from '../../models/eliquid';
import { EliquidServices } from '../../services/eliquid.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-eliquids',
  templateUrl: './eliquids.component.html',
  styleUrls: ['./eliquids.component.css'],
  providers: [EliquidServices]
})
export class EliquidsComponent implements OnInit {

  public eliquid: Eliquid;
  public url: string;

  constructor(private _eliquidService: EliquidServices) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.getEliquids();
  }

  getEliquids() {
    this._eliquidService.getEliquids().subscribe(
      res => {
        this.eliquid = res.eliquid;
        console.log(this.eliquid);
      }, err => {
        console.log(err);
      }
    );
  }

}
