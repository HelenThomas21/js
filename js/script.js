let score;
let num='0';
/* const firstQuestion= {
    question: "JS создан в каком году?",
    answerA: "a)1985",
    answerB:" b)1994" ,
    answerC: "с)1995",
    correctAnswer: "c",
}
const secondQuestion ={
    question: "Создатель JS",
    answerA:"a)Тим Бернерс-Ли",
    answerB:"b)Брендан Эйх",
    answerC:"c) Павел Дуров",
    correctAnswer: "b",
}
const thirdQuestion= {
    question: "Имеет ли JS кроссбраузерность?",
    answerA:"a)Yes",
    answerB: "b)No",
    correctAnswer:"a",
}
const fourthQuestion= {
    question: "Можно ли использовать подчеркивание в названиях переменных?",
    answerA:"a)Yes",
    answerB: "b)No",
    correctAnswer:"a",
} */

let questions= [{question: "JS создан в каком году?", answerA: "a)1985", answerB:" b)1994" , answerC: "с)1995", correctAnswer: "c"},
                {question: "Создатель JS", answerA:"a)Тим Бернерс-Ли", answerB:"b)Брендан Эйх", answerC:"c) Павел Дуров",correctAnswer: "b"},
                {question: "Имеет ли JS кроссбраузерность?", answerA:"a)Yes", answerB: "b)No", correctAnswer:"a"},
                {question: "Можно ли использовать подчеркивание в названиях переменных?", answerA:"a)Yes", answerB: "b)No",correctAnswer:"a"} ]

questions.forEach((item) => {
    if(item.correctAnswer=="c"){
        console.log(item.answerC)
    }
});