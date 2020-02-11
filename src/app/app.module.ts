import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ScrollingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
