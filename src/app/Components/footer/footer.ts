import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initFooterAnimations();
    }
  }

  private async initFooterAnimations(): Promise<void> {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');

    const gsap = gsapModule.default || gsapModule.gsap;
    const ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    // CTA Band — fade up
    gsap.from('.gsap-footer-cta', {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.gsap-footer-cta',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    // Footer link columns — staggered reveal
    gsap.from('.gsap-footer-col', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.gsap-footer-links',
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });

    // Bottom bar — subtle fade in
    gsap.from('.gsap-footer-bottom', {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.gsap-footer-bottom',
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    });
  }
}
