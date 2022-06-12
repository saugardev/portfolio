import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from 'src/environments/environment';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
/**
 * Right sidebar somponent class
 */
export class RightSidebarComponent implements OnInit {
/**
   * Hello div element
   */
  @ViewChild('rightbar', {static: true}) rightbar: ElementRef<HTMLDivElement>;

  /**
   * Personal email to show on the right side bar.
   */
  private _email: string = environment.CURRENT_EMAIL;

  /**
   * Email getter
   * @return {string} Current email value
   */
  public get email(): string {
    return this._email;
  }
  /**
   * Email Setter
   * @param {string} value new email vlaue
   */
  public set email(value) {
    this._email = value;
  }

  /**
   * RightSidebarComponent ngOnInit hook
   */
  ngOnInit(): void {
    this.initAnimation();
  }

  /**
   * Creates bar load animation
   */
  private initAnimation(): void {
    gsap.from(this.rightbar.nativeElement, {
      duration: 0.4,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      delay: environment.animationDelay + 0.75,
    });
  }
}
