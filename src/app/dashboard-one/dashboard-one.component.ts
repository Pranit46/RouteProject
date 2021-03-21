import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.css']
})

export class DashboardOneComponent implements OnInit {
  
  p: number = 1;
  data: any;
  
  constructor(private dataService: DataService) { 
   
  }
  dataList: any;
  
  
  ngOnInit() {
   /*this.getPage(this.p)*/
   this.dataService.getContacts().subscribe(data =>{
     console.log(data);
     
    this.dataList = data;
   })
}

/*  async getPage(page: number){
    this.data = await this.dataService.getContacts(page);
    this.dataList = this.data.data
}
*/



 

}
