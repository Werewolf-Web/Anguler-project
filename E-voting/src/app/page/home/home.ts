import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setupSmoothScroll();
    this.setupStatAnimation();
    this.showWelcomeMessage();
  }

  // Smooth scrolling
  setupSmoothScroll(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = anchor.getAttribute('href');
        if (!targetId) return;

        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Animate stats on scroll
  setupStatAnimation(): void {
    const statNumbers = document.querySelectorAll<HTMLElement>('.stat-number');

    const animateStats = () => {
      statNumbers.forEach(stat => {
        const rect = stat.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          stat.style.transform = 'scale(1.1)';
          setTimeout(() => {
            stat.style.transform = 'scale(1)';
          }, 200);
        }
      });
    };

    window.addEventListener('scroll', animateStats);
  }

  // Welcome message
  showWelcomeMessage(): void {
    setTimeout(() => {
      console.log('Welcome to VoteSecure - Your voice matters!');
    }, 1000);
  }
}
