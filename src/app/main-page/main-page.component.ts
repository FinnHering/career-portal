import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {

  public filterCount: number = 1;
  public listFilter: any = {};
  public displaySidebar: boolean = false;
  public sidebarCss: object = {};

  constructor() { }

  public onSidebarFilter(filter: any): void {
    this.listFilter = filter;
    this.filterCount++;
  }

  public toggleSidebar(value: boolean): void {
    this.displaySidebar = value;
    if (value) {
      this.sidebarCss = {
        position: 'absolute',
        width: '60%',
        'max-width': 'unset',
      };
    } else {
      this.sidebarCss = {};
    }

  }

}
