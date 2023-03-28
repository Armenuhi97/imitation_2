import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, map, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { LoginDto } from '../../dto/login.dto';
import { LanguagesService } from '../../../../services/languages.service';
import { ILanguage } from '../../../language/models/languages.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  unsubscribe$ = new Subject<void>();
  isClicked: boolean = false;
  isLoading = false;
  languages: ILanguage[] = this.languagesService.LANGUAGES;
  selectedLanguage: ILanguage | undefined = {} as ILanguage;
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private languagesService: LanguagesService,
  ) {
    this.loginForm = this.initForm();
  }
  ngOnInit(): void {
    this.setSelectLanguage();
    this.getAllLanguages();
  }
  onChangeLanguage(): void {    
    this.router.navigate(['/languages']);    
  }
  private getAllLanguages(): void {
    this.languagesService.getLanguageState().pipe(takeUntil(this.unsubscribe$),
      map(() => {
        this.setSelectLanguage();
      })).subscribe();
  }
  private setSelectLanguage(): void {
    this.languages = this.languagesService.LANGUAGES;
    if (this.languages.length) {
      const selectedLanguageCode = this.languagesService.getSelectedLanguage();
      this.selectedLanguage = this.languages.find((e) => e.code === selectedLanguageCode);
    }
  }
  private initForm(): FormGroup {
    return this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      isRememberMe: [false]
    })
  }
  public onChange(): void {
    const value = this.loginForm.get('isRememberMe')?.value;
    this.loginForm.get('isRememberMe')?.setValue(!value);
  }

  navigateToRegistrationPage(): void {
    this.router.navigate(['/auth/registration']);
  }

  signIn(): void {
    if (this.isClicked) {
      return;
    }
    this.loginForm.markAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    this.isClicked = true;
    this.isLoading = true;
    const sendObject = new LoginDto(this.loginForm.value);
    this.authService.login(sendObject, this.loginForm.get('isRememberMe')?.value).pipe(
      takeUntil(this.unsubscribe$),
      finalize(() => {
        this.isClicked = false;
        this.isLoading = false;
      })
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
