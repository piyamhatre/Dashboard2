// Import necessary modules from Angular
import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  // Define table headings for transaction history
  tableHeadings: any[] = ["Date", "Name", "Status", "Type", "Time", "Amount", "Action"];

  // Initialize arrays for table data, filtered data, and a search term
  tableData: any[] = [];
  filteredData: any[] = [];
  searchTerm: string = '';

  // Initialize modelData and popup properties for modal functionality
  modelData: any = {};
  popup: any;

  // Inject DataServiceService and DatePipe in the constructor
  constructor(private serviceData: DataServiceService, private datePipe: DatePipe) { }

  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Transform raw date data from the service into a more readable format
    this.tableData = this.serviceData.responseData['transactions'].map((item: any) => ({
      id: item.id,
      date: this.datePipe.transform(item.date, 'MMMM d, yyyy'),
      time: this.datePipe.transform(item.date, 'h:mm a'),
      name: item.name,
      status: item.status,
      type: item.type,
      amount: item.amount
    }));

    // Initialize filteredData with the entire tableData initially
    this.filteredData = this.tableData;
  }

  // Function to toggle the modal and set modelData if data is provided
  modal(data: any = {}) {
    if (data) {
      this.modelData.name = data.name;
      this.modelData.type = data.type;
    }
    this.popup = !this.popup;
  }

  // Function to update the filteredData array based on the search term
  updateFilteredData() {
    // Filter tableData based on whether any value includes the search term (case-insensitive)
    this.filteredData = this.tableData.filter(data =>
      Object.values(data).some((value: any) =>
        value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }
}
