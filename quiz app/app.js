


const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: 0,
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Mercury"],
        correctAnswer: 0,
    },
    {
        question: "who is your last prophet",
        choices: ["hazrat muhammad", "hazrat eisa", "hazrat moosa", "none of these"],
        correctAnswer: 0,
    },
    // Add more quiz questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const feedbackElement = document.getElementById("feedback");
const submitButton = document.getElementById("submit-btn");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

    choicesElement.innerHTML = "";
    currentQuizData.choices.forEach((choice, index) => {
        const choiceElement = document.createElement("li");
        choiceElement.innerHTML = `
      <input type="radio" id="choice${index}" name="choice" value="${index}">
      <label for="choice${index}">${choice}</label>
    `;
        choicesElement.appendChild(choiceElement);
    });

    submitButton.disabled = false;
    nextButton.disabled = true;
    feedbackElement.innerText = "";
}

function submitAnswer() {
    const selectedChoice = document.querySelector("input[name='choice']:checked");
    if (selectedChoice) {
        const selectedAnswer = parseInt(selectedChoice.value);
        const currentQuizData = quizData[currentQuestion];
        if (selectedAnswer === currentQuizData.correctAnswer) {
            score++;
            feedbackElement.innerText = "Correct!";
        } else {
            feedbackElement.innerText = "Wrong!";
        }
        submitButton.disabled = true;
        nextButton.disabled = false;
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.innerText = `Quiz Completed! Your Score: ${score}/${quizData.length}`;
    choicesElement.innerHTML = "";
    feedbackElement.innerText = "";
    submitButton.disabled = true;
    nextButton.disabled = true;
}

loadQuestion();

submitButton.addEventListener("click", submitAnswer);
nextButton.addEventListener("click", nextQuestion);
