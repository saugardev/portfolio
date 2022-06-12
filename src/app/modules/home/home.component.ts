import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {environment} from 'src/environments/environment';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
/**
 * HomeComponent class
 */
export class HomeComponent implements OnInit {
  /**
   * Hello div element
   */
  @ViewChild('hello', {static: true}) hello: ElementRef<HTMLDivElement>;
  /**
   * Arrow div element
   */
  @ViewChild('arrow', {static: true}) arrow: ElementRef<HTMLDivElement>;
  /**
   * About section element
   */
  @ViewChild('about', {static: true}) about: ElementRef<HTMLDivElement>;
  /**
   * Timeline element
   */
  @ViewChild('timeline', {static: true}) timeline: ElementRef<HTMLDivElement>;

  /**
   * HomeComponent ngOnInit hook
   */
  ngOnInit(): void {
    this.initHelloAnimations();
    this.initAboutAnimations();
  }

  /**
   * Creates hello section animations
   */
  private initHelloAnimations(): void {
    gsap.from(this.hello.nativeElement, {
      duration: 0.4,
      opacity: 0,
      y: 40,
      // stagger: 0.2,
      delay: environment.animationDelay + 1.3,
    });
    gsap.from(this.hello.nativeElement.childNodes, {
      duration: 0.4,
      y: 20,
      stagger: 0.1,
      delay: environment.animationDelay + 1.3,
    });
    gsap.from(this.arrow.nativeElement, {
      duration: 0.4,
      opacity: 0,
      y: 50,
      delay: environment.animationDelay + 2.15,
    });
    gsap.to(this.hello.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.hello.nativeElement,
        scrub: true,
        start: '130% center',
      },
      color: '#fff',
      scale: 0.85,
    });
  }
  /**
   * Creates about section animations
   */
  private initAboutAnimations(): void {
    gsap.from(this.about.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.about.nativeElement,
        scrub: true,
        end: '20% center',
      },
      duration: 0.4,
      opacity: 0,
      stagger: 0,
      scale: 0.85,
      delay: environment.animationDelay,
    });
    gsap.from(this.timeline.nativeElement, {
      scrollTrigger: {
        trigger: this.timeline.nativeElement,
        scrub: true,
        end: '20% center',
      },
      opacity: 0,
      x: 300,
      scale: 0.75,
      delay: environment.animationDelay,
    });
    gsap.to(this.about.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.about.nativeElement,
        scrub: true,
        start: '230% center',
      },
      color: '#fff',
      duration: 0.5,
      scale: 0.85,
    });
    gsap.to(this.timeline.nativeElement, {
      scrollTrigger: {
        trigger: this.timeline.nativeElement,
        scrub: true,
        start: '80% center',
      },
      opacity: 0,
      scale: 0.85,
    });
  }
}
