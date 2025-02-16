import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { env } from 'process';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  translateService = inject(TranslateService);
  platform = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformServer(this.platform)) {
      this.translateService.setDefaultLang(
        process.env['LANG']?.substring(0, 2) ?? 'en'
      );
    }

    if (isPlatformBrowser(this.platform)) {
      this.translateService.setDefaultLang(
        navigator?.language?.substring(0, 2) ?? 'en'
      );
    }
  }
}
