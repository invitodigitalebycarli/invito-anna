# Unfold Magic

PROMPT

Canvas: 9:16 fisso

Modalità: Single‑page, nessuno scroll

Scene:

• Scene 1 → Cover (video busta bloccato)

• Scene 2 → Video in riproduzione

• Scene 3 → Invito finale (immagine statica)

Elementi forniti:

• video_busta.mp4 (min 3s)

• invito_finale.png (immagine completa, NON modificabile)

• audio_latinamerica.mp3 (musica da avviare con il video)

---

SCENA 1 — COVER (VIDEO BLOCCATO)

Elemento principale

• Inserire video_busta.mp4 come frame statico (poster frame), NON in riproduzione.

• Occupare l’intero canvas 9:16.

Overlay: “Tocca per aprire”

• Testo: “Tocca per aprire”

• Posizione: parte alta del video, sopra la metà superiore.

• Stile:• Font elegante, serif o sans‑serif premium.

• Colore testo: nero.

• Casella attorno: rettangolo con velo trasparente (opacity 35–45%).

• Bordo sottile, elegante.

• Animazione:• Floating verticale (su‑giù lento, 1.5–2s loop).

• Ease-in-out morbido.

Interazione (trigger)

OnTap → Scene 2

• Avvia riproduzione video.

• Avvia audio audio_latinamerica.mp3 in sync (timestamp 0).

• Volume: 0.35–0.45 (elegante, non invasivo).

• Disattivare overlay “Tocca per aprire”.

---

SCENA 2 — VIDEO IN RIPRODUZIONE

Video

• Riproduzione automatica del video della busta.

• Nessun controllo visibile.

• Al termine del video → trigger automatico.

Transizione

OnVideoEnd → Scene 3

• Effetto: fade-out del video (0.6–0.8s).

• Fade-in dell’immagine finale (0.6–0.8s).

• Nessuna animazione extra.

---

SCENA 3 — INVITO FINALE (IMMAGINE FISSA)

Elemento principale

• Inserire invito_finale.png come immagine NON modificabile.

• Deve occupare l’intero canvas 9:16.

• Nessuna alterazione di:• colori

• testi

• pulsanti rotondi

• layout

Pulsanti rotondi già presenti nell’immagine

Devono diventare interattivi, mantenendo forma e posizione originale.

Pulsante Dress Code

OnTap → Apri finestra decorata (overlay)

• Tema: elegante, premium, coerente con l’immagine.

• Palette: derivata dai colori dell’invito.

• Contenuto: “Dresscode: Elegant”.

Pulsante Location

OnTap → Apri finestra decorata

• Tema: identico al precedente, coerente.

• Contenuto: “Villa Infinito, Palermo”.

Pulsante Conferma

OnTap → Apri finestra decorata

• Tema: coerente.

• Contenuto: embed/link al modulo Google.

Caratteristiche delle finestre

• NON anonime.

• Devono essere abbinate allo stile dell’invito.

• Bordo morbido, ombre premium, sfondo semi‑trasparente.

• Chiudibili con X elegante in alto a destra.

---

OVERLAY AGGIUNTIVI (NON MODIFICANO L’IMMAGINE)

🔊 Pulsante Musica (in alto a destra)

• Forma: tondo.

• Dimensione: 40–48px.

• Posizione: top-right, margine 24–32px.

• Stile: minimal, premium, non invasivo.

• Icona: play/pause elegante.

Funzione:

OnTap → toggle musica (pause/play)

La musica deve continuare anche in Scene 3 finché non viene stoppata.

---

🔁 Pulsante “Riguarda l’invito” (in alto a sinistra)

• Forma: tondo o rettangolo arrotondato.

• Posizione: top-left, margine 24–32px.

• Stile: elegante, overlay discreto.

• Testo: “Riguarda”.

Funzione:

OnTap → ritorna a Scene 1 con video bloccato e overlay “Tocca per aprire”.

---

VINCOLI TECNICI

Immagine finale

• NON deve essere alterata, ritagliata, filtrata, ridisegnata o modificata.

Pulsanti originali

• Devono essere riconosciuti come hit‑area interattive senza cambiare estetica.

Musica

• Parte in Scene 2.

• Continua in Scene 3.

• Può essere stoppata solo dal pulsante in alto a destra.

Finestre

• Devono essere overlay separati.

• Non devono spostare o alterare l’immagine.

• Devono essere coerenti con il tema romantico‑premium.

Animazioni

• Solo:• floating del testo “Tocca per aprire”

• dissolvenza video → immagine

• Nessun altro movimento.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://invito-anna.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/17555d9c-dbb2-4b05-af4c-0176aadef62a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
