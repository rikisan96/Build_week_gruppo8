// TIPS:

// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno. 
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale) 
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile
// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀
//funzioni da fare:
//generazione dinamica di domanda e risposte sui bottoni/div
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];


var punteggio = 0;
var risposteErrate = 10 - punteggio;
var indiceDomandaCorrente = 0;
var intervalId; 
var domandeCorrette = 0, domandeTotali = questions.length;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("risposte").addEventListener("click", function () {
      rispostaAlClick();
      console.log(indiceDomandaCorrente);
  });

  mostraDomanda(indiceDomandaCorrente);
});




/******** DICHIARAZIONE FUNZIONI TIMER **********/


function timer() {
  let i, text;
  const tempo = 60;
  i = 60;
  text = document.querySelector("#time");
  const progressElement = document.querySelector('.progress');
  const defaultColor = '#d92792'; 
  intervalId = setInterval(function () {
    if (i >= 0) {
      text.innerHTML = i;
      const progress = (1 - i / tempo) * 283;
      progressElement.style.strokeDashoffset = progress;
      if (i <= 15) {
        progressElement.style.stroke = 'red';
      } else {
        progressElement.style.stroke = defaultColor;
      }
    } else {
      clearInterval(intervalId);
    
      progressElement.style.stroke = defaultColor;
      if (indiceDomandaCorrente === questions.length - 1) {
        window.location.href = "./results.html";
        return;
      }
      indiceDomandaCorrente++;
      mostraDomanda(indiceDomandaCorrente);

      /*
      window.location.href = "/Build_week_gruppo8/results.html";
      console.log(indiceDomandaCorrente);*/
    }
    i--;
  }, 1000);
}


//--------------------------------- funzione mostra domanda nel box------------------------//

function mostraDomanda(index) {
  let contenitoreDomanda, domandaHTML, contenitoreRisposta, risposte;
  let num_domanda, text;

  contenitoreDomanda = document.getElementById("form_domande");

  if (index >= questions.length) {
    window.location.href = "././results.html";
    return;
  }

  domandaHTML = `<h3>${questions[index].question}</h3>`;
  contenitoreDomanda.innerHTML = domandaHTML;
  contenitoreRisposta = document.getElementById("container");

  risposte = [...questions[index].incorrect_answers, questions[index].correct_answer];
  risposte = shuffleArray(risposte);

  let rispostaHTML = "";
  for (let i = 0; i < risposte.length; i++) {
    rispostaHTML += `<a class="bottoneRisposte">${risposte[i]}</a>`;
  }
  contenitoreRisposta.innerHTML = rispostaHTML;

  num_domanda = document.querySelector(".centrato");
  text = `<p>QUESTION ${index + 1}<span id="numeroDomande"> / ${questions.length}</span></p>`;
  num_domanda.innerHTML = text;
  clearInterval(intervalId);
  timer();
}

// Funzione per randomizzare un array in modo casuale
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// funzione per salvare la risposta cliccata e cambiare domanda quando si clicca una risposta
function rispostaAlClick() {
  
  calcolaPunteggio();
  if (indiceDomandaCorrente === questions.length) {
    window.location.href = "././results.html?corrette=" + domandeCorrette + "&totali=" + domandeTotali;
    mostraRisultati ();
    return;
  }
  indiceDomandaCorrente++;
  mostraDomanda(indiceDomandaCorrente);

  console.log("funziona");
}

//----------------------CALCOLO PUNTEGGIO--------------------------//

function calcolaPunteggio() {
  let selezionaRispostaCliccata, rispostaCorretta;
  selezionaRispostaCliccata = event.target.innerText;
  rispostaCorretta = questions[indiceDomandaCorrente].correct_answer;
  if (selezionaRispostaCliccata === rispostaCorretta) {
    punteggio++;
    console.log("correct");
  } else {
    console.log("uncorrect");
  }
  domandeCorrette = punteggio;
  console.log((domandeCorrette / domandeTotali) * 100 + "%");
}
function mostraRisultati () {
  const parametriURL = new URLSearchParams (window.location.search);
  const domandeCorrette = parseInt (parametriURL.get("corrette"));
  const domandeTotali = parseInt (parametriURL.get("totali"));
  let punteggioDomandeCorrette = document.querySelector(".sx");
  let punteggioDomandeSbagliate = document.querySelector(".dx");
  punteggioDomandeCorrette.innerHTML = `<h3>${domandeCorrette}</h3>`;
  punteggioDomandeSbagliate.innerHTML = `<h3>${domandeTotali}</h3>`;
}

//-----------------------------CALCOLO PUNTEGGIO-------------------------------------------------------//

/* function calcolaPercentuale(domandeCorrette, domandeTotali) {
    return (domandeCorrette / domandeTotali) * 100;
}

// Questa funzione dovrebbe essere chiamata quando l'utente ha risposto a tutte le domande
function mostraRisultati(domandeCorrette, domandeTotali) {
    const percentuale = calcolaPercentuale(domandeCorrette, domandeTotali);
    // Aggiornare il testo della percentuale nel tuo HTML
    document.getElementById('testo').textContent = `${percentuale}%`;
    // Qui puoi anche aggiungere altre azioni come reindirizzare l'utente alla pagina dei risultati
    window.location.href = "./results.html";
} */