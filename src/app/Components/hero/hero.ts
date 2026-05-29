import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        // Timeline for organized hero animation sequence
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo('.gsap-hero-title', 
          { opacity: 0, y: 40 }, 
          { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo('.gsap-hero-desc', 
          { opacity: 0, x: 30 }, 
          { opacity: 1, x: 0, duration: 0.8 }, 
          '-=0.7'
        )
        .fromTo('.gsap-hero-buttons', 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.6 }, 
          '-=0.5'
        )
        .fromTo('.gsap-hero-stats', 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.6 }, 
          '-=0.4'
        )
        .fromTo('.gsap-hero-stats .col-4', 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, 
          '-=0.4'
        );
      }, 100);
    }
  }
}
