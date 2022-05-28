import {Component, HostListener} from '@angular/core';
import {ViewportService} from './core/services/viewport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/**
 * Root Angular component
 */
export class AppComponent {
  /**
   * A
   * @param {any} event
   */
  @HostListener('mousewheel', ['$event']) onMousewheel(event: WheelEvent) {
    this.viewportService.addEvent(event);
  }

  /**
   * AppComponent constructor
   * @param {ViewportService} viewportService
   */
  constructor(private viewportService: ViewportService) {}
}
