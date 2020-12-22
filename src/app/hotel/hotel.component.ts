import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  p: number = 1;
  hotelsData: any;
  destinationName = "";

  constructor(private  httpClient: HttpClient,  private hotelSer:SharedServiceService, private router:Router) { }

  ngOnInit(): void {
    this.httpClient.get<any>("assets/hotel.json").subscribe((data)=>
    this.hotelsData = data); 
  }

  hotelDetail(hotel: any){
    this.hotelSer.setHotelDetail(hotel);
    this.router.navigate(['./booking']);
  
    }

}
