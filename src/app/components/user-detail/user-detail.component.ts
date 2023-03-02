import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent  implements OnInit{
  public userID !:number;
  userDetail !:User;
  constructor(public activatedRoute: ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
      this.userID=val['id'];
      this.fetchUserDetails(this.userID);
    })
  }
  fetchUserDetails(userId : number){
    this.api.getRegisteredUserId(userId)
    .subscribe(res=>{
      this.userDetail=res;
    })
  }

}
