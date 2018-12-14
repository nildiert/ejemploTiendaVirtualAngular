import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Grocery } from '../groceryadd/grocery.model';

@Injectable()

export class CommonService{
    public groceryList:Grocery[]
    public add_subject= new Subject<string>()

    constructor(){
        // Creamos el arreglo para guardar los datos
        this.groceryList = []
    }

    addGrocery(item){
        // Añadimos los nuevos datos al arreglo creado en el constructor
        this.groceryList.push(new Grocery(item, false))
        this.add_subject.next()
    }
}