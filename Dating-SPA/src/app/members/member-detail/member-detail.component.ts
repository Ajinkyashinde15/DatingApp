import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_models/User';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAction, NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberdetailComponent implements OnInit {

  user:User;
  galleryOptions:NgxGalleryOptions[];
  galleryImages :NgxGalleryImage[];

  constructor(private userService:UserService, private alertify: AlertifyService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
    this.galleryOptions =[
      {
        width: '500px',
        height :'500px',
        imagePercent:100,
        imageAnimation:NgxGalleryAnimation.Slide,
        preview:false 
      }
    ];
    this.galleryImages = this.getImages();

  }

  loadUser()
  {
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user:User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });

  }

  getImages()
  {
    const imageUrls = [];
    for(let i=0;i<this.user.photos.length;i++)
    {
        imageUrls.push({
          small: this.user.photos[i].url,          
          meduim: this.user.photos[i].url,
          big: this.user.photos[i].url,
          description: this.user.photos[i].description          
        });
    }
    return imageUrls;
  }
}
 