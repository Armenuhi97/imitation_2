import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject, tap } from 'rxjs';
import { ILanguage } from '../modules/language/models/languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  allLanguages: ILanguage[] = []
  getLanguage$ = new Subject();
  constructor(private httpClient: HttpClient, private translate: TranslateService) { }
  public getAllLanguage(): Observable<ILanguage[]> {
    return this.httpClient.get<ILanguage[]>('language/').pipe(
      tap((data: ILanguage[]) => {
        this.allLanguages = data;
        this.getLanguage$.next(data);
      })
    );
  }
  public getSelectedLanguage(): string {
    return this.translate.currentLang || 'en';
  }
  public setSelectedLanguage(lng: string = 'en') {
    this.translate.setDefaultLang(lng);
    this.translate.use(lng);
  }
  public getLanguageState() {
    return this.getLanguage$.asObservable();
  }
  public get LANGUAGES(): ILanguage[] {
    return this.allLanguages;
  }
}
