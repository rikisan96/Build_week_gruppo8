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
//-----------------------------WELCOME-------------------------------//


//-------------------QUIZ----------------------//

var punteggio = 0;


// Funzione del timer
const timer = function () {
  var i = 10;
  var text = document.querySelector("#secondi_rimanenti p");

  intervalId = setInterval(function () {
      if (i >= 0) {
          text.innerHTML = i;
      } else {
          clearInterval(intervalId);
          text.innerHTML = "BOOMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM!";
      }
      i--;            
  }, 500);
}


function showQuestion(index) {
    var questionContainer = document.getElementById("form_domande");
    var questionHTML = "<h3>" + questions[index].question + "</h3>";
    questionContainer.innerHTML = questionHTML;

    var answerContainer = document.getElementById("risposte");
    var answersHTML = "";
    for (var i = 0; i < questions[index].incorrect_answers.length; i++) {
        answersHTML += "<button class='bottoneRisposte'>" + questions[index].incorrect_answers[i] + "</button>";
    }
    answersHTML += "<button class='bottoneRisposte'>" + questions[index].correct_answer + "</button>";
    answerContainer.innerHTML = answersHTML;

    let num_domanda = document.querySelector(".centrato");
    let text = `<p>QUESTION ${index + 1}<span id="numeroDomande">/${questions.length}</span></p>`;
    num_domanda.innerHTML = text;

    // Reset del timer ad ogni nuova domanda
    clearInterval(intervalId); // Interrompiamo l'intervallo precedente
    timer();
}

var currentQuestionIndex = 0;
var intervalId; // Variabile per memorizzare l'ID dell'intervallo

function handleAnswerClick() {
    var selectedAnswer = event.target.innerText;
    var correctAnswer = questions[currentQuestionIndex].correct_answer;
    
    if (selectedAnswer === correctAnswer) {
        punteggio++;
        console.log("correct")
    }else{
      console.log("uncorrect")
    }
    

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert("Hai completato il quiz! Punteggio totale: " + punteggio);
    }
}

document.getElementById("risposte").addEventListener("click", function(){
  handleAnswerClick();
})


showQuestion(currentQuestionIndex);













//-----------BARRA DI AVANZAMENTO-------------//

