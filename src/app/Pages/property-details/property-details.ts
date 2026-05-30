import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../Components/header/header';
import { Footer } from '../../Components/footer/footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-property-details',
  imports: [RouterLink, Header, Footer],
  templateUrl: './property-details.html',
  styleUrl: './property-details.css',
})
export class PropertyDetails implements AfterViewInit {
  
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      setTimeout(() => {
        this.initAnimations();
      }, 100);
    }
  }

  private initAnimations(): void {
    gsap.fromTo('.gsap-fade-up', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
    );
  }
}
