// the blotted out code is to use button
// import { Component } from '@angular/core';
// import { HttpClient } from "@angular/common/http";

// @Component({
//  selector: 'app-root',
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//  title = 'image-gallery';
//  public data:any = []
//  constructor(private http: HttpClient) {
   
//  }

//  getData(){
//    const url ='https://jsonplaceholder.typicode.com/photos?albumId=1'
//    this.http.get(url).subscribe((res)=>{
//      this.data = res
//      console.log(this.data)
//    })
//  }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// describe the component
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
})

// export correct compoenent
export class AppComponent implements OnInit {
 title = 'image-gallery';
 public data: any = []
 constructor(private http: HttpClient) {
  
 }
// get the data from API
 getData(){
  //  const url ='https://jsonplaceholder.typicode.com/photos?albumId=1'
  const url ='http://198.211.102.195:8085/api/texts'
   this.http.get(url).subscribe((res)=>{
     this.data = res
     console.log(this.data)

   })
 }

 ngOnInit() {
   this.getData()
 }
}