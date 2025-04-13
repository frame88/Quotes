import { Component, inject } from '@angular/core';
import { httpResource, HttpResourceRef } from '@angular/common/http';
import { signal } from '@angular/core';
import { effect } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Quote {
  q: string;   // testo della citazione
  a: string;   // autore
  c: string;   // numero caratteri (come stringa)
  h: string;   // versione HTML formattata della citazione
}


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly quotes: HttpResourceRef<Quote[] | undefined> = httpResource<Quote[]>(
    () => 'https://zenquotes.io/api/quotes'
  );

}
