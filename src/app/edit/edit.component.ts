import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostsService } from '../post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:string;
  post:Post={
    id:'',
    title:'',
    description:'',
    link:'',
    img:''
  };
  form:FormGroup;
  constructor(private route:ActivatedRoute,private Service:PostsService,private router:Router) { }

   onSave(){
    if(this.form.invalid){
     return;
   }
   this.post.title=this.form.value.title;
   this.post.description=this.form.value.description;
   this.post.link=this.form.value.link;
   this.post.img=this.form.value.img;
   this.Service.updatePost(this.post);
   this.router.navigate(['/posts' ]);
  }
  ngOnInit(): void {
    this.form=new FormGroup({
      'title':new FormControl(null,{
        validators:[Validators.required]
      }),
      'description':new FormControl(null,{
        validators:[Validators.required]
      }),
      'link':new FormControl(null,{
        validators:[Validators.required]
      }),
      'img':new FormControl(null,{
        validators:[Validators.required]
      })
    });

    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id=paramMap.get('id');
      this.Service.getPost(this.id).subscribe(data=>{
        this.post={
          id:data.id,
          title:data.title,
          description:data.description,
          link:data.link,
          img:data.img
        };
        this.form.patchValue({
          'title':this.post.title,
          'description':this.post.description,
          'link':this.post.link,
          'img':this.post.img
        });
        })
    })

  }


}
