import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {
  public northwindEmployees: any = null;
  public northwindCustomers: any = null;
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.financialService.getData('Box Office Revenue').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
