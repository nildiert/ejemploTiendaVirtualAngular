
import { Component, OnInit } from '@angular/core';
import { Grocery } from '../groceryadd/grocery.model';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'grocery-list',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GroceryListComponent implements OnInit {

  private groceryList:Grocery[]
    constructor(private commonService:CommonService){

    }

    ngOnInit(){
      // Traemos los datos del servicio y los añadimos a la tienda de comestibles
        this.commonService.add_subject.subscribe(response =>{
          this.groceryList = this.commonService.groceryList
        })
    }
}