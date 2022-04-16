import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// import statements
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
// import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ScholarAPIComponent } from './scholar-api/scholar-api.component';
import { PdfServiceService } from './pdf-service.service';
import { PdfServicePracticeComponent } from './pdf-service-practice/pdf-service-practice.component';

// set up all components in project
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // LoginComponent,
    RegisterComponent,
    ScholarAPIComponent,
    PdfServicePracticeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PdfServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
