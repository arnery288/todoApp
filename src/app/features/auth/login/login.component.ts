import { Component } from '@angular/core';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
}
