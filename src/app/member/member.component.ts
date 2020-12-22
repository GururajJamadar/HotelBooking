import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  p: number = 1;
  memberData: any[]=[];
  filterData: any[]=[];
  guestName: any = "John Smith";
  memberIDs = 12345;

  constructor(private sharedServ : SharedServiceService, private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getBookedDetails();
  }

  filteredMemberData(){
    console.log("bookingsdfdfdfd",this.memberData);
    this.filterData = this.memberData.filter(b=>b.memberId==this.memberIDs);
    console.log("bookings",this.filterData);
  }

getBookedDetails(){
this.httpClient.get<any>("assets/booking.json").subscribe((data=>{
this.memberData = data;
this.filteredMemberData();
}))
}

}
