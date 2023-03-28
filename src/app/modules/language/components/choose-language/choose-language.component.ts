import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { LanguagesService } from 'src/app/services/languages.service';
import { ILanguage } from '../../models/languages.model';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.component.html',
  styleUrls: ['./choose-language.component.scss']
})
export class ChooseLanguageComponent implements OnInit, OnDestroy {
  allLanguages: ILanguage[] = [];
  unsubscribe$ = new Subject<void>();
  activeLanguageCode: string = '';
  constructor(
    private languageService: LanguagesService,
    private languagesService: LanguagesService,
    private router: Router) {
    this.allLanguages = this.languageService.LANGUAGES;
    this.activeLanguageCode = this.languagesService.getSelectedLanguage();

  }

  ngOnInit() {
    this.getAllLanguages();
    this.changeBodyStyle();
  }
  private changeBodyStyle(): void {
    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.classList.remove('layout-background');
      bodyElement.classList.add('black-background');
    }
  }
  private getAllLanguages(): void {
    this.languageService.getLanguageState().pipe(takeUntil(this.unsubscribe$),
      map(() => {
        this.allLanguages = this.languageService.LANGUAGES;
      })).subscribe();
  }
  selectLanguage(lng: ILanguage): void {
    this.languageService.setSelectedLanguage(lng.code);
    setTimeout(() => {
      this.router.navigate(['/main']);
    }, 100)
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
