import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RightSidebarComponent} from './right-sidebar/right-sidebar.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {ViewportService} from './services/viewport.service';

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
  providers: [
    ViewportService,
  ],
})
/**
 * CoreModule class
 */
export class CoreModule { }
