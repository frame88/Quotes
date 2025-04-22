import { Component } from '@angular/core';
import { FooterComponent } from '../../core/footer/footer.component';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  imports: [FooterComponent, CommonModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  isLandscape = false;  


  constructor(public ui: UiService) {
      this.ui.orientation$.subscribe(value => {
      this.isLandscape = value;
    });
  }
}
