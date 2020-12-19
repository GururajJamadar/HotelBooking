import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  hotelDetail: any;
  bookings: any[] = [];
  filterData: any[] = [];

  lat: number = 26.765844;
  lng: number = 83.364944;


  constructor( private sharedSer:SharedServiceService, private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getHotelDetails();
    this.getAllBookingDetails();
  }

  getHotelDetails(){
    this.hotelDetail = this.sharedSer.getHotelDetail();
    this.lat = this.hotelDetail.location.latitude;
    this.lng = this.hotelDetail.location.longitude;
    console.log(this.hotelDetail);
  }

  filterBookings(){
   
   this.filterData = this.bookings.filter(b=>b.hotel.code==this.hotelDetail.propertyCode);
   console.log("bookings",this.filterData)
  }

  getAllBookingDetails(){
    this.httpClient.get<any>("assets/booking.json").subscribe((data)=>{
    this.bookings = data;
    this.filterBookings();
  });
  }

}
