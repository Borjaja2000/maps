import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDGxG1QiMAEx35ibDVO9igJTgw10ic7m0c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
