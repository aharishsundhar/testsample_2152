import { Component, OnInit } from '@angular/core';
import { AddmaterialService } from './addmaterial.service';

@Component({
  selector: 'app-addmaterial',
  templateUrl: './addmaterial.component.html',
  styleUrls: ['./addmaterial.component.scss'],
})

export class AddmaterialComponent implements OnInit {
    public ticket = {
        name: '',
        description: '',
        groups: '',
        severity: '',
        types: '',
    }

    constructor (
        private addmaterialService: AddmaterialService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addmaterialService.GpCreate(this.ticket).subscribe(data => {
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