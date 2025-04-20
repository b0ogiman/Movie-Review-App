import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // ✅ это нужно

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule    // ✅ и это важно!
  ],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}