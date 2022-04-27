console.log("hey");

const startQuiz = document.getElementById("start");
// target the button
const buttonStart = document.getElementById("start-btn");
// target the timer span
const timerSection = document.getElementById("timer-section");
const questionLine = document.querySelector(".banner");
const sectionQuestion = document.getElementById("question-section");
const listAnswer = document.getElementById("list");

//current question  index
let questionIndex = 0;

// store the answers
const answers = [];

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
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does CSS stand for?",

    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    question: "What does PHP stand for?",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor",
    ],
    answer: "Hypertext Preprocessor",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
    answer: "Structured Query Language",
  },
  {
    question: "What does XML stand for?",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
    answer: "eXtensible Markup Language",
  },
];

const renderQuestions = () => {
  console.log("questions-section");
  //create section
  const section = document.createElementById("quiz-question");
  section.setAttribute("class", "quiz-question");
  //create h2 element
  const h2 = document.createElementById("banner");
  section.setAttribute("class", "banner");
  // this needs to change as it is hardcoded
  h2.textContent = "Take the challenge !";
  // create the ul list
  const ul = document.createElementById("list");
};

// buttonStart.addEventListener("click", function () {
//   startQuiz.remove();
//   questionLine.remove();
//   sectionQuestion.style.display = "block";
//   timeLeft = setInterval(setTimer, 1000);
// });

let timer = 100;

const handleStartButtonClick = () => {
  const updateTimer = () => {
    // increment timer by 1
    timer -= 1;
    //set to new timer value
    // timerSpan.textContent = timer;
    //check if timer is equal to 10
    if (timer === 0) {
      clearInterval(timerId);
    }
  };
  const timerId = setInterval(updateTimer, 1000);
  console.log(timerId);
};

// addEventListener function
buttonStart.addEventListener("click", handleStartButtonClick);

document.getElementById("start-btn").addEventListener("click", () => {
  timer -= 5;
});
