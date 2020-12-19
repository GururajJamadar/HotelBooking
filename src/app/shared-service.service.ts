import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  hotelDetail: any;

  constructor() { }

  setHotelDetail(hotel : any){
    this.hotelDetail = hotel;
  }
  getHotelDetail(){
    return this.hotelDetail;
  }
}
