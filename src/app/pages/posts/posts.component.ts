import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  isViewMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  onEnterCreateMode() {
    this.isViewMode = false;
  }

  onCreateNewPost() {
    this.isViewMode = true;
  }

}
