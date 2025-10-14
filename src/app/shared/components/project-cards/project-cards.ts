import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  imports: [],
  templateUrl: './project-cards.html',
  styleUrl: './project-cards.css',
})
export class ProjectCards {
  @Input() project: any;
}
