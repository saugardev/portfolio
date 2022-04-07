import {ViewportScroller} from '@angular/common';
import {Component} from '@angular/core';
import {environment} from 'src/environments/environment';

type link = {
  tag: string;
  url: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
/**
 * NavbarComponent class
 */
export class NavbarComponent {
  /**
   * Array of links
   */
  private _links: link[];

  /**
   * Links getter
   */
  public get links(): link[] {
    return this._links;
  }

  /**
   * NavbarComponent constructor
   */
  constructor(private viewportScroller: ViewportScroller) {
    this._links = environment.NAVBAR_LINKS;
  }

  /**
   * Scrolls to clicked section
   * @param {string} elementId Scroll target element id
   */
  public goToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  /**
   * Scrolls to the top
   */
  public goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
