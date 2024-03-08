const studentName = localStorage.getItem("studentName");
const schoolName = localStorage.getItem("schoolName");
const userName = document.querySelector("#userName");
const school = document.querySelector("#schoolName");
userName.textContent = "Student: " + studentName;
school.textContent = "School: " + schoolName;


const targetDate = new Date().getTime() + 2 * 61 * 1000;
const intervalId = setInterval(function () {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


  document.getElementById(
    "countdown"
  ).innerHTML = `Countdown: ${minutes}m ${seconds}s`;

  if (timeDifference <= 0) {
    clearInterval(intervalId);
    document.getElementById("countdown").innerHTML = "time expired!";
    submitQuiz();
  }
}, 1000); 

const questions = [
  {
    prompt: `Inside which HTML 
        element do we put 
        the JavaScript?`,
    options: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>",
  },

  {
    prompt: `How do you call a
        function named 
        myFunction?`,
    options: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction",
      "Call.myFunction",
    ],
    answer: "myFunction()",
  },

  {
    prompt: `How does a for loop
        start?`,
    options: [
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
      " for (i <= 5; i++)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },

  {
    prompt: `In JavaScript, which 
        of the following is 
        a logical operator?`,
    options: ["|", "&&", "%", "/"],
    answer: "&&",
  },

  {
    prompt: `A named element in a 
        JavaScript program that
        is used to store and 
        retrieve data is a _____.`,
    options: ["method", "assignment operator", "letiable", "string"],
    answer: "letiable",
  },
  {
    prompt: `What year did Nigeria gain independence.`,
    options: ["1960", "1963", "1999", "2000"],
    answer: "1960",
  },
  {
    prompt: `What is HTML.`,
    options: [
      "Hyper Text Markup Languauge",
      "Happy To Meet Language",
      "Programming language",
      "designing code",
    ],
    answer: "Hyper Text Markup Languauge",
  },
  {
    prompt: `What is the name of Nigeria's president.`,
    options: ["Barawo", "Onyiochi", "Ole", "All of the above"],
    answer: "All of the above",
  },
  {
    prompt: `Who is Wizkid.`,
    options: ["Carpenter", "Shoe Maker", "Thief", "None of the above"],
    answer: "None of the above",
  },
  {
    prompt: `What is the capital of Nigeria.`,
    options: ["Abuja", "Kano", "Gwagwalada", "Lagos"],
    answer: "Abuja",
  },
];

const questionBoard = document.querySelector(".question-board");
let questionOptions = document.getElementById("options");
let currentQuestionIndex = 0;
let displayedQuestion = document.querySelector(".questions-words");
let submitBtn = document.querySelector("#submitBtn");

function loadQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  displayedQuestion.textContent = currentQuestion.prompt;
  questionOptions.innerHTML = "";
  currentQuestion.options.forEach(function (choice, i) {
    let choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.classList.add("choiceBtn");
    choiceBtn.textContent = i + 1 + ". " + choice;
    choiceBtn.onclick = questionClick;
    questionOptions.appendChild(choiceBtn);
  });
}
loadQuestion();
let score = document.getElementById("score");
let userScore = 0;

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    userScore -= 0;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("Please go through all the questions carefully before submitting");
    }
  } else {
    currentQuestionIndex++;
    userScore++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("Please go through all the questions carefully before submitting");
    }
  }
}
let reportModal = document.getElementById("reportModal");
let cancelBtn = document.querySelector("#cancelBtn");
function hideReportModal(){
  reportModal.style.visibility = "hidden";
  window.location.href = "loginPage.html"
}
function submitQuiz() {
  clearInterval(intervalId);
  document.getElementById("countdown").innerHTML = "Done";
  displayedQuestion.style.display = "none";
  questionOptions.style.display = "none";
  submitBtn.style.display = "none";
  questionBoard.style.display = "none" ;
  reportModal.style.visibility = "visible";
  return score.textContent = `Hello ${localStorage.getItem("studentName")}, you scored ${userScore} in your quiz competition, kindly log out and wait for the compilations of all participants results, we will send a message to you, your school and your guardian. we wish you and other participant a good luck.`;

}
