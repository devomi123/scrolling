import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
products: any;
loader = true
len: any;
ngOnInit(): void {
  this.loadinpost();
}
constructor(private api: ApiService) { }
loadinpost() {
  this.api.getproduct().subscribe((data: any) => {
    this.products = data;
    console.log(this.products.length);

    this.loader = false;
  })
}
}
