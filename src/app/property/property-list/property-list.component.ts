import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.Interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private route:ActivatedRoute, private houseingService:HousingService) { }

  SellRent=1;//buy default
  properties:Array<IProperty>;

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;//set rent when its value
    }
    this.houseingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
        console.log(data);

      },
      error=>{
        console.log('error...')
      }
    );
  }

}
