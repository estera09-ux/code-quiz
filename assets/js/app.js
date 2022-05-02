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

// addEventListener function
// time.addEventListener("click", handleStartButtonClick);

// document.getElementById("start-btn").addEventListener("click", () => {
// timerSpan -= 5;
// });
//

const startQuiz = document.getElementById("start");
// target the button
const buttonStart = document.getElementById("start-btn");
const main = document.getElementById("main");

// add click event listener
const createList = () => {
  //   create section
  const section = document.createElement("section");
  // add class attribute
  section.setAttribute("class", "quiz-question");
  // create h2
  const h2 = document.createElement("h2");
  //create ul
  const ul = document.createElement("ul");
  // for each  question create li append to ul
  for (let i = 0; i < questions.length; i += 1) {
    // create li
    const li = document.createElement("li");
    // create li to ul
    ul.appendChild(li);
  }
  //append h2 and ul to section
  section.append(h2, ul);
  // append section to main
  main.append(section);
};
buttonStart.addEventListener("click", createList);
console.log(buttonStart);

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

// const renderQuestions = () => {
//   console.log("questions-section");
//   //create section
//   const section = document.createElementById("quiz-question");
//   section.setAttribute("class", "quiz-question");
//   //create h2 element
//   const h2 = document.createElementById("banner");
//   section.setAttribute("class", "banner");
//   // this needs to change as it is hardcoded
//   h2.textContent = "Take the challenge !";
//   // create the ul list
//   const ul = document.createElementById("list");
// };
