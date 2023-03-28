import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { LanguagesService } from './services/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'imitation';
  unsubscribe$ = new Subject<void>();
  constructor(private translateService: TranslateService, private languageService: LanguagesService) {
    this.translateService.use('en');
  }
  ngOnInit() {
    this.getAllLanguages();
  }
  private getAllLanguages() {
    this.languageService.getAllLanguage().pipe(takeUntil(this.unsubscribe$)).subscribe();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

  }
}
