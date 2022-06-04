import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

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
   * About section element
   */
  @ViewChild('about', {static: true}) about: ElementRef<HTMLDivElement>;

  /**
   * HomeComponent ngOnInit hook
   */
  ngOnInit(): void {
    // Hello load
    gsap.from(this.hello.nativeElement, {
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.75,
    });
    // Hello animation
    gsap.to(this.hello.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.hello.nativeElement,
        scrub: true,
        start: '130% center',
      },
      color: '#fff',
      scale: 0.8,
    });
    // About load
    gsap.from(this.about.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.about.nativeElement,
        scrub: true,
        end: '20% center',
      },
      duration: 0.4,
      opacity: 0,
      stagger: 0,
      scale: 0.8,
    });
  }
}
