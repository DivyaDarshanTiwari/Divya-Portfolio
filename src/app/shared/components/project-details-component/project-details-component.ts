import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type ProjectDetailsComponentType = {
  id: number;
  name: String;
  period: String;
  about: String;
  role: String;
  teammates: String[] | null;
  techStack: String[];
  FeatureImplemented: String[];
  image: String;
  link: String;
};

@Component({
  selector: 'app-project-details-component',
  imports: [],
  templateUrl: './project-details-component.html',
  styleUrl: './project-details-component.css',
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectId = -1;
  projectToDisplay: ProjectDetailsComponentType | undefined;
  destory$: any;
  ngOnInit(): void {
    this.destory$ = this.route.paramMap.subscribe((params) => {
      this.projectId = Number(params.get('id'));
      this.projectToDisplay = this.projects.find((p) => p.id === this.projectId);
    });
  }

  projects: ProjectDetailsComponentType[] = [
    {
      id: 1,
      name: 'Expensely',
      period: 'June 2025 – July 2025',
      about:
        'A cross-platform expense tracker app with instant receipt scanning and real-time expense logging.',
      role: 'Backend Developer',
      teammates: ['Vyom Singhal', 'Rakshita'],
      techStack: [
        'React Native',
        'Node.js',
        'Express',
        'Gemini API',
        'Firebase Auth',
        'Tesseract.js',
        'Cloudinary',
        'PostgreSQL',
        'Redis',
      ],
      FeatureImplemented: [
        'Built a cross-platform expense tracker app with instant receipt scanning using Tesseract.js and Gemini API, live in beta for users with real-time expense logging.',
      ],
      image: './expensely.jpg',
      link: 'https://drive.google.com/drive/folders/1j0xGV2Yh4Tin_hP97gZf1tf0JQlUBloQ?usp=sharing',
    },
    {
      id: 2,
      name: 'Trekker On the Go',
      period: 'August 2024 – November 2024',
      about:
        'A real-time trekker coordination system to manage irregular trekker timings effectively.',
      role: 'Backend Developer',
      teammates: ['Vyom Singhal '],
      techStack: [
        'JavaScript',
        'Node.js',
        'Express.js',
        'React.js',
        'MongoDB',
        'WebSocket',
        'Data Structure',
      ],
      FeatureImplemented: [
        'Formulated the architecture and flow for a real-time trekker coordination system addressing irregular trekker timings in front of the college.',
      ],
      image: './trekker-on-the-go.png',
      link: 'https://github.com/DivyaDarshanTiwari/Trekker-On-the-Go',
    },
    {
      id: 3,
      name: 'Dummy Hotstar',
      period: 'March 2024 – April 2024',
      about:
        'A Hotstar-like frontend application integrating various APIs for dynamic content rendering.',
      role: 'Sole Frontend Developer',
      teammates: null,
      techStack: ['Angular', 'Typescript', 'Angular Material', 'Postman'],
      FeatureImplemented: [
        ' Built a cross-browser compatible Hotstar-like frontend integrating APIs with pagination, lazy loading and a modular service layer for efficient data handling and performance.',
      ],
      image: './dummy-hotstar.png',
      link: 'https://dummy-hotstar.vercel.app/',
    },
  ];

  ngOnDestroy(): void {
    // Cleanup if needed
    this.destory$.unsubscribe();
  }
}
