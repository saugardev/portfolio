import {Component} from '@angular/core';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
/**
 * Right sidebar somponent class
 */
export class RightSidebarComponent {
  /**
   * Personal email to show on the right side bar.
   */
  private _email: string = environment.CURRENT_EMAIL;

  /**
   * Email getter
   * @return {string} Current email value
   */
  public get email(): string {
    return this._email;
  }
  /**
   * Email Setter
   * @param {string} value new email vlaue
   */
  public set email(value) {
    this._email = value;
  }
}
