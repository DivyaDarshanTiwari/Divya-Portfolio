import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-project-cards',
  imports: [MatTooltipModule],
  templateUrl: './project-cards.html',
  styleUrl: './project-cards.css',
})
export class ProjectCards {
  @Input() project: any;
}
