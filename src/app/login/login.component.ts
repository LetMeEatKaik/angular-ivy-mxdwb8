import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { PdfServiceService } from '../pdf-service.service';

// define doc
@Component({
  selector: 'login-section',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [PdfServiceService],
})

// export class
export class LoginComponent {
  constructor(private PdfService: PdfServiceService) {}

  title = 'This is a library!';
  public pdfList: any = [];

  ngOnInit() {
    this.pdfList = this.PdfService.listPDFS();
  }
}
