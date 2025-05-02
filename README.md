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

# 🚀 Getting Started

Installa le dipendenze

```bash
npm install
```

Inserisci la tua OpenAI API Key

```bash
export const environment = {
  production: false,
  openaiApiKey: 'sk-...'
};
```

Avvia l'app in locale

```bash
ng serve
```

# Contatti
📧 leuzzibiz@gmail.com


