import { Component, OnInit, signal } from '@angular/core';
import { SkillCarousel } from '../../shared/components/skill-carousel/skill-carousel';

@Component({
  selector: 'app-home',
  imports: [SkillCarousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  ngOnInit(): void {
    this.typingForward();
  }
  protected introduction = signal({
    title: 'Hi, I’m Divya Tiwari.',
    description: `I am a passionate software developer specializing in building dynamic and responsive web applications using Angular, Node.js, and PostgreSQL. I enjoy turning complex problems into simple, intuitive solutions and creating user-friendly interfaces that provide seamless experiences.  
My work spans full-stack development, including designing APIs, optimizing database performance, and implementing scalable front-end architectures. I continuously explore new technologies and best practices to deliver high-quality, maintainable code.  
Through this portfolio, I aim to showcase my projects, technical skills, and the impact of my work.`,
    ending: 'Let’s create something amazing together!',
    photoUrl: './DivyaDarshan.jpg',
  });

  protected displayedStrings = signal('');
  protected index = 0;
  protected typeSpeed = 50;

  private typingForward() {
    if (this.index < this.introduction().title.length) {
      this.displayedStrings.set(
        this.displayedStrings() + this.introduction().title.charAt(this.index)
      );
      this.index++;
      setTimeout(() => this.typingForward(), this.typeSpeed);
    } else {
      setTimeout(() => this.typingBackward(), 1000);
    }
  }

  private typingBackward() {
    if (this.index > 0) {
      this.displayedStrings.set(this.displayedStrings().slice(0, -1));
      this.index--;
      setTimeout(() => this.typingBackward(), this.typeSpeed);
    } else {
      setTimeout(() => this.typingForward(), 1000);
    }
  }
}
