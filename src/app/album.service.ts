import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './shared/album';
import { Photo } from './shared/photo';
import { User } from './shared/user';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http:HttpClient) { 
  }
  albumUrl='http://jsonplaceholder.typicode.com/albums';
  userUrl='http://jsonplaceholder.typicode.com/users';
  photoUrl='http://jsonplaceholder.typicode.com/photos';

  getAlbums():Observable<Album[]>
  {
    return this.http.get<Album[]>(this.albumUrl);
  }

  getParticularAlbum(albumId):Observable<Album>
  {
   
    return this.http.get<Album>(this.albumUrl+'/'+albumId);
  }
  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.userUrl);
  }

  getAlbumPhotos():Observable<Photo[]>
  {
    return this.http.get<Photo[]>(this.photoUrl);
  }
  getParticularPhoto(photoId)
  {
    return this.http.get<Photo>(this.photoUrl+'/'+photoId);
  }
}
