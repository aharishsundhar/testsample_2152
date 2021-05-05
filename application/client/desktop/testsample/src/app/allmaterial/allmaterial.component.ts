import { Component, OnInit } from '@angular/core';
import { AllmaterialService } from './allmaterial.service';

@Component({
  selector: 'app-allmaterial',
  templateUrl: './allmaterial.component.html',
  styleUrls: ['./allmaterial.component.scss'],
})

export class AllmaterialComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Description', field: 'description'  },{ headerName: 'Groups', field: 'groups'  },{ headerName: 'Types', field: 'types'  },{ headerName: 'Severity', field: 'severity'  },];
    public ticket = {
        name: '',
        description: '',
        groups: '',
        severity: '',
        types: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private allmaterialService: AllmaterialService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.allmaterialService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}