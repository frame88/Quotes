import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { SearchbarComponent } from '../../shared/searchbar/searchbar.component';
import { QuotesService } from '../../services/quotes.service';

interface Quote {
  q?: string;   // testo della citazione
  a?: string;   // autore
  c?: string;   // numero caratteri (come stringa)
  h?: string;   // versione HTML formattata della citazione
}


@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  quotes: Quote[] = [];

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.getQuotes().subscribe({
      next: (res) => {
        console.log('entrato nella fn')
        console.log(res)
        this.quotes = res;
      },
      error: (err) => {
        console.error('Errore durante il recupero delle citazioni:', err);
      }
    });    
  }

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
