import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RightSidebarComponent} from './right-sidebar/right-sidebar.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
  ],
})
/**
 * CoreModule class
 */
export class CoreModule { }
