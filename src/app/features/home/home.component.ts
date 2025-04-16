import { AfterViewInit, Component } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { SearchbarComponent } from '../../shared/searchbar/searchbar.component';

interface Quote {
  q: string;   // testo della citazione
  a: string;   // autore
  c: string;   // numero caratteri (come stringa)
  h: string;   // versione HTML formattata della citazione
}


@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  readonly quotes: HttpResourceRef<Quote[] | undefined> = httpResource<Quote[]>(
    () => 'https://zenquotes.io/api/quotes'
  );

  ngAfterViewInit(): void {

    new Splide( '#splide', {
      type : 'loop',
      //drag: 'free',
      //snap: true,
      autoplay: true,
      interval: 2500,
      perPage: 1,
      height   : '460px',
      focus    : 'center',
      autoWidth: true,
      pagination: false,
      arrows: false
    }).mount();
  }

}
