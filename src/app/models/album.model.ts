export class Album {
  public listenedTo: boolean = false;
  constructor(public id: number, public artist: string, public title: string, public releaseYear: string) { }
}
