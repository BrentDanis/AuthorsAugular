import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
