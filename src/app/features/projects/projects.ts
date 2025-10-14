import { Component } from '@angular/core';
import { ProjectCards } from '../../shared/components/project-cards/project-cards';

@Component({
  selector: 'app-projects',
  imports: [ProjectCards],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      name: 'Expensely',
      period: 'June 2025 – July 2025',
      tools:
        'React Native, Node.js, Express, Gemini API, Firebase Auth, Tesseract.js, Cloudinary, PostgreSQL, Redis',
      description: [
        'Built a cross-platform expense tracker app with instant receipt scanning using Tesseract.js and Gemini API, live in beta for users with real-time expense logging.',
      ],
      image: './expensely.jpg',
    },
    {
      name: 'Trekker On the Go',
      period: 'August 2024 – November 2024',
      tools: 'JavaScript, Node.js, Express.js, React.js, MongoDB, WebSocket, Data Structure',
      description: [
        'Formulated the architecture and flow for a real-time trekker coordination system addressing irregular trekker timings in front of the college.',
      ],
      image: './trekker-on-the-go.png',
    },
    {
      name: 'Dummy Hotstar',
      period: 'March 2024 – April 2024',
      tools: 'Angular, Typescript, Angular Material , Postman',
      description: [
        ' Built a cross-browser compatible Hotstar-like frontend integrating APIs with pagination, lazy loading and a modular service layer for efficient data handling and performance.',
      ],
      image: './dummy-hotstar.png',
    },
  ];
}
