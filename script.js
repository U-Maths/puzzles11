// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Helpers
const normalizeNum = (s) => (s || "").toString().replace(/[,\s]/g, "");

// Strobogrammatic check (works on the string form)
function isStrobogrammatic(str) {
  if (!str) return false;
  const map = { "0":"0", "1":"1", "8":"8", "6":"9", "9":"6" };
  let l = 0, r = str.length - 1;
  while (l <= r) {
    const a = str[l], b = str[r];
    if (!(a in map) || map[a] !== b) return false;
    l++; r--;
  }
  return true;
}

// Primality check (for positive integers in Number range)
function isPrime(str) {
  // reject non-digits
  if (!/^\d+$/.test(str)) return false;
  const n = Number(str);
  if (!Number.isSafeInteger(n)) return false;
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  if (n % 3 === 0) return n === 3;
  // 6k ± 1 wheel
  let i = 5, step = 2;
  while (i * i <= n) {
    if (n % i === 0) return false;
    i += step;
    step = 6 - step;
  }
  return true;
}

// ----- Correct answers & sets -----
const P1 = { main: ["101"] }; // next smallest strobogrammatic prime
const P2_VALID = new Set(["1331","2662","3993","4114","5445","6776","8228","9559"]);
const P2_EXT = "8";
const P3 = "44";
const P3_EXT = "375";

// ===== Puzzle 1 =====
const p1Answer = document.getElementById("p1-answer");
const p1Check  = document.getElementById("p1-check");
const p1Feedback = document.getElementById("p1-feedback");

p1Check.addEventListener("click", () => {
  const raw = p1Answer.value;
  const val = normalizeNum(raw);
  if (!val) { p1Feedback.textContent = "Please enter an answer."; return; }

  if (P1.main.includes(val)) { p1Feedback.textContent = "🎉 Correct!"; return; }

  const strob = isStrobogrammatic(val);
  const prime = isPrime(val);

  if (strob && prime) {
    p1Feedback.textContent = "Close — that’s a strobogrammatic prime, but not the next after 11. Try a smaller one.";
  } else if (strob && !prime) {
    p1Feedback.textContent = `Not quite — whilst ${val} is strobogrammatic, it is not prime.`;
  } else if (!strob && prime) {
    p1Feedback.textContent = `Not quite — whilst ${val} is prime, it is not strobogrammatic.`;
  } else {
    p1Feedback.textContent = `Not quite — ${val} is neither strobogrammatic nor prime.`;
  }
});

p1Answer.addEventListener("keydown", e => { if (e.key === "Enter") p1Check.click(); });

// P1 extension — open problem
const p1ExtCheck = document.getElementById("p1-ext-check");
const p1ExtFeedback = document.getElementById("p1-ext-feedback");
p1ExtCheck.addEventListener("click", () => {
  const selected = document.querySelector('input[name="p1-ext"]:checked');
  if(!selected){ p1ExtFeedback.textContent = "Please select Yes or No."; return; }
  p1ExtFeedback.textContent =
    "This is an open problem — it's currently unknown whether there are infinitely many strobogrammatic primes. Your choice may or may not turn out to be correct!";
});

// ===== Puzzle 2 =====
const p2Answer = document.getElementById("p2-answer");
const p2Check  = document.getElementById("p2-check");
const p2Feedback = document.getElementById("p2-feedback");
p2Check.addEventListener("click", () => {
  const val = normalizeNum(p2Answer.value);
  if (!val) { p2Feedback.textContent = "Please enter a 4-digit palindrome."; return; }
  p2Feedback.textContent = P2_VALID.has(val)
    ? "🎉 Correct — that's one of the valid palindromes divisible by 11²."
    : "❌ Not in the valid set — try another 4-digit palindrome.";
});
p2Answer.addEventListener("keydown", e => { if (e.key === "Enter") p2Check.click(); });

// Puzzle 2 extension — count
const p2ExtAnswer = document.getElementById("p2-ext-answer");
const p2ExtCheck  = document.getElementById("p2-ext-check");
const p2ExtFeedback = document.getElementById("p2-ext-feedback");
p2ExtCheck.addEventListener("click", () => {
  const val = normalizeNum(p2ExtAnswer.value);
  if (!val) { p2ExtFeedback.textContent = "Please enter a number."; return; }
  p2ExtFeedback.textContent = (val === P2_EXT) ? "🎉 Correct!" : "❌ Not correct — try again.";
});
p2ExtAnswer.addEventListener("keydown", e => { if (e.key === "Enter") p2ExtCheck.click(); });

// ===== Puzzle 3 =====
const p3Answer = document.getElementById("p3-answer");
const p3Check  = document.getElementById("p3-check");
const p3Feedback = document.getElementById("p3-feedback");
p3Check.addEventListener("click", () => {
  const val = normalizeNum(p3Answer.value);
  if (!val) { p3Feedback.textContent = "Please enter a number."; return; }
  p3Feedback.textContent = (val === P3) ? "🎉 Correct!" : "❌ Not correct — try again.";
});
p3Answer.addEventListener("keydown", e => { if (e.key === "Enter") p3Check.click(); });

// Puzzle 3 extension — regions
const p3ExtAnswer = document.getElementById("p3-ext-answer");
const p3ExtCheck  = document.getElementById("p3-ext-check");
const p3ExtFeedback = document.getElementById("p3-ext-feedback");
p3ExtCheck.addEventListener("click", () => {
  const val = normalizeNum(p3ExtAnswer.value);
  if (!val) { p3ExtFeedback.textContent = "Please enter a number."; return; }
  p3ExtFeedback.textContent = (val === P3_EXT) ? "🎉 Correct!" : "❌ Not correct — try again.";
});
p3ExtAnswer.addEventListener("keydown", e => { if (e.key === "Enter") p3ExtCheck.click(); });
