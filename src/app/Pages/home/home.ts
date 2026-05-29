import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../Components/header/header';
import { Hero } from '../../Components/hero/hero';
import { Section1 } from '../../Components/section-1/section-1';
import { ScrollSection } from '../../Components/scroll-section/scroll-section';
import { Section2 } from '../../Components/section-2/section-2';
import { ImageAccordion } from '../../Components/image-accordion/image-accordion';
import { Newsletter } from '../../Components/newsletter/newsletter';
import { Footer } from '../../Components/footer/footer';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Header, Hero, Footer, Section1, ScrollSection, Section2, ImageAccordion, Newsletter ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  private tabData = [
      {
          heading: 'Request &amp;<br>requirements',
          description: 'Tell us what you are looking for — location, budget, size, and lifestyle preferences. We gather your needs to tailor the perfect search.',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80'
      },
      {
          heading: 'Property<br>selection',
          description: 'Agent provides a tailored list of verified listings. Includes photos, 3D tours, and offline/online viewings.',
          image: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=1200&q=80'
      },
      {
          heading: 'Legal<br>support',
          description: 'Our legal team handles all documentation, title checks, and contract reviews to ensure a safe and transparent transaction.',
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80'
      },
      {
          heading: 'Key<br>transfer',
          description: 'The final step — collect your keys! We guide you through the entire handover process to make sure everything is perfect.',
          image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80'
      }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit fired in Home component', { isBrowser: isPlatformBrowser(this.platformId) });
    if (isPlatformBrowser(this.platformId)) {
      console.log('Registering ScrollTrigger and initializing GSAP...');
      gsap.registerPlugin(ScrollTrigger);
      // Slight delay to ensure elements are rendered
      setTimeout(() => {
        this.initAnimations();
        this.initTabs();
      }, 100); // Increased timeout to ensure DOM paints
    }
  }

  private initAnimations(): void {
    // 1. Hero Text & Intro Stagger
    gsap.fromTo('.gsap-hero-stagger', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );

    // 2. Filter tabs panel
    gsap.fromTo('.gsap-filter-panel',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    // 3. Properties Cards
    gsap.fromTo('.gsap-prop-card', 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.properties-grid',
          start: 'top 80%',
        }
      }
    );

    // 4. Offer Header
    gsap.fromTo('.gsap-offer-header', 
      { opacity: 0, x: -30 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-offer-header',
          start: 'top 85%'
        }
      }
    );

    // 5. Offer Content
    gsap.fromTo('.gsap-offer-content', 
      { opacity: 0, y: 40 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-offer-content',
          start: 'top 80%'
        }
      }
    );

    // 6. Expert Agents Cards
    gsap.fromTo('.gsap-agent-card', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gsap-agent-card',
          start: 'top 85%'
        }
      }
    );

    // 7. Stats section
    gsap.fromTo('.gsap-stat-card', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-stat-card',
          start: 'top 85%'
        }
      }
    );

    // 8. Smart text and images
    gsap.fromTo('.gsap-smart-text', 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-smart-text',
          start: 'top 85%'
        }
      }
    );

    gsap.fromTo('.gsap-smart-images', 
      { opacity: 0, scale: 0.95 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gsap-smart-images',
          start: 'top 85%'
        }
      }
    );

    // 9. Invest Offers Cards
    gsap.fromTo('.gsap-invest-offer-card', 
      { opacity: 0, y: 80, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1.2, 
        stagger: 0.2, 
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.gsap-invest-offer-card',
          start: 'top 85%'
        }
      }
    );
  }

  private initTabs(): void {
    const tabs = document.querySelectorAll('.offer-tab');
    const heading = document.getElementById('offer-heading');
    const description = document.getElementById('offer-description');
    const image = document.getElementById('offer-image') as HTMLImageElement;
    
    if (!tabs.length || !heading || !image) return;

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const idx = parseInt(tab.getAttribute('data-tab') || '0');
            
            tabs.forEach((t) => {
                t.classList.remove('fw-bold', 'text-dark');
                t.classList.add('text-muted', 'opacity-75');
            });
            
            tab.classList.add('fw-bold', 'text-dark');
            tab.classList.remove('text-muted', 'opacity-75');
            
            image.style.opacity = '0';
            const data = this.tabData[idx];
            
            setTimeout(() => {
                heading.innerHTML = data.heading;
                if (description) description.textContent = data.description;
                image.src = data.image;
                image.style.opacity = '1';
            }, 250);
        });
    });
  }
}

