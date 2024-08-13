import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { XssVulnerableComponent } from './xss-vulnerable/xss-vulnerable.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    XssVulnerableComponent // Import the standalone component directly here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
