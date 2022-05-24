import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  donors: Observable<any[]>;
  posts: Observable<any[]>;

  activeDonors: number = 0;
  totalDonors: number = 0;
  topDonors: any[] = []
  bloodGroupCount: any[] = []
  postCount: number = 0

  constructor(db: AngularFireDatabase) {
    this.donors = db.list('donors').valueChanges();
    this.posts = db.list('posts').valueChanges();

    this.donors.subscribe(res => {

      var temp: any[] = [];

      res.map(arr => {
        temp[temp.length] = Object.values(arr)
      });

      var processedDonors = [].concat.apply([], temp);

      temp = []

      processedDonors.map(it => {
        temp[temp.length] = Object.values(it)
      })

      processedDonors = [].concat.apply([], temp);

      this.totalDonors = processedDonors.length
      this.activeDonors = processedDonors.filter((donor: any) => donor.TotalDonate > 0).length;
      this.topDonors = processedDonors.sort(this.compare).slice(0, 5);
      temp = []
      res.map(arr => {
        temp[temp.length] = Object.keys(arr)
      });

      temp = [].concat.apply([], temp)

      this.bloodGroupCount = []

      for (const type of temp) {
        if (this.hasBloodType(this.bloodGroupCount, type)) {
          this.bloodGroupCount.filter(grp => grp.type === type).map(grp => grp.count++)
        } else {
          this.bloodGroupCount[this.bloodGroupCount.length] = {
            "type": type,
            "count": 1
          }
        }
      }
    })

    this.posts.subscribe(res => {
      this.postCount = res.length;
    })
  }

  ngOnInit(): void { }

  compare(a: any, b: any) {
    if (a.TotalDonate > b.TotalDonate) {
      return -1;
    }
    if (a.TotalDonate < b.TotalDonate) {
      return 1;
    }
    return 0;
  }

  hasBloodType(currentType: any[], type: any) {
    for (const bloodGrp of currentType) {
      if (bloodGrp.type == type) {
        return true
      }
    }
    return false;
  }

}
