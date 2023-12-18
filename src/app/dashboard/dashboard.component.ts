// Import necessary modules from Angular
import { Component, OnInit } from '@angular/core';

// Import DataServiceService for fetching data
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public serviceData: DataServiceService) { }

  ngOnInit(): void {
    // Call the makeRequest function to fetch data when the component is initialized
    this.makeRequest();
  }

  // Function to make a request to fetch data using the service
  makeRequest() {
    this.serviceData.fetchData().subscribe((data) => {
      this.serviceData.responseData = data;
    });
  }

}
