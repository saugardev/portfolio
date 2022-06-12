import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {environment} from 'src/environments/environment';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
})
/**
 * Left sidebar component class
 */
export class LeftSidebarComponent implements OnInit {
  /**
   * Hello div element
   */
  @ViewChild('leftbar', {static: true}) leftbar: ElementRef<HTMLDivElement>;
  /**
   * Links ul element
   */
  @ViewChild('links', {static: true}) links: ElementRef<HTMLDivElement>;

  /**
   * LeftSidebarComponent ngOnInit hook
   */
  ngOnInit(): void {
    this.initAnimation();
  }

  /**
   * Creates bar load animation
   */
  private initAnimation(): void {
    gsap.from(this.leftbar.nativeElement, {
      duration: 0.4,
      opacity: 0,
      y: 50,
      delay: environment.animationDelay + 2.1,
    });
    gsap.from(this.links.nativeElement.childNodes, {
      duration: 0.1,
      y: 20,
      stagger: 0.05,
      delay: environment.animationDelay + 2,
    });
  }
}
