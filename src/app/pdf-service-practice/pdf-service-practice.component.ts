import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from "../pdf-service.service";

@Component({
  selector: 'app-pdf-service-practice',
  templateUrl: './pdf-service-practice.component.html',
  styleUrls: ['./pdf-service-practice.component.scss'],
  providers: [PdfServiceService]
})
export class PdfServicePracticeComponent implements OnInit {

  constructor(private PdfService: PdfServiceService) {
  }
 
  title = 'This is a study library!';
  public pdfList: any = [];
 
  ngOnInit() {
   this.pdfList = this.PdfService.listPDFS();
  }
}
