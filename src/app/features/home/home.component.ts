import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { SearchbarComponent } from '../../shared/searchbar/searchbar.component';
import { QuotesService } from '../../services/quotes.service';
import { quote } from '../../models/quote';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  constructor(public quotesService: QuotesService) {}
  
  ngOnInit(): void {}
  
  @ViewChild('splideRef') splideElement!: ElementRef;
  
  ngAfterViewInit(): void {    
    const splide = new Splide(this.splideElement.nativeElement, {
      type: 'loop',
      perPage: 4,
      autoplay: false,
      interval: 4000,
      pauseOnHover: true,
      arrows: false,
      pagination: false,
      autoScroll: {
        speed: 1,
        pauseOnHover: true
      },
    });

    splide.mount({ AutoScroll });
  }
    
}
