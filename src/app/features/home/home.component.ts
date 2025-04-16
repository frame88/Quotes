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

  quotes: quote[] = [];
  storageQuotes: quote[] = JSON.parse(localStorage.getItem('quotes') || '[]');

  constructor(private quotesService: QuotesService) {}
  
  ngOnInit(): void {
    this.quotesService.getQuotes().subscribe({
      next: (res) => {
        console.log('entrato nella fn')
        console.log(res)
        this.quotes = res;
        localStorage.setItem('quotes', JSON.stringify(res));
      },
      error: (err) => {
        console.error('Errore durante il recupero delle citazioni:', err);
      }
    });    
    this.storageQuotes = JSON.parse(localStorage.getItem('quotes') || '[]');
  }
  
  @ViewChild('splideRef') splideElement!: ElementRef;
  
  ngAfterViewInit(): void {    
    const splide = new Splide(this.splideElement.nativeElement, {
      type: 'loop',
      perPage: 4,
      autoplay: true,
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
