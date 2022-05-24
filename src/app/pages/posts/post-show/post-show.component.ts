import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.scss']
})
export class PostShowComponent implements OnInit {

  posts: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.posts = db.list('posts').valueChanges();
  }

  ngOnInit(): void {
  }

}
