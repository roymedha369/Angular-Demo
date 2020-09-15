import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../shared/album';
import { Photo } from '../shared/photo';
import { User } from '../shared/user';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumList:Album[];
  errorMessage:String;
  selectedAlbum:Album;
  userList:User[];
  photoList:Photo[];
  selectedPhoto:Photo;
  album:Number;

  constructor(private albumsService:AlbumService) {
    
   }

  ngOnInit(): void {
 
    this.getAlbums();
    this.getUsers();
    this.getPhotos();
    
  }

  getAlbums(){
    this.errorMessage=null;
    this.albumsService.getAlbums().subscribe(
      (response)=>{this.albumList=response},
      (error)=>{this.errorMessage=error.error.messgae}
    )
  }

  selectParticularAlbum(albumId)
  {
    this.albumsService.getParticularAlbum(albumId).subscribe(
      (data)=>{this.selectedAlbum=data}
    )
  
  }

  getUsers()
  {
    this.errorMessage=null;
    
    this.albumsService.getUsers().subscribe(
      (response)=>{this.userList=response},
      (error)=>{this.errorMessage=error.error.messgae}
    )
  }

  getPhotos()
  {
    this.errorMessage=null;
    this.albumsService.getAlbumPhotos().subscribe(
      (response)=>{this.photoList=response},
      (error)=>{this.errorMessage=error.error.messgae}
    )
  }
  getParticularPhoto(photoId)
 {
  this.albumsService.getParticularPhoto(photoId).subscribe(
    (response)=>{this.selectedPhoto=response},
    (error)=>{this.errorMessage=error.error.messgae}
  )
   
 }
}
