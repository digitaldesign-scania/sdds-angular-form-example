import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { TemplateDriven } from "./form/template-driven/template-drive.component";
import { ReactiveForm } from "./form/reactive-form/reactive-form.component";
import { CustomDropdown } from "./form/dropdown-wrapper/dropdown-wrapper.component";

@NgModule({
  declarations: [AppComponent, TemplateDriven, ReactiveForm, CustomDropdown],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
