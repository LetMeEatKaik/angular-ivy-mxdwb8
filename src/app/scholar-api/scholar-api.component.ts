import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-scholar-api',
  templateUrl: './scholar-api.component.html',
  styleUrls: ['./scholar-api.component.scss']
})


// old
// export class ScholarAPIComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

export class ScholarAPIComponent {
   title = 'image-gallery';
   public data:any = []
   constructor(private http: HttpClient) {
     
   }
  
   getData(){
     const url ='https://api.dp.la/v2/items?q=probability&api_key=6c9699ad4a33f523c115b0e36789e432'
     this.http.get(url).subscribe((res)=>{
      this.data = res;
      this.data = this.data.docs;
      console.log("the res is ", res)
      console.log("this is the data ", this.data)
     })
   }

   
}
