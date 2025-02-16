import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  translateService = inject(TranslateService);

  constructor() {
    // With server side, language is xx-XX format, but with client side, it's xx format
    this.translateService.setDefaultLang(
      navigator.language?.substring(0, 2) ?? 'en'
    );
  }
}
