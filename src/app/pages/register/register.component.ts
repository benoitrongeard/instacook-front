import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-register',
  imports: [
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    RouterLink,
    TranslateModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  formBuilder = inject(FormBuilder);

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  register() {
    console.log(environment.apiUrl);
  }
}
