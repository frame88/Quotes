import { AfterViewInit, Component, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { SearchbarComponent } from '../../shared/searchbar/searchbar.component';
import { QuotesService } from '../../services/quotes.service';
import { quote } from '../../models/quote';
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  constructor(public quotesService: QuotesService, @Inject(PLATFORM_ID) private platformId: Object) {}
  
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

    gsap.registerPlugin(TextPlugin);
    if (isPlatformBrowser(this.platformId)) {  
      gsap.to(".title", {
        duration: 2,
        text: {
          value: "Quotes",
          newClass: "class2"
        },
      });
      gsap.to(".slogan", {
        duration: 2,
        text: {
          value: 'Trova la frase giusta, al <span style="color: orange; font-style: italic">momento giusto</span>.',
          //newClass: "class2"
        },
        ease: 'power2.out',
        innerHTML: true,
        //paddingLeft: "2rem",
      });
    }
  }
    
}
