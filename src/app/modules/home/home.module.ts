/* eslint-disable max-len */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {VerticalDisplayComponent} from './components/vertical-display/vertical-display.component';

@NgModule({
  declarations: [
    HomeComponent,
    VerticalDisplayComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
})
/**
 * HomeModule class
 */
export class HomeModule { }
