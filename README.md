# QuotesSSG

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Quotes
## 📖 Descrizione del progetto
Quotes è una web app sviluppata in Angular 19, pensata per offrire un'esperienza interattiva e che permetta la visualizzazione e generazione di citazioni.

I contenuti possono essere inseriti sia manualmente, sia tramite un’API che importa elementi come quelli visualizzati nel carosello di card. Inoltre, è possibile generare automaticamente citazioni grazie all’integrazione con i suggerimenti forniti da OpenAI.

Il progetto unisce funzionalità dinamiche e un’interfaccia responsive, progettata tramite un veloce wireframe, con l'integrazione di librerie moderne e tecnologie intelligenti.
🔗 Il prototipo è disponibile su [Figma](https://www.figma.com/design/2xCmtjQ0LbRXJiulP91HhN/Quotes?node-id=0-1&t=B8Uwyu1tq5BEOKeA-1).

## ⚙️ Funzionalità principali
📜 Visualizzazione di citazioni consigliate tramite carosello interattivo (Splide.js)

✍️ Aggiunta manuale di citazioni personalizzate (testo obbligatorio, autore opzionale)

🤖 Generazione automatica di citazioni tramite integrazione con GPT (OpenAI API)

🔍 Searchbar intelligente: filtro reattivo anche per parole chiave multiple e autori

🧠 Salvataggio persistente nel browser (localStorage)

🗑️ Gestione dinamica delle citazioni (aggiunta/rimozione)

📅 Tracciamento di data e ora delle citazioni salvate

🌍 Interfaccia responsiva e mobile-friendly

## 💡 Stack e tecnologie utilizzate
Angular 19

GSAP – animazioni testuali dinamiche

Splide.js – carosello custom con autoplay e loop

OpenAI GPT-3.5-turbo – generazione contenuti via API

RxJS / BehaviorSubject – gestione reattiva dello stato

localStorage – persistenza dei dati utente

SCSS – struttura modulare per gli stili (@import, mixin, variabili)

Vercel – hosting e deploy automatico


