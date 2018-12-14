import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroceryAddComponent } from './groceryadd/groceryadd.component';
import { GroceryListComponent } from './grocerylist/grocerylist.component';
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    GroceryAddComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
