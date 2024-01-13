import { Component , OnInit } from '@angular/core';
import { ApiservicesService } from '../apiservices.service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private services: ApiservicesService){} 
  categoryList:any= ['all' , 'hosting' , 'ecommerce' , 'finance' , 'course' , 'product' , 'travel'] 
  showallData:any= []
  filterName:any ;
  filterData:any= [] 
  showData:any;
  ngOnInit(): void {
    this.homeData();
  }
  homeData()
  {
    this.services.homeapi().subscribe((result) => {
      console.log(result , 'resdata#')
      if( result.length > 0) 
      {
        this.showallData = result;
        this.showData = true
      }
    })
  }
  onChange(e:any)
  {
    console.log(e.target.value,'categoryvalue');
    this.filterName = e.target.value;
    this.showData = false;
    this.filterData = []
    this.showallData.filter((element:any) => {
      if( this.filterName == 'All')
      {
        this.filterData.push(element)
      }
      else {
        if( element.category == this.filterName.toLowerCase())
      {
        this.filterData.push(element);
      }
      }
    })
    console.log(this.filterData , 'filterData#')
  }
}
