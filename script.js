// Year in footer/header
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// -------- Helpers --------
const normalizeNum = (s) => (s || "").toString().replace(/[\s,]/g, "");

// Simple strobogrammatic check (string form)
function isStrobogrammatic(str) {
  if (!str) return false;
  const map = { "0": "0", "1": "1", "8": "8", "6": "9", "9": "6" };
  let l = 0, r = str.length - 1;
  while (l <= r) {
    const a = str[l], b = str[r];
    if (!(a in map) || map[a] !== b) return false;
    l++; r--;
  }
  return true;
}

// -------- Correct answers --------
const P1 = { main: new Set(["101"]) }; // next smallest strobogrammatic prime
const P2_VALID = new Set(["1331","2662","3993","4114","5445","6776","8228","9559"]);
const P2_EXT = "8";
const P3 = "44";
const P3_EXT = "375";

// ===== Puzzle 1 =====
(function () {
  const p1Answer = document.getElementById("p1-answer");
  const p1Check  = document.getElementById("p1-check");
  const p1Feedback = document.getElementById("p1-feedback");
  if (p1Check && p1Answer && p1Feedback) {
    p1Check.addEventListener("click", () => {
      const raw = normalizeNum(p1Answer.value);
      if (!raw) { p1Feedback.textContent = "Please enter a number."; return; }
      p1Feedback.textContent = P1.main.has(raw) ? "🎉 Correct!" : "❌ Not correct — try again.";
    });
    p1Answer.addEventListener("keydown", (e) => { if (e.key === "Enter") p1Check.click(); });
  }

  // Extension — “Is 68189 a strobogrammatic prime?”
  const p1ExtCheck = document.getElementById("p1-ext-check");
  const p1ExtFeedback = document.getElementById("p1-ext-feedback");
  if (p1ExtCheck && p1ExtFeedback) {
    p1ExtCheck.addEventListener("click", () => {
      const selected = document.querySelector('input[name="p1-ext"]:checked');
      if (!selected) { p1ExtFeedback.textContent = "Please select Yes or No."; return; }
      if (selected.value === "Yes") {
        p1ExtFeedback.textContent = "Think again — 68189 is strobogrammatic but it is not prime!";
      } else {
        // “No” is correct: 68189 = 11 × 6199 (6199 is prime)
        p1ExtFeedback.textContent = "That's correct! 68189 is strobogrammatic but not prime.";
      }
    });
  }
})();

// ===== Puzzle 2 =====
(function () {
  const p2Answer = document.getElementById("p2-answer");
  const p2Check  = document.getElementById("p2-check");
  const p2Feedback = document.getElementById("p2-feedback");
  if (p2Check && p2Answer && p2Feedback) {
    p2Check.addEventListener("click", () => {
      const raw = normalizeNum(p2Answer.value);
      if (!raw) { p2Feedback.textContent = "Please enter a 4-digit palindrome."; return; }
      p2Feedback.textContent = P2_VALID.has(raw) ? "🎉 Correct!" : "❌ Not correct — try again.";
    });
    p2Answer.addEventListener("keydown", (e) => { if (e.key === "Enter") p2Check.click(); });
  }

  // Extension
  const p2ExtAnswer = document.getElementById("p2-ext-answer");
  const p2ExtCheck  = document.getElementById("p2-ext-check");
  const p2ExtFeedback = document.getElementById("p2-ext-feedback");
  if (p2ExtCheck && p2ExtAnswer && p2ExtFeedback) {
    p2ExtCheck.addEventListener("click", () => {
      const raw = normalizeNum(p2ExtAnswer.value);
      if (!raw) { p2ExtFeedback.textContent = "Please enter a number."; return; }
      p2ExtFeedback.textContent = (raw === P2_EXT) ? "🎉 Correct!" : "❌ Not correct — try again.";
    });
    p2ExtAnswer.addEventListener("keydown", (e) => { if (e.key === "Enter") p2ExtCheck.click(); });
  }
})();

// ===== Puzzle 3 =====
(function () {
  const p3Answer = document.getElementById("p3-answer");
  const p3Check  = document.getElementById("p3-check");
  const p3Feedback = document.getElementById("p3-feedback");
  if (p3Check && p3Answer && p3Feedback) {
    p3Check.addEventListener("click", () => {
      const raw = normalizeNum(p3Answer.value);
      if (!raw) { p3Feedback.textContent = "Please enter a number."; return; }
      p3Feedback.textContent = (raw === P3) ? "🎉 Correct!" : "❌ Not correct — try again.";
    });
    p3Answer.addEventListener("keydown", (e) => { if (e.key === "Enter") p3Check.click(); });
  }

  // Extension — regions
  const p3ExtAnswer = document.getElementById("p3-ext-answer");
  const p3ExtCheck  = document.getElementById("p3-ext-check");
  const p3ExtFeedback = document.getElementById("p3-ext-feedback");
  if (p3ExtCheck && p3ExtAnswer && p3ExtFeedback) {
    p3ExtCheck.addEventListener("click", () => {
      const raw = normalizeNum(p3ExtAnswer.value);
      if (!raw) { p3ExtFeedback.textContent = "Please enter a number."; return; }
      p3ExtFeedback.textContent = (raw === P3_EXT) ? "🎉 Correct!" : "❌ Not correct — try again.";
    });
    p3ExtAnswer.addEventListener("keydown", (e) => { if (e.key === "Enter") p3ExtCheck.click(); });
  }
})();
