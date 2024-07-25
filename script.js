const quizData = [
  {
    question: "뉴진스 멤버가 아닌것은?",
    choices: ["하니", "민지", "원영", "혜인"],
    correct: 2,
  },
  {
    question: "뉴진스 멤버가 아닌것은?",
    choices: ["하니", "민지", "원영", "혜인", ""],
    correct: 2,
  },
  {
    question: "뉴진스 멤버가 아닌것은?",
    choices: ["하니", "민지", "원영", "혜인", "", ""],
    correct: 2,
  },
];

const ask = document.getElementById("question");
const choices = document.getElementById("choices");
const submit = document.getElementById("submit");
let currentQuestion = 0; //현재 문제의 순서
let userAnswer = null; //유저가 입력한 정답
let correctAnswer = null; //현재 문제 정답
let correctCount = 0; //정답수

const submitProblem = (num) => {
  ask.textContent = quizData[num].question;
  correctAnswer = quizData[num].correct;
  choices.innerHTML = "";

  for (let i = 0; i < quizData[num].choices.length; i++) {
    const choice = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.textContent = quizData[num].choices[i];
    input.setAttribute("type", "radio");
    input.setAttribute("name", "answer");
    input.setAttribute("class", "answer");
    input.setAttribute("value", i);
    label.addEventListener("click", () => {
      userAnswer = Number(input.value);
    });

    label.appendChild(input);
    choice.appendChild(label);
    choices.appendChild(choice);
  }
};

submit.addEventListener("click", () => {
  if (userAnswer === correctAnswer) {
    correctCount++;
  }
  if (currentQuestion + 1 === quizData.length) {
    ask.textContent = `${quizData.length}문제중 ${correctCount}문제를 맞췄습니다.`;
    choices.innerHTML = "";
    submit.textContent = "재시작";
    submit.removeEventListener("click", submitProblem);
    submit.addEventListener("click", () => {
      location.reload();
    });
  } else {
    submitProblem(++currentQuestion);
  }
});

submitProblem(currentQuestion);
