import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { FeedLayoutComponent } from './feed-layout/feed-layout.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { FeedComponent } from './feed/feed.component';
import { FeedContainerComponent } from './feed-container/feed-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeftSideBarComponent,
    FeedLayoutComponent,
    RightSideBarComponent,
    FeedComponent,
    FeedContainerComponent
  ],
  exports: [
    LeftSideBarComponent,
    FeedLayoutComponent,
    RightSideBarComponent
  ]
})
export class HomeViewComponentModule { }
