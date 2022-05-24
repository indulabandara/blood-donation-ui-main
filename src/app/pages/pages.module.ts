import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { PostsComponent } from './posts/posts.component';
import { PostShowComponent } from './posts/post-show/post-show.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BloodGrpsComponent } from './stats/blood-grps/blood-grps.component';
import { NgChartsModule } from 'ng2-charts';
import { TopDonorsComponent } from './stats/top-donors/top-donors.component';
import { TotalDonorsComponent } from './stats/total-donors/total-donors.component';


@NgModule({
  declarations: [
    HomeComponent,
    StatsComponent,
    PostsComponent,
    PostShowComponent,
    PostCreateComponent,
    BloodGrpsComponent,
    TopDonorsComponent,
    TotalDonorsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NgChartsModule
  ]
})
export class PagesModule { }
