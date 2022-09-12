import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meme-generator';
  images: any[] = [];

    constructor(
      private http: HttpClient
    ) { }

    ngOnInit() {
      this.http
        .get('https://api.thecatapi.com/v1/images/search?limit=10')
        .subscribe((images: any) => {
          this.images = images;
        });
    }
}
