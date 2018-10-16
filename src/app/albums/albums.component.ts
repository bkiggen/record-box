import { Component, OnInit } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album: Album = {
    id: 1,
    artist: "King Krule",
    title: "The Ooz",
    releaseYear: 2018
  };

  constructor() { }

  ngOnInit() {
  }

}
