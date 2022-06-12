import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from 'src/environments/environment';
import {ViewportService} from '../services/viewport.service';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
export class NavbarComponent implements OnInit {
  /**
   * Logo element
   */
  @ViewChild('logo', {static: true}) logo: ElementRef<HTMLDivElement>;

  /**
   * Navbar container element
   */
  @ViewChild('navbar', {static: true}) navbar: ElementRef<HTMLDivElement>;

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
  constructor(private viewportService: ViewportService) {
    this._links = environment.NAVBAR_LINKS;
  }

  /**
   * NavbarComponent ngOnInit hook
   */
  ngOnInit(): void {
    gsap.from(this.logo.nativeElement, {
      duration: 0.4,
      opacity: 0,
      y: -20,
      delay: environment.animationDelay + 0.5,
    });

    gsap.from(this.navbar.nativeElement.childNodes, {
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.1,
      delay: environment.animationDelay + 0.9,
    });
  }

  /**
   * Scrolls to clicked section
   * @param {string} elementId Scroll target element id
   */
  public goToSection(elementId: string): void {
    this.viewportService.scrollToAnchor(elementId);
  }

  /**
   * Scrolls to the top
   */
  public goToTop(): void {
    this.viewportService.scrollToPosition([0, 0]);
  }
}
