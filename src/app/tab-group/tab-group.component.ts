import { Component, OnInit } from '@angular/core';
import { TabGroupService } from './tab-group.service';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit {

  public index = 0;

  constructor(private tabGroupService: TabGroupService) { }

  ngOnInit() {
    this.tabGroupService.tabIndexEvent().subscribe((index: number) => {
      this.index = index;
    });
  }

}
