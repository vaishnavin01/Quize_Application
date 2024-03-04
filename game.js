const quizequestions = [
  {
    question: "1) The staple food of vedic Aryan was?",
    a: "Barley & Rice",
    b: "Milk Products",
    c: "Rice & pulses",
    d: "vegetable & fruits",
    ans: "ans2",
  },
  {
    question: "2) Fathometer used to measure",
    a: "Earthquake",
    b: "Rainfall",
    c: "Ocian Depth",
    d: "Sound Intensity",
    ans: "ans3",
  },
  {
    question: "3)which of the following is milk sugar?",
    a: "Glucose",
    b: "Maltose",
    c: "Fructose",
    d: "Lactose",
    ans: "ans4",
  },
  {
    question: "4) 13-chambered heart occures in",
    a: "Leech",
    b: "Erthworm",
    c: "Snail",
    d: "Cockroach",
    ans: "ans4",
  },
];
const question = document.querySelector(".question");
const option1 = document.querySelector("#op1");
const option2 = document.querySelector("#op2");
const option3 = document.querySelector("#op3");
const option4 = document.querySelector("#op4");
const submit = document.querySelector(".btn");
const answers = document.querySelectorAll(".select");
const showscore = document.querySelector("#score");

let questioncounter = 0;
let score = 0;

const loadquestion = () => {
  const questionList = quizequestions[questioncounter];
  question.innerText = questionList.question;
  op1.innerText = questionList.a;
  op2.innerText = questionList.b;
  op3.innerText = questionList.c;
  op4.innerText = questionList.d;
};
loadquestion();
const getcheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElement) => {
    if (curAnsElement.checked) {
      answer = curAnsElement.id;
    }
  });
  return answer;
};
submit.addEventListener("click", () => {
  const checkedanswer = getcheckAnswer();
  console.log(checkedanswer);

  if (checkedanswer === quizequestions[questioncounter].ans) {
    score++;
  }
  deselectall = () => {
    answers.forEach((curAnsElement) => {
      curAnsElement.checked = false;
    });
  };
  deselectall();
  questioncounter++;
  if (questioncounter < quizequestions.length) {
    loadquestion();
  } else {
    showscore.innerHTML = `
    <button class="btn1" onclick="showmyscore()">Score</button>
    <button class="btn1" onclick="location.reload()">play again</button> `;
    showscore.classList.remove("scorearea");
  }
});

showmyscore = () => {
  showscore.innerHTML = ` <h3><b>SCORE : </B>${score}/${quizequestions.length}</h3>
<button class="btn1" onclick="location.reload()">play again</button>`;
  showscore.classList.remove("scorearea");
};
