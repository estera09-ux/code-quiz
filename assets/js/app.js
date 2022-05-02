// target the timer span
const quizStart = document.getElementById("quiz-start");
const startButton = document.getElementById("start-btn");
const listAnswer = document.getElementById("list");
const questionsList = document.getElementById("question-section");
const questionSection = document.getElementById("questions");
const timerSpan = document.getElementById("span-timer");
const theMain = document.getElementById("main");
const form = document.getElementById("form-section");

const handleStartBtn = () => {
  startQuiz.load();
  createSection();

  // initialize local storage
  initializeLocalStorage();
  //render question
  renderQuestions();
};

// start button
startButton.addEventListener("click", handleStartBtn);

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

const questionsRenders = () => {
  // get current  question
  const currentQuestion = questionIndex[questionIndex];
  // questions

  console.log("questions", currentQuestion);

  // create section
  const section = document.createElement("question-section");
  section.setAttribute("class", "question-section");

  // create the h2 element
  const h2 = document.createElement("question-banner");
  // set the  h2
  section.setAttribute("class", "question-banner");
  // set the text content in the h2
  h2.textContent = `${questionIndex + 1}. ${currentQuestion.question}`;

  // create the ul and append the answers
  const ul = document.createElement("the-list");
  // add a class attribute
  ul.setAttribute("class", "the-list");

  // create li
  const li1 = document.createElement("list-items");
  li1.setAttribute("class", "list-items");
  li1.setAttribute("data-value", currentQuestion.options[0]);
  li1.textContent = currentQuestion.options[0];
  // append child list item to the parent which is the ul

  const li2 = document.createElement("list-items");
  li2.setAttribute("class", "list-items");
  li2.setAttribute("data-value", currentQuestion.options[1]);
  li2.textContent = currentQuestion.options[1];

  //TODO the li3 and append the ul to the section
  const li3 = document.createElement("list");
  li3.setAttribute("class", "list-items");
  li3.setAttribute("data-value", currentQuestion.questions[2]);
  li3.textContent = currentQuestion.questions[2];

  ul.append(li1, li2, li3);

  // append h2 and the ul to the section
  section.append(h2, ul);
  // append the section to the document
  main.append(section);
  // add event listener
  section.addEventListener("click", handleStartBtn);
};
