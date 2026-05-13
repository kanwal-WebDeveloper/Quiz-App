const questions = [
    {
    question: "What is the capital of France?",
    answers: [
        {text: "Berlin", correct: false},
        {text: "Madrid", correct: false},
        {text: "Paris", correct: true},
        {text: "Rome", correct: false}
    ]
   },
    {
        question: "Which language is used for web styling?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Java", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "Which tag is used for JavaScript?",
        answers: [
            { text: "js", correct: false },
            { text: "javascript", correct: false },
            { text: "script", correct: true },
            { text: "style", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlinks Text Mark Language", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "<!-- -->", correct: false },
            { text: "#", correct: false },
            { text: "**", correct: false }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Google", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Apple", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JS?",
        answers: [
            { text: "int", correct: false },
            { text: "var", correct: true },
            { text: "string", correct: false },
            { text: "float", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used for images?",
        answers: [
            { text: "<image>", correct: false },
            { text: "<img>", correct: true },
            { text: "<pic>", correct: false },
            { text: "<src>", correct: false }
        ]
    },
    {
        question: "Which CSS property changes text color?",
        answers: [
            { text: "font-color", correct: false },
            { text: "color", correct: true },
            { text: "text-style", correct: false },
            { text: "background-color", correct: false }
        ]
    },
    {
        question: "Which device is used to click items on screen?",
        answers: [
            { text: "Keyboard", correct: false },
            { text: "Monitor", correct: false },
            { text: "Mouse", correct: true },
            { text: "Printer", correct: false }
        ]
    },
        {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which language is used for web styling?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Java", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "Which tag is used to write JavaScript?",
        answers: [
            { text: "<js>", correct: false },
            { text: "<javascript>", correct: false },
            { text: "<script>", correct: true },
            { text: "<style>", correct: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlinks Text Mark Language", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "<!-- -->", correct: false },
            { text: "#", correct: false },
            { text: "**", correct: false }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Google", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Apple", correct: false }
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "int", correct: false },
            { text: "var", correct: true },
            { text: "string", correct: false },
            { text: "float", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to display images?",
        answers: [
            { text: "<image>", correct: false },
            { text: "<img>", correct: true },
            { text: "<pic>", correct: false },
            { text: "<src>", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change text color?",
        answers: [
            { text: "font-color", correct: false },
            { text: "color", correct: true },
            { text: "text-style", correct: false },
            { text: "background-color", correct: false }
        ]
    },
    {
        question: "Which device is used to click items on the screen?",
        answers: [
            { text: "Keyboard", correct: false },
            { text: "Monitor", correct: false },
            { text: "Mouse", correct: true },
            { text: "Printer", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML =
        (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz Finished! 🎉 Your score: ${score}`;
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
    }
});

startQuiz();



