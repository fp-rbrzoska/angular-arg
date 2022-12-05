import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTestComponent } from './my-test/my-test.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizedAccessComponent } from './unauthorized-access/unauthorized-access.component';
import { MyTestChildComponent } from './my-test-child/my-test-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    UnauthorizedAccessComponent,
    MyTestChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
