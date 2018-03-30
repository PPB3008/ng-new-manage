import { Component, OnInit, OnChanges } from '@angular/core';
import { UserLensService } from './user-lens.service';
@Component({
  selector: 'app-user-lens',
  templateUrl: './user-lens.component.html',
  styleUrls: ['./user-lens.component.css'],
  providers: [UserLensService]
})
export class UserLensComponent implements OnInit{
  private userLens;
  getData() {
    this.userLens.forEach(ele => {
      
    });
  }
  constructor(private userLensService:UserLensService) { }

  ngOnInit() {
    let userLens=this.userLensService.getUserLens();
    userLens.subscribe((data)=>{this.userLens=data;});
    // console.log(this.userLens);
  }
}
