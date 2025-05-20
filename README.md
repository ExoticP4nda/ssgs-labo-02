# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.

## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.

## Installazione e Avvio

Per installare le dipendenze e avviare l'applicazione, eseguire i seguenti comandi nella cartella del progetto:

```bash
# Installa le dipendenze
npm install

# Avvia l'applicazione CLI
npm start 

# Esegui i test (se presenti)
npm test
```
---
# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una Command-Line Interface (CLI) in Node.js che permette di eseguire diverse operazioni di manipolazione su stringhe, tramite il file `index.js`.

## Funzionalità di `index.js`

Il file `index.js` permette di eseguire, tramite argomenti da riga di comando, le seguenti funzioni:

1. **Inverti Stringa**  
   Inverte l’ordine dei caratteri della stringa fornita.  
   **Esempio:**  
   ```
   node index.js 1 "ciao"
   // Output: Stringa invertita: "oaic"
   ```

2. **Controlla Palindromo**  
   Verifica se la stringa fornita è palindroma (uguale se letta da sinistra a destra e viceversa).  
   **Esempio:**  
   ```
   node index.js 2 "anna"
   // Output: La stringa "anna" è palindroma? true
   ```

3. **Tronca Stringa**  
   Tronca la stringa alla lunghezza massima specificata.  
   **Esempio:**  
   ```
   node index.js 3 "esempio" 4
   // Output: Stringa troncata (max 4): "esem"
   ```

4. **Conta Caratteri**  
   Conta le occorrenze di ciascun carattere nella stringa fornita.  
   **Esempio:**  
   ```
   node index.js 4 "test"
   // Output: Conteggio caratteri per "test": { t: 2, e: 1, s: 1 }
   ```

## Utilizzo

Per eseguire una funzione, usa il comando:
```
node index.js <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```
- `<numero_funzione>`:  
  1 = Inverti Stringa  
  2 = Controlla Palindromo  
  3 = Tronca Stringa (richiede anche `<lunghezza_massima>`)  
  4 = Conta Caratteri

- `<stringa_input>`: la stringa su cui operare
- `[parametro_aggiuntivo]`: solo per la funzione 3, indica la lunghezza massima

## Esempi

```bash
node index.js 1 "ciao"
node index.js 2 "anna"
node index.js 3 "esempio" 4
node index.js 4 "test"
```

## Requisiti

- [Node.js](https://nodejs.org/) installato sul sistema

## Note

Se vengono forniti argomenti errati o mancanti, il programma mostra un messaggio di errore e termina.

---

## Test Automatici

Per garantire il corretto funzionamento delle funzioni di manipolazione delle stringhe, sono stati implementati test automatici utilizzando [Jest](https://jestjs.io/).

I test si trovano nel file `src/tests/stringUtils.test.js` e verificano che ogni funzione (`reverseString`, `isPalindrome`, `truncateString`, `countCharacters`) si comporti come previsto in vari casi, inclusi casi limite e input particolari.

### Perché abbiamo aggiunto i test?

- **Affidabilità:** I test assicurano che le funzioni restituiscano sempre i risultati attesi.
- **Manutenzione:** Permettono di modificare il codice senza rischiare di introdurre errori.
- **Documentazione:** Mostrano con esempi pratici come dovrebbero funzionare le funzioni.

### Come eseguire i test

Per eseguire i test, usa il comando:

```bash
npm test
```
# Nota

I test raggiungo una coverage di 100%