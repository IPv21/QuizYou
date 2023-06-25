const quizData = [
    {
        question: "Which is the largest planet in the solar system?",
        a: "The Sun",
        b: "Saturn",
        c: "Jupiter",
        d: "Uranus",
        correct: "c",
    },
    {
        question: "How many Harry Potter books are there?",
        a: "7",
        b: "4",
        c: "14",
        d: "Who Cares???",
        correct: "d",
    },
    {
        question: "Who is the starting center for the Philadelphia Eagles?",
        a: "Jason Kelce",
        b: "Travis Kelce",
        c: "Marcus Kelce",
        d: "Marky Mark",
        correct: "a",
    },
    {
        question: "What is Dan's Favorite Color?",
        a: "Turquoise",
        b: "Chartreuse",
        c: "Burgundy",
        d: "Lavender",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 60
let score = 60

function loadQuiz() {

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)

}

function getSelected () {
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer !== quizData[currentQuiz].correct) {
          score -10
         }
    }
})



