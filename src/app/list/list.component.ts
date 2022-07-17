import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts:Post[]=[];
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data=>{
      for (let i = 0; i < data.length; i++) {
        const post:Post={
          id:data[i].id,
          title:data[i].title,
          description:data[i].description,
          link:data[i].link,
          img:data[i].img
        }
        this.posts.push(post);

      }
    });
  }
  onDelete(id){
    if(confirm("Are you sure to delete ?")) {
      this.postService.deletePost(id);
      const index=this.posts.findIndex(p=>p.id==id);
      this.posts.splice(index,1);
    }
  }
}
