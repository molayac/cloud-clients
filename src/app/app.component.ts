import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public location: Location, db: AngularFirestore) { }

  ngOnInit() {
  }

  isMap(path) {
    const title = this.location.prepareExternalUrl(this.location.path());
    const titlee = title.slice(1);
    if (path === titlee) {
      return false;
    }
    return true;
  }
}
