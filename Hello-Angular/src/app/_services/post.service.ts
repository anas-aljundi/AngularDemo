import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://jsonplaceholder.typicode.com/posts';
constructor(private http: HttpClient) { }

getPosts() {
  return this.http.get(this.baseUrl);
}

createPost(post)  {
  return this.http.post(this.baseUrl, JSON .stringify(post));
}

updatePost(post) {
  return this.http.patch(this.baseUrl + '/' + post.id, JSON.stringify({isRead: true}));
}

deletePost(postId) {
  return this.http.delete(this.baseUrl + '/' + postId);
}

}
