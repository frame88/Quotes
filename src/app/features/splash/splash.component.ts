import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesService } from '../../services/quotes.service';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-splash',
  imports: [LoaderComponent],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})

export class SplashComponent implements OnInit {
  constructor(private router: Router, public quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.getQuotes().subscribe({
      next: (res) => {
        console.log('entrato nella fn')
        console.log(res)
        this.quotesService.quotes = res;
        localStorage.setItem('quotes', JSON.stringify(res));
      },
      error: (err) => {
        console.error('Errore durante il recupero delle citazioni:', err);
      }
    });    
    this.quotesService.storageQuotes = JSON.parse(localStorage.getItem('quotes') || '[]');

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1500);
  }

}

