import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(response => {
      this.posts =  response;
      console.log(response);
    }, error => {
      alert('An unexpected Error occurred');
      console.log('get posts', error);
    });
  }

  createPost(input: HTMLInputElement) {
    const post: any = {title: input.value};
    this.postService.createPost(post).subscribe((response: any) => {
      post.id  = response.id;
      (this.posts as []).splice(0, 0, (post as never));
      console.log(response);
      console.log(post);
    }, error => {
      alert('An unexpected Error occurred');
      console.log('create post', error);
    });
  }

  updatePost(post) {
      this.postService.updatePost(post).subscribe(response => {
               console.log(response);
             }, error => {
              alert('An unexpected Error occurred');
              console.log('update post', error);
             });
  }

  deletePost(post) {
    this.postService.deletePost(post.id).subscribe(
      response => {
      const index = (this.posts as []).indexOf((post as never));
      (this.posts as []).splice(index,  1);
    },
     error => {
      alert('An unexpected Error occurred');
      console.log('delete post', error);
    });
  }

}
