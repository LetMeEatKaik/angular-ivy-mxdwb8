
// what are the requirements
import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from "../pdf-service.service";

// describe the component
@Component({
  selector: 'app-pdf-service-practice',
  templateUrl: './pdf-service-practice.component.html',
  styleUrls: ['./pdf-service-practice.component.scss'],
  providers: [PdfServiceService]
})

// export what is needed
export class PdfServicePracticeComponent implements OnInit {

  constructor(private PdfService: PdfServiceService) {
  }
 
  title = 'This is a study library!';
  public pdfList: any = [];
 
  ngOnInit() {
   this.pdfList = this.PdfService.listPDFS();
  }
}
