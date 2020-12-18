import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotelsData: any;
  destinationName = "";

  constructor(private  httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>("assets/hotel.json").subscribe((data)=>
    this.hotelsData = data); 
  }

}
