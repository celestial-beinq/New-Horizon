import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, Header, Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initAnimations(), 100);
    }
  }

  private async initAnimations(): Promise<void> {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');

    const gsap = gsapModule.default || gsapModule.gsap;
    const ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Header fades in and goes up
    tl.fromTo('.gsap-contact-header',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2 }
    );

    // Form Card slides up softly 
    tl.fromTo('.gsap-contact-card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2 },
      "-=0.6"
    );
  }
}
