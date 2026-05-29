import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';

@Component({
  selector: 'app-investment',
  imports: [RouterLink, Header, Footer],
  templateUrl: './investment.html',
  styleUrl: './investment.css',
})
export class Investment implements AfterViewInit {

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

    // ──── Hero Entrance ────
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    heroTl.fromTo('.gsap-inv-hero',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.4, stagger: 0.15, delay: 0.2 }
    );

    // ──── Stats Bar ────
    gsap.fromTo('.gsap-inv-stat',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 1.2, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-inv-stat', start: 'top 95%' }
      }
    );

    // ──── Why Invest With Us ────
    gsap.fromTo('.gsap-inv-why-text',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-inv-why-text', start: 'top 85%' }
      }
    );

    gsap.fromTo('.gsap-inv-why-img',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-inv-why-img', start: 'top 85%' }
      }
    );

    // ──── Returns & Growth Profile ────
    gsap.fromTo('.gsap-inv-returns-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-inv-returns-heading', start: 'top 85%' }
      }
    );

    gsap.fromTo('.gsap-inv-yield',
      { opacity: 0, scale: 0.95, y: 20 },
      {
        opacity: 1, scale: 1, y: 0,
        duration: 1.2, stagger: 0.2, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: '.gsap-inv-yield', start: 'top 85%' }
      }
    );

    // ──── Security, Insurance & Payment ────
    gsap.fromTo('.gsap-inv-security-text',
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-inv-security-text', start: 'top 80%' }
      }
    );

    gsap.fromTo('.gsap-inv-payment',
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-inv-payment', start: 'top 80%' }
      }
    );

    // ──── Opportunities Heading ────
    gsap.fromTo('.gsap-inv-opp-heading',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-inv-opp-heading', start: 'top 85%' }
      }
    );

    // ──── Opportunity Cards Stagger ────
    gsap.fromTo('.gsap-inv-opp-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 1.4, stagger: 0.15, ease: 'expo.out',
        scrollTrigger: { trigger: '.gsap-inv-opp-card', start: 'top 85%' }
      }
    );

    // ──── Progress Bars Animation (in Opportunities) ────
    const progressBars = document.querySelectorAll('.gsap-progress-bar');
    progressBars.forEach((bar) => {
      const htmlBar = bar as HTMLElement;
      const targetWidth = htmlBar.getAttribute('data-width') || '0';
      gsap.to(htmlBar, {
        width: `${targetWidth}%`,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: htmlBar,
          start: 'top 95%'
        }
      });
    });

    // ──── Process Steps ────
    gsap.fromTo('.gsap-inv-process-heading',
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-inv-process-heading', start: 'top 90%' }
      }
    );

    gsap.fromTo('.gsap-inv-step',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1, scale: 1,
        duration: 1.2, stagger: 0.15, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: '.gsap-inv-step', start: 'top 85%' }
      }
    );

    // ──── Final CTA ────
    gsap.fromTo('.gsap-inv-cta',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: '.gsap-inv-cta', start: 'top 85%' }
      }
    );
  }
}
