import { Component } from '@angular/core';
import { Album } from './models/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  title = 'Favorite Albums';

  // albums: Album[] = [
  //   new Album('Ministry', 'Psalm 69: The Way to Succeed and the Way to Suck Eggs', "1992"),
  //   new Album('Iggy Pop', 'The Idiot', "1977"),
  //   new Album('Les Razilles Denudes', 'Heavier Than a Death in the Family', "1977"),
  //   new Album('Throbbing Gristle', '20 Jazz Funk Greats', "1979")
  // ]

  pageTitle: string = 'Favorite Albums';
}
