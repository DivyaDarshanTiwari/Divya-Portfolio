import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, // modern Angular uses standalone components
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  imports: [RouterLink],
})
export class Header {
  mobileMenuOpen = false;

  setMobileMenuOpen() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Close mobile menu automatically on larger screens
    if (event.target.innerWidth > 768) {
      this.mobileMenuOpen = false;
    }
  }

  protected routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];
}
