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
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition('void => *', [
        animate('1s ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: '{{transform}}' }), { params: { transform: 'translateX(100px)' } }),
      transition('void => *', [
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('hoverScale', [
      state('normal', style({ transform: 'scale(1)', boxShadow: 'none' })),
      state('hovered', style({ transform: 'scale(1.05)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' })),
      transition('normal <=> hovered', animate('0.3s ease'))
    ]),
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
    { name: 'CSS', icon: 'css.png' },
    { name: 'JavaScript', icon: 'javascript-icon.png' },
    { name: 'Python', icon: 'python.png' },
    { name: 'Docker', icon: 'docker-icon.png' },
    { name: 'PHP', icon: 'php-icon.png' },
    { name: 'MySQL', icon: 'mysql-icon.png' },

  ];

  projects = [
    { title: 'Connect Four', description: 'A project where we worked as a group to create a connect four game.', image: 'connect-four.jpg' },
    { title: 'Research Project', description: 'This was a project where we created an application for a client that needed it to manage their horses and their birthrate.', image: 'horse.jpg' },
    { title: 'IT Project', description: 'This is a employeedashboard that me and my team created for a company called Collide.', image: 'employee-dashboard.png' },
    { title: 'Portfolio', description: 'This is my portfolio that I created to showcase my skills and projects.', image: 'portofolio.png' },
  ];

  activities = [
    {
      title: 'Easi: Power Apps Seminar',
      description: 'A seminar on creating applications in Power Apps using low-code. We built a sandwich webshop.',
      location: 'Easi, PXL G gebouw – G412',
      date: '12/03/2024',
      duration: '3 hours',
      image: 'easi.png'
    },
    {
      title: 'Tobania: AI Wizards',
      description: 'A seminar discussing AI usage by developers, its pros, cons, risks, and security aspects.',
      location: 'Tobania, PXL G gebouw – G414',
      date: '16/04/2024',
      duration: '3 hours',
      image: 'tobania.png'
    },
    {
      title: 'Gluo: Multicloud Workshop',
      description: 'A workshop where we set up a Dockerfile, deployed infrastructure on AWS, and built an automated pipeline.',
      location: 'Gluo, PXL G gebouw – G410',
      date: '23/04/2024',
      duration: '3 hours',
      image: 'gluo.png'
    },
    {
      title: 'Tobania: Scrum Seminar',
      description: 'A seminar on understanding and using SCRUM methodology.',
      location: 'Tobania, PXL G gebouw – G414',
      date: '30/04/2024',
      duration: '3 hours',
      image: 'tobania.png'
    },
    {
      title: 'Nocomputer: Prompt Engineering',
      description: 'A session on formulating AI prompts effectively and using an image generator.',
      location: 'Nocomputer, Corda 7 – iClassroom 3 CC714',
      date: '23/10/2024',
      duration: '3 hours',
      image: 'nocomputer.png'
    },
    {
      title: 'ITLicious: Flutter Introduction',
      description: 'An introduction to Flutter and building a simple Flutter application.',
      location: 'ITLicious, Corda 7 – iClassroom 2 CC713',
      date: '06/11/2024',
      duration: '3 hours',
      image: 'Itlicious.jpg'
    },
    {
      title: 'ACA: Behaviour Driven Development',
      description: 'A seminar on programming using Behaviour Driven Development, coding based on specified behaviors.',
      location: 'A.C.A Group, Corda 7 – iClassroom 1 CC712',
      date: '27/11/2024',
      duration: '3 hours',
      image: 'aca.png'
    },
    {
      title: 'Inetum: Copilot Studio Chatbot',
      description: 'Created a chatbot using Copilot Studio and tested it with various prompts.',
      location: 'Inetum, Corda 7 – iClassroom 1 CC712',
      date: '04/12/2024',
      duration: '3 hours',
      image: 'inetum.png'
    },
    {
      title: 'Innovatieroute: Security & Cloud - Resilix',
      description: 'A session on analyzing cyberattacks, ransomware, cybersecurity crisis management, and incident response.',
      location: 'Resilix, Corda 1 – CC112 / Corda 7 – CC713',
      date: '24/09/2024',
      duration: 'Full day',
      image: 'resilix.png'
    },
    {
      title: 'Innovatieroute: Cloudar - Threat Hunting',
      description: 'A session on setting up an application in AWS and threat hunting/response.',
      location: 'Cloudar, Corda 7 – CC711',
      date: '08/10/2024',
      duration: 'Full day',
      image: 'cloudar.png'
    },
    {
      title: 'Innovatieroute: Exclusive Networks - Secure SD-WAN',
      description: 'A workshop on Secure SD-WAN, configuring networks, and using FortiManager.',
      location: 'Exclusive Networks, Corda 7 – CC713',
      date: '15/10/2024',
      duration: 'Full day',
      image: 'pxl.png'
    },
    {
      title: 'Hackaton: Red Cross Challenge',
      description: 'Developed an AI-integrated application to help refugees access benefits in the Netherlands.',
      location: 'Den Haag',
      date: '31/01/2025 – 02/02/2025',
      duration: '3 days',
      image: 'hack-for-good.png'
    },
    {
      title: 'Projectweek 2TIN',
      description: 'A week of workshops and POP-sessions to prepare for a research project.',
      location: 'PXL',
      date: '12/02/2024 – 22/03/2024',
      duration: '27 hours',
      image: 'pxl.png'
    },
    {
      title: 'POP-sessie 2TIN: Brain at Work',
      description: 'A session on the effects of social media on the brain and efficient work strategies.',
      location: 'PXL',
      date: '05/03/2024',
      duration: '2 hours',
      image: 'pxl.png'
    },
    {
      title: 'POP-sessie 2TIN: POPing',
      description: 'A session on group dynamics and giving/receiving feedback.',
      location: 'PXL',
      date: '07/03/2024',
      duration: '2 hours',
      image: 'pxl.png'
    },
    {
      title: 'POP-sessie 3TIN: My Team and I',
      description: 'A session on team collaboration and group dynamics activities.',
      location: 'Corda 7 - Ispace',
      date: '09/10/2024',
      duration: '2 hours',
      image: 'pxl.png'
    },
    {
      title: 'International: Hack for Good',
      description: 'A 3-day competition in Den Haag to create solutions for a case.',
      location: 'Den Haag',
      date: '31/01/2025 – 02/02/2025',
      duration: '3 days',
      image: 'hackforgood.png'
    },
    {
      title: 'Extra activity: Hackaton: Hack The Future',
      description: 'A challenge to protect and repair a spaceship using programming skills.',
      location: 'Antwerpen – Flanders Meeting & Convention Center',
      date: '19/11/2024',
      duration: '12 hours',
      image: 'hack-the-future.jpg'
    }
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
      description: 'My first two years at PXL were a learning experience with a lot of hard moments. These years were focused on learning new programming languages.'
    },
    {
      year: '2024',
      title: 'Last year at PXL',
      description: 'Focused on projects and working as a team and creating fullstack applications. Learning new languages such as Angular and MAUI.'
    },
    {
      year: '2025',
      title: 'Internship at Collide',
      description: 'Started my internship at Collide, building an employeedashboard for the employees of Collide.'
    }
  ];

  skillHoverState: { [key: number]: string } = {};
  projectHoverState: { [key: number]: string } = {};
  activityHoverState: { [key: number]: string } = {};

  onHoverSkill(index: number, isHovered: boolean) {
    this.skillHoverState[index] = isHovered ? 'hovered' : 'normal';
  }

  onHoverProject(index: number, isHovered: boolean) {
    this.projectHoverState[index] = isHovered ? 'hovered' : 'normal';
  }

  onHoverActivity(index: number, isHovered: boolean) {
    this.activityHoverState[index] = isHovered ? 'hovered' : 'normal';
  }

  scrollToSkills() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
