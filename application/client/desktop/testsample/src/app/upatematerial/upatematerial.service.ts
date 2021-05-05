import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpatematerialService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(ticket): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/ticket', ticket);
    }
}