import { Component } from "@angular/core";

@Component({
  selector: "template-driven",
  templateUrl: "./template-driven.component.html",
  styleUrls: ["../form.component.scss"]
})
export class TemplateDriven {
  username = "Add username";
  myValue: any = {};
  initialValue: any = {};
  list = [
    { value: "opt-1", label: "Jakarta" },
    { value: "opt-2", label: "Stockholm" },
    { value: "opt-3", label: "Barcelona" }
  ];

  clickEvent() {
    console.log("click");
  }
  logNgModel(model) {
    console.log("Change:", model.viewModel, model);
  }
}
