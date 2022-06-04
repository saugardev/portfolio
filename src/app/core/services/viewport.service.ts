import {ViewportScroller} from '@angular/common';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {environment} from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
/**
 * ViewportService class
 */
export class ViewportService {
  /**
   * Positions anchor IDs
   */
  private positions: Array<string>;

  /**
   * Current position index
   */
  private currentPosition: BehaviorSubject<number>;

  /**
   * Mouse wheel information [times, direction]
   * direction => 1 = up, -1 = down
   */
  private mouseStatus: BehaviorSubject<[number, number]>;

  /**
   * Timeout to control mouse scroll events and position movement
   */
  private mouseTimeout: boolean;

  /**
   * Indicates when the app is scrolling between positions
   */
  private isScrolling: boolean;

  /**
   * ViewportService constructor
   * @param {ViewportScroller} viewportScroller
   */
  constructor(private viewportScroller: ViewportScroller) {
    this.positions = environment.NAVBAR_LINKS.map((el) => el.url);
    this.currentPosition = new BehaviorSubject(0);
    this.mouseStatus = new BehaviorSubject([0, 0]);
    this.mouseTimeout = false;
    this.isScrolling = false;
  }

  /**
   * Scrolls to an anchor element.
   * @param {string} anchor The ID of the anchor element.
   */
  public scrollToAnchor(anchor: string): void {
    document.getElementById('about-section')?.scrollTo(0, 0);
    this.viewportScroller.scrollToAnchor(anchor);
  }

  /**
   * Scrolls to a specified position.
   * @param {[number, number]} position A position in screen coordinates
   * (a tuple with x and y values).
   */
  public scrollToPosition(position: [number, number]) {
    document.getElementById('about-section')?.scrollTo(0, 0);
    this.viewportScroller.scrollToPosition(position);
  }

  /**
   * Updates mouse status based on the added events
   * @param {WheelEvent} event Mouse event when wheel moves
   */
  public addEvent(event: WheelEvent): void {
  }
}
