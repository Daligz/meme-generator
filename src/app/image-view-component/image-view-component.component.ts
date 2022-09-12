import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'imageview',
  templateUrl: './image-view-component.component.html',
  styleUrls: ['./image-view-component.component.css']
})
export class ImageViewComponentComponent implements OnInit {

  @Input() url: string = "https://i.gifer.com/origin/d0/d0fc7bdc9a240be0950efb47f3c90f81.gif";
  @Input() id: string = "empty";
  @Input() width: string = "250";
  @Input() height: string = "250";

  ngOnInit(): void {
  }

}
