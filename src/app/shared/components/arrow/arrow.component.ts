import {ViewportScroller} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss'],
})
/**
 * ArrowComponent class
 */
export class ArrowComponent {

  /**
   * Target section's id CSS Selector
   */
  @Input() sectionId: string;

  /**
   * ArrowComponent constructor
   * @param {ViewportScroller} viewportScroller scroller instance
   */
  constructor(private viewportScroller: ViewportScroller) {
    this.sectionId = '';
  }

  /**
   * Scrolls to section if sectionId is 
   */
  public goToSection() {
    this.sectionId === '' 
      ? this.viewportScroller.scrollToPosition([0, 0])
      : this.viewportScroller.scrollToAnchor(this.sectionId);
  }
}
