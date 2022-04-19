"use strict";

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");

  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  setStatusClass(document.body, correct);

  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);

  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "Who invented C?",
    answers: [
      { text: "Dennis Ritche", correct: true },
      { text: "Guido Von Rossum", correct: false },
	  { text: "Bjarne Stroustrup", correct: false }
    ],
  },

  {
    question: "Who is chancellor of LPU?",
    answers: [
      { text: "Ashok Mittal", correct: true },
      { text: "Rashmi Mittal", correct: false },
      { text: "Bhatia", correct: false },
      { text: "Gowtham", correct: false },
    ],
  },

  {
    question: "Is web development fun?",
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },

  {
    question: "Where LPU is located?",
    answers: [
      { text: "Bihar", correct: false },
      { text: "Punjab", correct: true },
    ],
  },
  
  {
	  question: "who is Iron man of India?",
	  answers: [
	  { text: "mahatma gandhi", correct: false },
      { text: "sardar vallabai patel", correct:true },
	  ],
  },
  
  {
	  question: "who is father of mathematics?",
	  answers: [
	  { text: "archimedes", correct: true },
      { text: "ramanujan", correct: false },
	  ],
  },
];

$(document).ready(function(){ 
 
    $(".primaryContained").on('click', function(){
    $(".comment").addClass("commentClicked");
  });
  $("textarea").on('keyup.enter', function(){
    $(".comment").addClass("commentClicked");
  });
  });
new Vue({
    el: "#app",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
      }
  }
  });