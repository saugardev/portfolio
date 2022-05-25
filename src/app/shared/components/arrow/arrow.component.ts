import {Component, Input} from '@angular/core';
import {ViewportService} from 'src/app/core/services/viewport.service';

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
  constructor(private viewportService: ViewportService) {
    this.sectionId = '';
  }

  /**
   * Scrolls to section sectionId or scrolls to top when empty
   */
  public goToSection() {
    this.sectionId === ''
      ? this.viewportService.scrollToPosition([0, 0])
      : this.viewportService.scrollToAnchor(this.sectionId);
  }
}
