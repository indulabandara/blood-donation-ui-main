import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  @Output() onCreateNewPost = new EventEmitter<string>();

  postForm = new FormGroup({
    Name: new FormControl(''),
    Division: new FormControl(''),
    BloodGroup: new FormControl(''),
    Date: new FormControl(''),
    Time: new FormControl(''),
    Address: new FormControl(''),
    Contact: new FormControl('')
  });

  constructor(private db: AngularFireDatabase,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSave() {
    const posts = this.db.list('posts');
    posts.push(this.postForm.value);
    this.onCreateNewPost.emit()
    this.toastr.success("Post created Successfully", "Success")
  }

  saveBtnEnabled() {
    return true;
  }
}
