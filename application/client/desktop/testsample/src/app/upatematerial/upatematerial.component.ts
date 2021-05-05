import { Component, OnInit } from '@angular/core';
import { UpatematerialService } from './upatematerial.service';

@Component({
  selector: 'app-upatematerial',
  templateUrl: './upatematerial.component.html',
  styleUrls: ['./upatematerial.component.scss'],
})

export class UpatematerialComponent implements OnInit {
    public ticket = {
        name: '',
        description: '',
        groups: '',
        severity: '',
        types: '',
    }

    constructor (
        private upatematerialService: UpatematerialService,
    ) { }

    ngOnInit() {
    }
    GpUpdate() {
        this.upatematerialService.GpUpdate(this.ticket).subscribe(data => {
            this.ticket.name = ''
 	 	this.ticket.description = ''
 	 	this.ticket.groups = ''
 	 	this.ticket.severity = ''
 	 	this.ticket.types = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}