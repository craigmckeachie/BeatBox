export class Song {
  id: number | undefined;
  title: string = "";
  artist: string = "";
  album: string = "";
  year: number | undefined;
  genre: string = "";
  durationInSeconds: number | undefined;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.artist) this.artist = initializer.artist;
    if (initializer.album) this.album = initializer.album;
    if (initializer.genre) this.genre = initializer.genre;
    if (initializer.year) this.year = initializer.year;
    if (initializer.durationInSeconds)
      this.durationInSeconds = initializer.durationInSeconds;
  }
}
