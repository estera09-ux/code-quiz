// target the timer span
const quizStart = document.getElementById("quiz-start");
const startButton = document.getElementById("start-btn");
const listAnswer = document.getElementById("list");
const questionsList = document.getElementById("question-section");
const questionSection = document.getElementById("questions");
const timerSpan = document.getElementById("span-timer");
const theMain = document.getElementById("main");
const form = document.getElementById("form-section");

let time = 60;
let completeQuiz = false;

const handleStartButtonClick = () => {
  const updateTimer = () => {
    //increase the timer by 1
    time -= 1;

    // set text to new timer
    timerSpan.textContent = time;

    // check if timer is 0
    if (time === 0) {
      clearInterval(countDown);
    }
  };

  // start the timer
  const countDown = setInterval(updateTimer, 1000);
  console.log(countDown);
};

// adding the event listener function
startButton.addEventListener("click", handleStartButtonClick);

document.getElementById("span-timer").addEventListener("click", () => {
  time -= 5;
});

//current question  index
let questionIndex = 0;

// store the answers
const answers = [
  "Hyper Text Markup Language",
  "Cascading Style Sheet",
  "Hypertext Preprocessor",
  "Structured Query Language",
  "eXtensible Markup Language",
];

// declared my array questions
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    answer: answers[1],
  },
  {
    question: "What does CSS stand for?",

    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
    answer: answers[3],
  },
  {
    question: "What does PHP stand for?",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
    answer: answers[0],
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
    answer: answers[3],
  },
  {
    question: "What does XML stand for?",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
    answer: answers[0],
  },
];

// target the main
const startQuiz = document.getElementById("main");
// target the button

// add click event listener
const handleChoice = (event) => {
  const currentTarget = event.currentTarget;
  //get target
  const target = event.target;

  if (target.tagName === "LI") {
    // what the user has clicked on
    const value = target.getAttribute("data-value");
    console.log(value);
    // get the answer
    const question = questions[questionIndex].text;
    console.log(question);
    // answer that contains the questions and answer
    const answers = {
      questions,
      value,
    };
    // store the answers
    storeInLS("answerResults", answers);

    // remove the  questions
    removeQuestions();
    // check for the click
    if (questionIndex < questions.length - 1) {
      questionIndex += 1;
      renderQuestions();
    } else {
      renderForm();
    }
  }
};
//

const handleForm = (event) => {
  event.preventDefault();

  // input name
  const name = document.getElementById("form-section").value;

  //validation
  if (name) {
    const theResults = JSON.parse(localStorage.getItem("theResults"));
    // object with the name
    const result = {
      name,
      theResults,
    };

    // add them back into the ls
    storeInLS("theResults", result);
    localStorage.removeItem("theResults");

    document.getElementById("form-section").remove();
  } else {
    alert("enter your name");
  }
};

// results
const renderResults = () => {
  console.log("results");
};
// TODO render the submit form
