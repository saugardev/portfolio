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
  constructor() {
    this._links = environment.NAVBAR_LINKS;
  }
}
