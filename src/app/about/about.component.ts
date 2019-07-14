import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  commentaire={
  date:new Date(),
  message:""
};
  infos:{name:String,email:String,phone:Number}={name:'',email:'',phone:null};
  comments=[];
  
  constructor(private  aboutService:AboutService) {

    this.infos=this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();
   }

  ngOnInit() {
  }
  onAddCommentaire(c){
    this.aboutService.addComment(c);
    this.commentaire.message='';
    this.comments=this.aboutService.getAllComments();
  }

}
