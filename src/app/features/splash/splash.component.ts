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
        console.log('Citazioni ricevute:', res);
        this.quotesService.quotes = res;
        localStorage.setItem('quotes', JSON.stringify(res));
        this.quotesService.storageQuotes = res;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Errore durante il recupero delle citazioni:', err);
      }
    });
  }


}

