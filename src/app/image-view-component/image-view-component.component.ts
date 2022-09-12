import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imageview',
  templateUrl: './image-view-component.component.html',
  styleUrls: ['./image-view-component.component.css']
})
export class ImageViewComponentComponent implements OnInit {
  test:string = "test";

  constructor() { }

  ngOnInit(): void {
  }

}
