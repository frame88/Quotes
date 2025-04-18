import { AfterViewInit, Component, ElementRef, ViewChild, Inject, PLATFORM_ID, ViewChildren, QueryList } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { QuotesService } from '../../services/quotes.service';
import { quote } from '../../models/quote';
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { savedQuote } from '../../models/savedQuote';
import { BehaviorSubject } from 'rxjs';
import { DeleteCtaComponent } from "../../shared/delete-cta/delete-cta.component";
import { GptService } from '../../services/gpt.service';
import { FormsModule} from "@angular/forms";
import { FooterComponent } from '../../core/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, DeleteCtaComponent, FormsModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  private splide!: Splide;

  private savedQuotesSubject = new BehaviorSubject<savedQuote[]>(this.loadFromStorage());
  savedQuotes$ = this.savedQuotesSubject.asObservable();
  
  private loadFromStorage(): savedQuote[] {
    const stored = localStorage.getItem('savedQuotes');
    return stored ? JSON.parse(stored).reverse() : [];
  }
  @ViewChildren('quoteTextRef') quoteTextElements!: QueryList<ElementRef>;
  @ViewChild('splideRef') splideElement!: ElementRef;
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  quotez: string | null = null;
  newQuoteText: string = '';
  newQuoteAuthor: string = '';  

  constructor(public quotesService: QuotesService, @Inject(PLATFORM_ID) private platformId: Object, private gptService: GptService) {}
  
  ngOnInit(): void { }
  

  ngAfterViewInit(): void { 
    this.animateQuotes();
    this.initSplide();
    gsap.registerPlugin(TextPlugin);
    if (isPlatformBrowser(this.platformId)) {  
      gsap.to(".title", {
        duration: 2,
        text: {
          value: "Quotes",
          newClass: "entry"
        },
      });
      gsap.to(".slogan", {
        duration: 2,
        delay: 1.5,
        text: {
          value: 'Trova la frase giusta, al <span style="color: orange; font-style: italic">momento giusto</span>.',
          //newClass: "class2"
        },
        innerHTML: true,
        ease: "power4.out",
        //paddingLeft: "2rem",
      });
    }
    
    const video = this.bgVideo.nativeElement;
    video.muted = true;
    video.play().catch((err) => {
    console.warn('Autoplay bloccato dal browser:', err);
    });
  }

  initSplide(): void {
    if (this.splide) {
      this.splide.destroy(true); // distrugge la vecchia istanza completamente
    }
  
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

  saveQuote(author: string, text: string, date: string): void {
    const newEntry: savedQuote = { author, text, date };

    const currentQuotes = [...this.savedQuotesSubject.value];
  
    const exists = currentQuotes.some(
      (quote) => quote.author === author && quote.text === text
    );
  
    if (!exists) {
      const updatedQuotes = [...currentQuotes, newEntry];
      localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
      this.savedQuotesSubject.next(updatedQuotes.reverse()); // aggiorna lo stream
  
      console.log('Citazione salvata:', newEntry);
    } else {
      console.log('Citazione già presente, non salvata.');
    }  
  }  

  getCurrentDate(): string {
    const now = new Date();
    const date = now.toLocaleDateString('it-IT'); // es: 15/04/2025
    const time = now.toLocaleTimeString('it-IT'); // es: 14:36:10
    return `${date} ${time}`;                     // es: 15/04/2025 14:36:10
  }

  deleteQuote(index: number): void {
    const stored = localStorage.getItem('quotes');
    const quotes: quote[] = stored ? JSON.parse(stored) : [];
  
    if (index >= 0 && index < quotes.length) {
      quotes.splice(index, 1); // rimuove l'elemento all'indice i
      localStorage.setItem('quotes', JSON.stringify(quotes));
      console.log(`Citazione all'indice ${index} rimossa.`);
    } else {
      console.warn('Indice non valido per la cancellazione.');
    }
  
    this.quotesService.quotes = quotes;
    setTimeout(() => this.initSplide(), 0);
  }

  animateQuotes(): void {
    this.quoteTextElements.forEach((elRef: ElementRef) => {
      const element = elRef.nativeElement;
      const originalText = element.innerText;
  
      gsap.fromTo(
        element,
        { text: { value: '' } },
        {
          duration: 2,
          text: { value: originalText },
          ease: 'power4.out',
          innerHTML: true,

          stagger: 2
        }
      );
    });
  }

  generaCitazione(): void {
    this.gptService.askGpt('Dammi una citazione breve sul cambiamento.').subscribe(res => {
      this.quotez = res.choices[0].message.content;
    });
  }

  //funzione per agigunt amanuale dei valori
  addManualQuote(): void {
    const trimmedText = this.newQuoteText.trim();
  
    if (!trimmedText) {
      alert('Inserisci una citazione.');
      return;
    }
  
    const quote: savedQuote = {
      text: trimmedText,
      author: this.newQuoteAuthor?.trim() || 'Anonimo',
      date: this.getCurrentDate()
    };
  
    this.saveQuote(quote.author, quote.text, quote.date);
  
    // Reset campi
    this.newQuoteText = '';
    this.newQuoteAuthor = '';
  }
  
}
