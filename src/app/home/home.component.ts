import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
 selector: 'app-root',
 templateUrl: 'home.component.html' ,
 styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 title = 'image-gallery';
 public data: any = []
 constructor(private http: HttpClient) {
  
 }



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

// export class HomeComponent {}