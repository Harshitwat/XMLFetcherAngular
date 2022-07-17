import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({providedIn:'root'})
export class PostsService{

  constructor(private http:HttpClient, private router:Router){}
  getXML(url:string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("url",url.toString());
    return this.http.get<Post[]>('http://localhost:8080/xml-parser/'+ encodeURIComponent(url));
  }
  getPosts(){
    return this.http.get<Post[]>('http://localhost:8080/post/');
  }
  addPost(post:Post){
    this.http.post('http://localhost:8080/post',post)
    .subscribe((responseData)=>{
          console.log(responseData);
          this.router.navigate(['/posts']);
    });

  }
  getPost(id:string){
    return this.http.get<Post>
    ('http://localhost:8080/post/'+id);

  }

  updatePost(post:Post){
   this.http.put('http://localhost:8080/post/'+post.id,post)
    .subscribe(response=>{
    });

  }
  deletePost(id:string){
    console.log("aeg");
    this.http.delete('http://localhost:8080/post/'+id).subscribe(res=>{
    });
  }
}
