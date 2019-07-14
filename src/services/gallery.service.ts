import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GalleryService {


    constructor(private http:Http) { }
    
    searsh(motCle:String,size:Number,page:Number){
       return  this.http.get("https://pixabay.com/api/?key=13027927-1d1f8c957b41b3b43d8bd3f58&q="
                        +motCle+"&per_page="+size+"&page="+page)
         .map(resp=>resp.json())
        
}
}
