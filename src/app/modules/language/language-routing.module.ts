import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChooseLanguageComponent } from "./components/choose-language/choose-language.component";
const routes: Routes = [{ path: '', component: ChooseLanguageComponent }]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LanguageRoutingModule { }