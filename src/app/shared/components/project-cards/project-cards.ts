import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-cards',
  imports: [MatTooltipModule, RouterLink],
  templateUrl: './project-cards.html',
  styleUrl: './project-cards.css',
})
export class ProjectCards {
  @Input() project: any;
}
