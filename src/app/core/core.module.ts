import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RightSidebarComponent} from './right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    RightSidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    RightSidebarComponent,
  ],
})
/**
 * CoreModule class
 */
export class CoreModule { }
