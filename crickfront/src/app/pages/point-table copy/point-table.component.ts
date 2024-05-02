import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css',
})
export class PointTableComponent implements OnInit {
  matchName: any;
  pointTable: any;
  pointTableRow:any

  constructor(private route: ActivatedRoute, private _api: ApiService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.matchName = params.get('matchName');
      this.loadTable();
    });
  }
  loadTable() {
    this._api.getPointTable(this.matchName).subscribe({
      next: (data) => {
        this.pointTable = data;
        console.log(this.pointTable);        
        this.pointTableRow=[...this.pointTable[0]]
       
        this.pointTable=this.pointTable.filter((item:any,index:any)=>index>0)
      },
      error: (error) => {
        // Handle error response from the backend
        console.error('Error:', error);
        if (error.status === 400) {
          // Show a message to the user indicating invalid matchName
          alert('Invalid matchName. Please provide a valid one.');
        } else {
          // Handle other types of errors
          alert('An error occurred while fetching data. Please try again later.');
        }
      }
    });
  }
}
