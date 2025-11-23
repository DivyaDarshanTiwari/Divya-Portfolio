import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  education = signal([
    {
      degree: 'BTech Hons. (CSE) In Full Stack AI',
      institution: 'UPES',
      location: 'Dehradun, India',
      period: 'August 2022 – Present',
      score: 'CGPA: 8.93',
    },
    {
      degree: 'Class XII',
      institution: 'Don Bosco Academy',
      location: 'Patna, India',
      period: 'April 2021 – March 2022',
      score: 'Percentage: 73',
    },
    {
      degree: 'Class X',
      institution: 'City Montessori School',
      location: 'Lucknow, India',
      period: 'April 2018 – March 2019',
      score: 'Percentage: 93.6',
    },
  ]);

  skills = signal({
    languages: ['Java', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
    frameworks: ['Angular', 'Express.js'],
    tools: [
      'Git',
      'GitHub',
      'Docker',
      'Redis',
      'Postman',
      'Firebase',
      'Gemini API',
      'MongoDB',
      'Mongoose',
    ],
    coursework: ['Data Structures and Algorithms', 'OOP', 'RDBMS', 'DevOps'],
    softSkills: ['Teamwork and Collaboration', 'Adaptive', 'Resilience', 'Time management'],
  });

  experience = signal([
    {
      company: 'Xebia',
      period: 'June 2025 – July 2025',
      responsibilities: [
        'Developed backend APIs and business logic for income-related data and designed optimized API requests with pagination for efficient data retrieval.',
        'Indexed key database columns to improve response time by 89% and crafted receipt digitization workflows using OCR technologies with Gemini API, integrating Firebase SDK for authentication.',
      ],
    },
    {
      company: 'LitigateIQ',
      period: 'October 2024 – May 2025',
      responsibilities: [
        'Engineered backend for the Case Management Service using Node.js and Express, enabling lawyers to digitize and manage structured case records.',
        'Constructed APIs for document uploads via a third-party service and created endpoints to fetch, post, update and delete case lists for users.',
      ],
    },
    {
      company: 'Enveu',
      period: 'June 2024 – July 2024',
      responsibilities: [
        'I built a frontend project using Angular and explored advanced Angular features to enhance performance and functionality.',
        'Applied concepts such as component based architecture and state management strengthening my expertise in modern frontend development.',
      ],
    },
  ]);

  achievements = signal([
    'Completed AWS CloudQuest: Cloud Practitioner with hands-on experience with AWS Cloud Services and security services.',
    'Solved 200+ problems on LeetCode, strengthening problem-solving and algorithmic skills.',
  ]);

  leadership = signal([
    {
      title: 'Management and Records Head',
      period: 'April 2025 – Present',
      description:
        'Leading the Management and Records Team by delegating tasks, coordinating efforts and overseeing timely execution.',
    },
    {
      title: 'Changemaker',
      period: 'Dec 2022 – July 2023',
      description:
        'Acted as a liaison between the career services team and students, ensuring effective communication.',
    },
    {
      title: 'Group Lead',
      period: 'June 2023 – July 2023',
      description:
        'Served as a liaison between the NGO and the Super Lead to facilitate seamless coordination.',
    },
  ]);
}
