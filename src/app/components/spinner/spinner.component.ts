import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
product: any;
off: number = 0;
arr: any = [];
end: boolean = false;
spin=true
notemptypost: boolean = true;
notscrolly: boolean = true;

constructor(private api: ApiService, private spinner: NgxSpinnerService, private http: HttpClient) { }

ngOnInit(): void {
  // this.api.getProduct().subscribe((data: any) => {
  //   this.product = data;

  // });

  let data = { off: this.off };
  this.api.getproduct().subscribe((data: any) => {
    this.product = data;
    console.log(this.product);
    this.spin=false

  })

}

onScroll() {
  console.log("scrolled");

  this.spinner.show();
  this.off += 6;
  console.log(this.off);

  let data = { off: this.off };
  this.http.post("http://localhost:8081/data/getnext", { data: data }).subscribe((data: any) => {
    // this.product = data.data;
    console.log(data.data[0]);
    console.log(data.data.length);

    // this.product.push(data.data[0]);
    // console.log(this.product);
    if (data.data.length != 0) {
      for (let i = 0; i < data.data.length; i++) {
        // console.log(data.data[i]);
        this.product.push(data.data[i]);
        console.log(this.product);
      }
    }

    if (data.data.length == 0) {
      this.spinner.hide();
      this.end = true;
    }



  })

}

upscroll() {
  // alert("up")
}



}

