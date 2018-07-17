import { Component, OnInit } from '@angular/core';
import { FbPhotoService } from "../fb-photo.service"; 
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router'; 

import { AngularFireList } from 'angularfire2/database/interfaces';
import { Console } from '@angular/core/src/console';
import * as $ from 'jquery';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  providers: [FbPhotoService],
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {


  photos: Observable<any[]>;
  photoList: Observable<any[]>;

  constructor( private db: FbPhotoService, private router: Router) { }

  ngOnInit() {

    this.photos = this.db.getAllPhotos(); 
    this.photoList = this.db.getPhotoList(); 

  }

  displayPhotoGallery(e){
  this.router.navigateByUrl('photogallery/' + e);
}

}
