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

// --- Extra helpers for Puzzle 2 ---
function isFourDigitNumber(str) {
  // must be exactly 4 digits and not start with 0
  return /^[1-9][0-9]{3}$/.test(str);
}
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
function isDivisibleBy121(str) {
  const n = Number(str);
  if (!Number.isFinite(n)) return false;
  return n % 121 === 0;
}
function isNonNegativeInteger(str) {
  // No signs, no decimals
  return /^(0|[1-9][0-9]*)$/.test(str);
}

// -------- Correct answers --------
const P1 = { main: new Set(["101"]) }; // next smallest strobogrammatic prime
const P2_VALID = new Set(["1331","2662","3993","4114","5445","6776","8228","9559"]);
const P2_EXT = "8";
const P3 = 44;
const P3_EXT = 375;

// ===== Puzzle 1 =====
(function () {
  const p1Answer = document.getElementById("p1-answer");
  const p1Check  = document.getElementById("p1-check");
  const p1Feedback = document.getElementById("p1-feedback");
  if (p1Check && p1Answer && p1Feedback) {
    p1Check.addEventListener("click", () => {
      const raw = normalizeNum(p1Answer.value);
      if (!raw || !/^-?\d+$/.test(raw)) {
        p1Feedback.textContent = "Please enter a valid number.";
        return;
      }
      p1Feedback.textContent = P1.main.has(raw)
        ? "🎉 Correct!"
        : "❌ Not correct — try again.";
    });
    p1Answer.addEventListener("keydown", (e) => { if (e.key === "Enter") p1Check.click(); });
  }

  // Extension — “Is 68189 a strobogrammatic prime?”
  const p1ExtCheck = document.getElementById("p1-ext-check");
  const p1ExtFeedback = document.getElementById("p1-ext-feedback");
  if (p1ExtCheck && p1ExtFeedback) {
    p1ExtCheck.addEventListener("click", () => {
      const selected = document.querySelector('input[name="p1-ext"]:checked');
      if (!selected) {
        p1ExtFeedback.textContent = "Please select Yes or No.";
        return;
      }
      if (selected.value === "Yes") {
        p1ExtFeedback.textContent = "Think again — 68189 is strobogrammatic but it is not prime!";
      } else {
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

      if (!raw) {
        p2Feedback.textContent = "Please enter a 4-digit palindrome.";
        return;
      }

      // If correct, we're done.
      if (P2_VALID.has(raw)) {
        p2Feedback.textContent = "🎉 Correct!";
        return;
      }

      // Detailed guidance
      if (!isFourDigitNumber(raw)) {
        p2Feedback.textContent = "That's not a 4-digit number, try again!";
        return;
      }

      if (!isPalindrome(raw)) {
        p2Feedback.textContent = "That isn't a palindrome, try again!";
        return;
      }

      // At this point it's a 4-digit palindrome — check 121 divisibility
      if (!isDivisibleBy121(raw)) {
        p2Feedback.textContent = "That is a 4-digit palindrome, but it isn't divisible by 11². Try again!";
        return;
      }

      // Safety net: if divisible by 121 but not in our set (shouldn't happen), treat as correct.
      p2Feedback.textContent = "🎉 Correct!";
    });

    p2Answer.addEventListener("keydown", (e) => { if (e.key === "Enter") p2Check.click(); });
  }

  // Extension — “How many 4-digit palindromes are divisible by 11²?”
  const p2ExtAnswer = document.getElementById("p2-ext-answer");
  const p2ExtCheck  = document.getElementById("p2-ext-check");
  const p2ExtFeedback = document.getElementById("p2-ext-feedback");

  if (p2ExtCheck && p2ExtAnswer && p2ExtFeedback) {
    p2ExtCheck.addEventListener("click", () => {
      const raw = normalizeNum(p2ExtAnswer.value);

      if (!raw || !isNonNegativeInteger(raw)) {
        p2ExtFeedback.textContent = "Um, that is not a valid answer to a 'how many' question — please try again!";
        return;
      }

      const n = Number(raw);
      if (n === Number(P2_EXT)) {
        p2ExtFeedback.textContent = "🎉 Correct!";
      } else if (n < Number(P2_EXT)) {
        p2ExtFeedback.textContent = "There are more than that — keep hunting!";
      } else {
        p2ExtFeedback.textContent = "You actually have too many... go back and check whether all of your solutions are valid.";
      }
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
      if (!raw || !/^-?\d+$/.test(raw)) {
        p3Feedback.textContent = "Please enter a number.";
        return;
      }
      const val = Number(raw);
      if (val === P3) {
        p3Feedback.textContent = "🎉 Correct!";
      } else if (val < P3) {
        p3Feedback.textContent = "There are more - try again!";
      } else {
        p3Feedback.textContent = "There actually aren't that many - try again!";
      }
    });
    p3Answer.addEventListener("keydown", (e) => { if (e.key === "Enter") p3Check.click(); });
  }

  // Extension — regions (target 375) with too small / too large guidance
  const p3ExtAnswer = document.getElementById("p3-ext-answer");
  const p3ExtCheck  = document.getElementById("p3-ext-check");
  const p3ExtFeedback = document.getElementById("p3-ext-feedback");
  if (p3ExtCheck && p3ExtAnswer && p3ExtFeedback) {
    p3ExtCheck.addEventListener("click", () => {
      const raw = normalizeNum(p3ExtAnswer.value);
      if (!raw || !/^-?\d+$/.test(raw)) {
        p3ExtFeedback.textContent = "Please enter a number.";
        return;
      }
      const val = Number(raw);
      if (val === P3_EXT) {
        p3ExtFeedback.textContent = "🎉 Correct!";
      } else if (val < P3_EXT) {
        p3ExtFeedback.textContent = "There are more - try again!";
      } else {
        p3ExtFeedback.textContent = "There actually aren't that many - try again!";
      }
    });
    p3ExtAnswer.addEventListener("keydown", (e) => { if (e.key === "Enter") p3ExtCheck.click(); });
  }
})();
