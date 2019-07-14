import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { GalleryService } from 'src/services/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any={hits:[]}
  currentPage:Number=1;
  size:Number=10;
  pages:Array<Number>;
  totalPages:Number;
  motCle: String='';

  constructor( private galleryService:GalleryService) { }

  ngOnInit() {
  }
 
  onSearch(dataForm){
       this.galleryService.searsh(dataForm.motCle,this.size,this.currentPage)
      .subscribe(data=>{
        this.pagePhotos=data;
        this.totalPages=data.totalHits/Number(this.size);
        this.pages=new Array(this.totalPages)
      
      })

}

goToPage(i){
  this.currentPage=i+1;
  this.onSearch({motCle:this.motCle})

}

}