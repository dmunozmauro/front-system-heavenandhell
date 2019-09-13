import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from '../models/level';
import { Global } from './global';
@Injectable()
export class LevelServices {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    testServices() {
        return 'probando servicio angular';
    }

    getLevel(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'level/' + id, { headers: headers });
    }
}