import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-xss-vulnerable',
  standalone: true, // Mark it as standalone
  imports: [CommonModule, FormsModule], // Import necessary modules
  template: `
    <h2>Vulnerable XSS Example</h2>
    <input [(ngModel)]="userInput" placeholder="Enter content here">
    <button (click)="updateContent()">Update Content</button>
    <div [innerHTML]="userInput"></div>
  `,
})
export class XssVulnerableComponent {
  userInput: string = '';

  updateContent() {
    // Your update logic here
  }
}
