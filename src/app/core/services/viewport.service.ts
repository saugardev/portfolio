import {ViewportScroller} from '@angular/common';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/**
 * ViewportService class
 */
export class ViewportService {
  /**
   * ViewportService constructor
   * @param {ViewportScroller} viewportScroller
   */
  constructor(private viewportScroller: ViewportScroller) { }

  /**
   * Scrolls to an anchor element.
   * @param {string} anchor The ID of the anchor element.
   */
  public scrollToAnchor(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

  /**
   * Scrolls to a specified position.
   * @param {[number, number]} position A position in screen coordinates
   * (a tuple with x and y values).
   */
  public scrollToPosition(position: [number, number]) {
    this.viewportScroller.scrollToPosition(position);
  }
}
