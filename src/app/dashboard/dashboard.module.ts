import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MyCardComponent } from './my-card/my-card.component';
import { TotalBalanceComponent } from './total-balance/total-balance.component';
import { MoneyStatisticsComponent } from './money-statistics/money-statistics.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule } from '@angular/forms';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    MyCardComponent,
    TotalBalanceComponent,
    MoneyStatisticsComponent,
    TransactionHistoryComponent,
    InitialsPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HighchartsChartModule,
    FormsModule
  ]
})
export class DashboardModule { }
