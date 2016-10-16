import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { IPostSetter } from '../models/postModels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  auth: any;
  posts: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.posts = this.af.database.list('posts');
    this.items = this.af.database.list('items');
    this.af.auth.subscribe(auth =>
      this.auth = auth
    );
  }

  login() {
    this.af.auth.login();
  }
  logout() {
    this.af.auth.logout();
  }

  savePost(title, body, tags) {
    let tagarray = tags.split(',')
    tagarray.forEach(tag => {
      tag.trim();
    });
    var post: IPostSetter = {
      title: title,
      body: body,
      tags: tagarray
    };
    this.af.database.list('posts')
      .push(post);
  }
}
