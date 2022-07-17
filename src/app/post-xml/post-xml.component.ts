import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-post-xml',
  templateUrl: './post-xml.component.html',
  styleUrls: ['./post-xml.component.css']
})
export class PostXMLComponent implements OnInit,OnDestroy {

  posts:Post[]=[];
  isLoading=false;
  form:FormGroup;
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'url':new FormControl(null,{
        validators:[Validators.required]
      })
    });

  }
  onSubmit(){
    let fetchedPosts:Post[]=[];
    this.postService.getXML(this.form.value.url).subscribe(response=>{
      fetchedPosts=response;
      this.posts=fetchedPosts;
      });
  }
  addPost(post:Post){
    this.postService.addPost(post);
  }
ngOnDestroy(): void {
}
}
