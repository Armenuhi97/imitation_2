import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { PublicGuard } from "./guards/public.guard";
const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'languages', loadChildren: () => import('./modules/language/language.module').then(m => m.LanguageModule) },
    {
        path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
        canLoad: [PublicGuard],
        canActivate: [PublicGuard],
    },
    {
        path: '',
        loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
     
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
