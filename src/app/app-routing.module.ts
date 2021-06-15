import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateDriven } from "./form/template-driven/template-drive.component";
import { ReactiveForm } from "./form/reactive-form/reactive-form.component";

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "template-driven", component: TemplateDriven },
  { path: "reactive", component: ReactiveForm, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
