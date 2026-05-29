import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Footer } from '../../Components/footer/footer';
import { Header } from '../../Components/header/header';

@Component({
  selector: 'app-services',
  imports: [RouterLink, Footer, Header],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.initAnimations(), 150);
    }
  }

  private async initAnimations(): Promise<void> {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');

    const gsap = gsapModule.default || gsapModule.gsap;
    const ScrollTrigger = scrollTriggerModule.default || scrollTriggerModule.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    // ──── Hero Section ────
    const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    heroTl.fromTo('.gsap-svc-hero',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 }
    );

    // ──── Scroll Indicator ────
    gsap.fromTo('.gsap-scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.5, ease: 'power2.out' }
    );

    // ──── Stats Bar ────
    gsap.fromTo('.gsap-stat-bar > div',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-stat-bar', start: 'top 88%' }
      }
    );

    // ──── Service Heading ────
    gsap.fromTo('.gsap-svc-heading',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-svc-heading', start: 'top 85%' }
      }
    );

    // ──── Service Cards ────
    gsap.fromTo('.gsap-svc-card',
      { opacity: 0, y: 60, scale: 0.96 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-svc-card', start: 'top 88%' }
      }
    );

    // ──── Process Section ────
    gsap.fromTo('.gsap-process-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-process-heading', start: 'top 85%' }
      }
    );

    gsap.fromTo('.gsap-process-step',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-process-step', start: 'top 88%' }
      }
    );

    // ──── Featured Service Highlight ────
    gsap.fromTo('.gsap-highlight-img',
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-highlight-img', start: 'top 80%' }
      }
    );

    gsap.fromTo('.gsap-highlight-text',
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-highlight-text', start: 'top 80%' }
      }
    );

    gsap.fromTo('.gsap-floating-card',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1, scale: 1, duration: 0.8, delay: 0.4, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: '.gsap-floating-card', start: 'top 90%' }
      }
    );

    // ──── Testimonials ────
    gsap.fromTo('.gsap-testimonial-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-testimonial-heading', start: 'top 85%' }
      }
    );

    gsap.fromTo('.gsap-testimonial-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-testimonial-card', start: 'top 88%' }
      }
    );

    // ──── FAQ ────
    gsap.fromTo('.gsap-faq-heading',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-faq-heading', start: 'top 85%' }
      }
    );

    gsap.fromTo('.gsap-faq-item',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: '.gsap-faq-item', start: 'top 90%' }
      }
    );

    // ──── Bottom CTA ────
    gsap.fromTo('.gsap-cta-section',
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-cta-section', start: 'top 85%' }
      }
    );
  }
}
