import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Subject, takeUntil } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { RegistrationDto } from '../../dto/registration.dto';
import { mustMatchValidator } from '../../validators/mustmatch.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public registrationForm: FormGroup;
  private isClicked = false;
  unsubscribe$ = new Subject<void>()
  isLoading = false;
  // captchaConfig: any = {
  //   length: 6,
  //   cssClass: 'custom',
  //   back: {
  //     stroke: "#2F9688",
  //     solid: "#f2efd2"
  //   },
  //   font: {
  //     color: "#000000",
  //     size: "35px"
  //   }
  // };
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registrationForm = this.initForm();
  }

  private initForm(): FormGroup {
    return this.fb.group({
      username: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required],
      phone_number: [null, Validators.required],
      referal_code: [null, Validators.required],
    },
      {
        validators: [mustMatchValidator('password', 'confirm_password', 'Password', 'Confirm Password')],
      });
  }

  navigateToLoginPage(): void {
    this.router.navigate(['/auth/login']);
  }
  signUp(): void {
    if (this.isClicked) {
      return;
    }
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.isClicked = true;
    const sendObject = new RegistrationDto(this.registrationForm.value);
    this.authService.registration(sendObject).pipe(
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
