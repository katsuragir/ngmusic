import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(
        private http: HttpClient,
    ) { }

    getData(data: any) {
        const params: {[param: string]: string} = {};

        params.term = data;

        return this.http.get<any>('https://itunes.apple.com/search', {params});
    }
}
