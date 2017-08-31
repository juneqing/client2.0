import { Component, HostBinding } from '@angular/core';
import { User } from './types/task';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {



  constructor(public config: ConfigService) {
    this.initWechatConfig();
    // alert(window.navigator.userAgent);

  }
  async initWechatConfig() {
    let isInWhiteList = this.config.checkIOSWhiteList(navigator.userAgent);
    if (isInWhiteList) {
      let config = await this.config.getJSSDKConfig(location.href);
      // config.debug = true
      wx.config(config);

    }




  }

  async ngOnInit() {



  }

}
