import {Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ViewportService} from './core/services/viewport.service';
import {environment} from 'src/environments/environment';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/**
 * Root Angular component
 */
export class AppComponent implements OnInit {
  /**
   * Load element
   */
  @ViewChild('load', {static: true}) load: ElementRef<HTMLDivElement>;

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

  /**
   * AppComponent ngOnInit hook
   */
  ngOnInit(): void {
    this.initLoadAnimation();
  }

  /**
   * Creates load section animations
   */
  private initLoadAnimation(): void {
    gsap.from(this.load.nativeElement.childNodes, {
      duration: 0.8,
      opacity: 0,
      delay: 0.2,
    });
    gsap.to(this.load.nativeElement, {
      duration: 0.4,
      opacity: 0,
      stagger: 0.2,
      delay: 2.4,
    });
    gsap.to(this.load.nativeElement.childNodes, {
      duration: 0.4,
      opacity: 0,
      scale: 0.2,
      stagger: 0.2,
      delay: 2.5,
    });
    setTimeout(() => {
      this.load.nativeElement.remove();
    }, environment.animationDelay * 1000);
  }
}
