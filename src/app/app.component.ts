import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ToolbarComponent} from "../public/toolbar/toolbar.component";
import {BeanCardComponent} from "./commerce/components/bean-card/bean-card.component";
import {FooterComponent} from "../public/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, BeanCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jelly-beans';
}
