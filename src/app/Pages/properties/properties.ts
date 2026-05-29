import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-properties',
  imports: [RouterLink, Header, Footer],
  templateUrl: './properties.html',
  styleUrl: './properties.css',
})
export class Properties implements AfterViewInit, OnDestroy {
  // Hero Image Rotation Logic
  heroImages: string[] = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=80',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2000&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&q=80'
  ];
  currentImageIndex = 0;
  private imageInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initAnimations(), 150);
      
      // Auto-change background image every 5 seconds
      this.imageInterval = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }

  private async initAnimations(): Promise<void> {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');

    const gsap = gsapModule.default || gsapModule.gsap;
    const ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    // ──── Hero ────
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    heroTl.fromTo('.gsap-prop-hero',
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1.4, stagger: 0.15, delay: 0.2 }
    );

    // ──── Filter Bar ────
    gsap.fromTo('.gsap-filter-bar',
      { opacity: 0, y: -20 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-filter-bar', start: 'top 95%' }
      }
    );

    // ──── Portfolio Heading ────
    gsap.fromTo('.gsap-prop-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-prop-heading', start: 'top 85%' }
      }
    );

    // ──── Property Cards — Staggered Entrance ────
    gsap.fromTo('.gsap-property-card',
      { opacity: 0, y: 60, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 1.2, stagger: 0.15, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-property-card', start: 'top 85%' }
      }
    );

    // ──── Load More Button ────
    gsap.fromTo('.gsap-load-more',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-load-more', start: 'top 90%' }
      }
    );

    // ──── CTA Section ────
    gsap.fromTo('.gsap-props-cta',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1,
        duration: 1.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-props-cta', start: 'top 85%' }
      }
    );
  }
}
