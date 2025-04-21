import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
  standalone: true,
  animations: [
    // Hero section fade-in animation
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('void => *', [
        animate('1s ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    // Skills slide-in animation
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: '{{transform}}' }), { params: { transform: 'translateX(100px)' } }),
      transition('void => *', [
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    // Project card hover animation
    trigger('hoverScale', [
      state('normal', style({ transform: 'scale(1)', boxShadow: 'none' })),
      state('hovered', style({ transform: 'scale(1.05)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' })),
      transition('normal <=> hovered', animate('0.3s ease'))
    ]),
    // Timeline entry animation
    trigger('timelineSlideIn', [
      state('void', style({ opacity: 0, transform: '{{transform}}' }), { params: { transform: 'translateX(100px)' } }),
      transition('void => *', [
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomepageComponent {
  skills = [
    { name: 'Angular', icon: 'angular-icon.png' },
    { name: 'TypeScript', icon: 'typescript-icon.png' },
    { name: 'Tailwind CSS', icon: 'tailwind-icon.png' },
    { name: 'C#', icon: 'c-icon.png' },
    { name: 'HTML', icon: 'html-icon.png' },
    { name: 'Vue.js', icon: 'vue-icon.png' },
  ];

  projects = [
    { title: 'Connect Four', description: 'A project where we worked as a group to create a connect four game.', image: 'connect-four.jpg' },
    { title: 'Research Project', description: 'This was a project where we created an application for a client that needed it to manage their horses and their birthrate.', image: 'horse.jpg' },
    { title: 'IT Project', description: 'This is a employeedashboard that me and my team created for a company called Collide.', image: 'employee-dashboard.png' },
    { title: 'Portfolio', description: 'This is my portfolio that I created to showcase my skills and projects.', image: 'portofolio.png' },
  ];

  timeline = [
    {
      year: '2020',
      title: 'Started Coding at UHasselt',
      description: 'Began learning web development with HTML, CSS, and Python.'
    },
    {
      year: '2021',
      title: 'First two years at PXL',
      description: 'My first two years at PXL were a learning experience with a lot of hard moments. These years wre focused on learning new programming languages.'
    },
    {
      year: '2024',
      title: 'Last year at PXL',
      description: 'Focussed on projects and working as a team and creating fullstack applications. Learning new languages such as Angular and MAUI.'
    },
    {
      year: '2025',
      title: 'Internship at Collide',
      description: 'Started my internship at Collide, building an employeedashboard for the employees of Collide.'
    }
  ];

  hoverState: { [key: number]: string } = {};

  onHover(index: number, isHovered: boolean) {
    this.hoverState[index] = isHovered ? 'hovered' : 'normal';
  }

  scrollToSkills() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
