import { Component, OnInit, Input } from '@angular/core';
import { SpacexService } from './spacex.service';

@Component({
  selector: 'app-spacex-programs',
  templateUrl: './spacex-programs.component.html',
  styleUrls: ['./spacex-programs.component.css']
})
export class SpacexProgramsComponent implements OnInit {

  constructor(private spx : SpacexService) { }
  spaceDetails:any;
  selectedyear:string;
  selectedlaunch:string;
  selectedland:string;
  ngOnInit(): void {
    this.spx.getSpacexDetails("","","").subscribe((res:any)=>{
      this.spaceDetails = res;
    })
  }

  getfilterValue(val,param?){
    if(!param){
       this.selectedyear = "&launch_year="+parseInt(val);
    }
    if(param == "launch_success"){
        this.selectedlaunch = "&launch_success="+val;
    }
    if(param == "launch_land"){
      this.selectedland = "&land_success="+val;
    }
    this.spx.getSpacexDetails(this.selectedyear,this.selectedlaunch,this.selectedland).subscribe((res:any)=>{
      this.spaceDetails = res;
    })  
  }

}
