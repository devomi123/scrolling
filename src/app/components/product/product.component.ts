import { Component, OnInit } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product:any
  constructor(private api:ApiService ,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spiiner();
  }

  spiiner(){
    // this.spinner.show();
    this.api.getproduct().subscribe((data:any)=>{
      this.product = data;
      console.log(this.product);
      this.spinner.hide()

    })
  }
}
