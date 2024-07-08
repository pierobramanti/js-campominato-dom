
Esercizio di oggi: *Campo Minato*
nome repo: *js-campominato-dom*
*Consegna*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*BONUS:*
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
SUPERBONUS: (da fare solo se si è fatto il bonus principale della difficoltà)
Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*Consigli del giorno:* :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


DIVISIONE DEL LAVORO

1 Creo una costante BOMBS a cui assegno il valore numerico 16
1.1 Creo una variabile flag impostata su true
2 Dichiaro un array vuoto
3 Creo una funzione con parametro
3.1 richiamo la variabile dell'array vuoto
3.2 Iterizzo l'array vuoto con un ciclo while finchè non contiene lo stesso numero presente nella costante BOMBS
3.2.1 Prendo un numero randomico e lo salvo in una variabile
3.2.2 Se il numero non è incluso nell'array lo inserisco
4 Creo una funzione con ritorno per il Game Over
4.1 Imposto la flag su false
4.2 Restituisco la variabile flag
5 All'interno del ciclo for i< 100
5.1 Al click del quadrato
5.1.2 SE la variabile flag è su true
5.1.3 SE l'array delle bombe include la cella clickata
5.1.4 aggiungo all'elemento clickato un classe con bg-color rosso
5.1.5 Stampo sul DOM il punteggio
5.1.6 Stampo "Hai pestato una bomba"
5.2 Altrimenti
5.2.1 aggiungo all'elemento clickato la classe "clicked-azure"
5.2.2 Incremento di 1 lo score
5.2.3 Stampo sul DOM il punteggio