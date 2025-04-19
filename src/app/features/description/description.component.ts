import { Component } from '@angular/core';
import { FooterComponent } from '../../core/footer/footer.component';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-description',
  imports: [FooterComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {

  constructor(public ui: UiService) { }
}
