/** Angular Imports */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mifosx-loan-products',
  templateUrl: './loan-products.component.html',
  styleUrls: ['./loan-products.component.scss']
})
export class LoanProductsComponent implements OnInit {

  loanProductsData: any;
  displayedColumns: string[] = ['name', 'shortName', 'closeDate', 'status'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: { loanProducts: any }) => {
      this.loanProductsData = data.loanProducts;
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.loanProductsData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
