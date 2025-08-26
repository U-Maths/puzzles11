// ---- Data ----
const puzzles = [
  {
    question: "What is 11 × 11?",
    answer: "121",
    hint: "It’s the square of 11."
  },
  {
    question: "Multiply 34 by 11 using the pattern trick (hint: 3 _ 4). What do you get?",
    answer: "374",
    hint: "Add 3 + 4 = 7 → 3 7 4."
  },
  {
    question: "What comes next in the sequence 11, 22, 33, …?",
    answer: "44",
    hint: "It’s adding 11 each time."
  },
  {
    question: "Add the digits of 29, then write them between 2 and 9 to make 29×11.",
    answer: "319",
    hint: "2 + 9 = 11; carry the 1 → 319."
  }
];

// ---- State ----
let i = 0;

// ---- Elements ----
const startBtn = document.getElementById("startBtn");
const hintBtn = document.getElementById("hintBtn");
const submitBtn = document.getElementById("submitBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const questionEl = document.getElementById("puzzle-question");
const answerEl = document.getElementById("answer");
const feedbackEl = document.getElementById("feedback");
const counterEl = document.getElementById("counter");
const puzzleArea = document.getElementById("puzzle-area");
const progressBar = document.getElementById("progressBar");

// ---- Utils ----
const updateCounter = () => {
  counterEl.textContent = `Puzzle ${i + 1} of ${puzzles.length}`;
};
const updateProgress = () => {
  const pct = ((i) / puzzles.length) * 100;
  progressBar.style.width = `${pct}%`;
};
const showPuzzle = () => {
  questionEl.textContent = puzzles[i].question;
  feedbackEl.textContent = "";
  answerEl.value = "";
  answerEl.focus();
  prevBtn.disabled = (i === 0);
  nextBtn.disabled = (i === puzzles.length - 1);
  updateCounter();
  updateProgress();
};

const checkAnswer = () => {
  const val = answerEl.value.trim();
  if (!val) { feedbackEl.textContent = "Type an answer to check."; return; }
  const correct = puzzles[i].answer;
  if (val.toLowerCase() === correct.toLowerCase()) {
    feedbackEl.textContent = "🎉 Correct!";
    // advance after a short delay, unless last
    if (i < puzzles.length - 1) {
      setTimeout(() => { i++; showPuzzle(); }, 700);
    } else {
      progressBar.style.width = "100%";
      setTimeout(() => {
        feedbackEl.textContent += " You finished all puzzles!";
      }, 150);
    }
  } else {
    feedbackEl.textContent = "❌ Not quite — try again!";
  }
};

// ---- Wire up ----
document.getElementById("year").textContent = new Date().getFullYear();

startBtn.addEventListener("click", () => {
  puzzleArea.hidden = false;
  startBtn.disabled = true;
  showPuzzle();
});

submitBtn.addEventListener("click", checkAnswer);
answerEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});

hintBtn.addEventListener("click", () => {
  feedbackEl.textContent = "💡 " + (puzzles[i].hint || "Think about patterns with 11.");
});

prevBtn.addEventListener("click", () => { if (i > 0) { i--; showPuzzle(); } });
nextBtn.addEventListener("click", () => { if (i < puzzles.length - 1) { i++; showPuzzle(); } });
