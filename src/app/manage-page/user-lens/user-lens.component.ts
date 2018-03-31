import { Component, OnInit, OnChanges } from '@angular/core';
import { UserLensService } from './user-lens.service';
import { ChangeDetectorRef } from '@angular/core';  
@Component({
  selector: 'app-user-lens',
  templateUrl: './user-lens.component.html',
  styleUrls: ['./user-lens.component.css'],
  providers: [UserLensService]
})
export class UserLensComponent implements OnInit{
  private userLens;
  // private selectBook;
  getKeys(item){
    return Object.keys(item);
  }
  giveBack(ele,x){
    let index=ele.indexOf(x);
    let backConfirm=window.confirm("请确定已归还");
    backConfirm&&ele.splice(index,1);
  }
  resumeLen(x,resume){
    let resumeConfirm=window.confirm("请确定要续租");
    resumeConfirm&&(x[2]=resume);    
    this.changeDetectorRef.markForCheck();  
    this.changeDetectorRef.detectChanges();  
  }
  resumeControl(){
    
  }
  constructor(private userLensService:UserLensService,
              private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    let userLens=this.userLensService.getUserLens();
    userLens.subscribe((data)=>{this.userLens=data;});
    // console.log(this.userLens);
  }
}
