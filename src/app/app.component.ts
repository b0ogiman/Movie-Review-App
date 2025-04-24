import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // ✅ это нужно
import { MoviesBrowserComponent } from './pages/movies-browser/movies-browser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    [RouterOutlet],
    HttpClientModule    // ✅ и это важно!
  ],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}