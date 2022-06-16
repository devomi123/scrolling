import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor( private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
  spin(){
  this.spinner.show()
  }
}
