import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../../services/data-service.service'

@Component({
  selector: 'app-total-balance',
  templateUrl: './total-balance.component.html',
  styleUrls: ['./total-balance.component.scss']
})
export class TotalBalanceComponent implements OnInit {
  
  total_balance:number=0
  payment_done_so_far:number=0
  payment_done_percentage:number=0
  monthly_payment_limit:number=0

  constructor(private serviceData :DataServiceService){}

  ngOnInit(): void {
    this.total_balance= this.serviceData.responseData['balance'].total_balance
    this.payment_done_so_far= this.serviceData.responseData['balance'].payment_done_so_far
    this.payment_done_percentage= this.serviceData.responseData['balance'].payment_done_percentage
    this.monthly_payment_limit= this.serviceData.responseData['balance'].monthly_payment_limit
  }


  
}
