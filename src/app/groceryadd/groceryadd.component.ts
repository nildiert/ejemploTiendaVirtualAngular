
import { Component, OnInit } from '@angular/core';
import { Grocery } from './grocery.model'
import { CommonService } from '../services/common.service';

@Component({
    selector: 'grocery-add',
    templateUrl: './groceryadd.component.html',

})
export class GroceryAddComponent implements OnInit {

    private groceryItem


    // constructor(private commonService:CommonService) {
    constructor(private commonService:CommonService) {
    }

    addGrocery(){
        // Añadimos el item a la tienda
        this.commonService.addGrocery(this.groceryItem)   
        this.groceryItem = ""
    }

    ngOnInit() {

    }
}

