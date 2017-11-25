import { Component } from "@angular/core";
import {Observable} from "rxjs/Observable";
import {FirebaseService} from "./services/firebase.service";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <Image src="~/images/apple.jpg" (tap)="add()"></Image>
  `
})
export class AppComponent {
  constructor(private fbService: FirebaseService) {
  }

  add() {
      this.fbService.add();
  }
}
