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
const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
var startBtn = document.getElementById('start')
let currentQuiz = 0;
var bbb = document.getElementById('aaa');
var initialContainer = document.getElementById('#initials');
var timeLeft = 40;
var time = document.getElementById('time');
var highScore = 0;







function loadQuiz() {

    // deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)

}

function getSelected () {
    let answer;
    answerEl.forEach(answerEl => {
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
           timeLeft -=10;
         }



         currentQuiz ++
         if(currentQuiz < quizData.length) {
              loadQuiz()

         } else {
            quiz.innerHTML= `<h2>You have${timeLeft} seconds left.</h2>
            <button onclick="location.reload()"></button>`

            highScore = timeLeft;
            console.log(timeLeft);






            clearInterval(timerInterval);
            bbb.style.display="block";

        
         }




    }
})

startBtn.addEventListener('click', function(){

    loadQuiz()
    timerInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;
        if (timeLeft < 1) {
          clearInterval(timerInterval);
        }
      }, 1000);
      
    

})

getinitials.addEventListener('click', function(event) {
       event.preventDefault();
   
       var storageItem  
       if (localStorage.getItem('highScore')){
        storageItem =  JSON.parse(localStorage.getItem('highScore'));
        
       }
        else { 
            storageItem = []
            
        }
        storageItem.push({initials, highScore})
        localStorage.setItem('highScore', JSON.stringify(storageItem));

                 


})


