import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  {
  thumbnails : any[];    
  constructor(){
    this.thumbnails = [
      {id:1, title:"Ministry of Transport"},
      {id:2, title:"Ministry of Transport - Mobile"},
      {id:3, title:"Businesses for Families Council"},
      {id:4, title:"Hella Studio"},
      {id:5, title:"NUS - Business School"},
      {id:6, title:"Workplace saftey and health Council"},
      {id:7, title:"eCitizen"},
      {id:8, title:"eCitizen - Mobile"},
      {id:9, title:"Clean & Green"},
      {id:10, title:"OpenNet"},
      {id:11, title:"SG Changi"},
      {id:12, title:"Singapore Civil Defence Force"},
      {id:13, title:"GVEC"},
      {id:14, title:"Info Lab"},
      {id:15, title:"Lemon Tree Group"},
      {id:16, title:"Humira"}
    ]
  }
}
