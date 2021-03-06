import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eliquid } from '../models/eliquid';
import { Global } from './global';
@Injectable()
export class EliquidServices {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    testServices() {
        return 'probando servicio angular';
    }

    /* saveProject(project: Project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'save-project', params, { headers: headers });
    } */

    getEliquids(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'data-eliquids', { headers: headers });
    }

    getEliquidByName(name): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'eliquid/' + name, { headers: headers });
    }

    /* deleteProject(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'delete-project/' + id, { headers: headers });
    }

    editProject(project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'update-project/' + project._id, params, { headers: headers });
    } */
}