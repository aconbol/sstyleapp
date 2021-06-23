import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { Tab } from 'src/app/interfaces/tab';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit, OnDestroy {
  @ViewChild('tabs', { static: true }) tabs: IonTabs;
  imgBase64: string = null;
  private subs = new Subscription();
  private currentTab: Tab;
  private tabsDidEnter = false;

  constructor() {}

  ngOnInit() {
    const tabSub = this.tabs.ionTabsDidChange.subscribe(() => {
      this.currentTab = this.tabs.outlet.component as Tab;
    });
    this.subs.add(tabSub);
  }

  ionViewWillEnter() {
    console.log(
      'TABS ionViewWillEnter: tabsDidEnter and currentTab',
      this.tabsDidEnter,
      this.currentTab
    );
    if (this.tabsDidEnter) {
      // Do not fire on initial load - ionViewWillEnter of child tab will fire
      this.currentTab.tabsWillEnter();
    }
  }

  ionViewDidEnter() {
    if (this.tabsDidEnter) { // Do not fire on initial load - ionViewDidEnter of child tab will fire
      this.currentTab.tabsDidEnter();
    }
    this.tabsDidEnter = true;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
