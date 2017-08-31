import { Component, OnInit, HostBinding } from '@angular/core';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.css'],
})
export class SharePageComponent implements OnInit {
  showNavbar = true;
  path = '';

  constructor(public config: ConfigService) {
    let path = this.config.route.snapshot.url;
    if (/\/share\/taskDetail/.test(location.href)) {
      this.showNavbar = false;

    }

    console.log(this.showNavbar);
    this.getActivePath();

  }

  ngOnInit() {


  }

  openNavbar() {
    this.showNavbar = true;

  }


  getActivePath() {





  }
}
