import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TornService {
    constructor(private http: HttpClient) {}

    getUserSearchInfo(searchUser) {
        return this.http.get(
            'https://api.torn.com/user/' + searchUser + '?selections=&key=EBzTcSYCNgO5I3Id'
        );
    }
}
