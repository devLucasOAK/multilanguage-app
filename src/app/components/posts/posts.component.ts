import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: any[] = []
  quantity: any[] = []

  constructor(private translate: TranslateService, private service: PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts(){
    this.service.getPosts().subscribe(res => {
      this.posts = res
    })
  }

  buy(post: any){
    const body = {
      quantity: this.quantity[post.id]
    }

    this.service.buy(post.id, body).subscribe(res => {
      this.translate.get(res.message).subscribe(
        msg => alert(msg)
      )
    },
    err => {
      this.translate.get(err.error.message).subscribe(
        msg => alert(msg)
      )
    })
  }
}
