import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from '../password/password.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthBottomContentComponent } from './components/auth-bottom-content/auth-bottom-content.component';
import { RequiredFieldPipe } from 'src/app/pipes/required-field.pipe';
import { NgxMaskModule } from 'ngx-mask'
import { LoaderModule } from '../loader/loader.module';
// import { NgxCaptchaModule } from '@binssoft/ngx-captcha';
// import { BotDetectCaptchaModule } from 'angular-captcha'; 

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    AuthBottomContentComponent,
    RequiredFieldPipe
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
    TranslateModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
    LoaderModule,
    // BotDetectCaptchaModule
    // NgxCaptchaModule
  ]
})
export class AuthModule { }
