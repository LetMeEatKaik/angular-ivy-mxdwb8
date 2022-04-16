import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// define component
@Component({
  selector: 'app-root',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})

// export the componenet
export class HomeComponent implements OnInit {
  title = 'image-gallery';
  public data: any = [];
  constructor(private http: HttpClient) {}


  // function to getdata from API 
  getData() {
    //  const url ='https://jsonplaceholder.typicode.com/photos?albumId=1'
    const url = 'http://198.211.102.195:8085/api/texts';
    this.http.get(url).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

  // initiate
  ngOnInit() {
    this.getData();
  }
}

// export class HomeComponent {}
