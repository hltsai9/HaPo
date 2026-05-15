// Harry Potter and the Half-Blood Prince — Quiz

const questions = [
  {
    q: "What unbreakable promise does Snape make to Narcissa Malfoy at Spinner's End?",
    options: [
      "To kill Harry Potter",
      "To protect Draco and finish his task if Draco fails",
      "To teach Draco Occlumency",
      "To deliver the Elder Wand to Voldemort"
    ],
    answer: 1, chapter: 2, chapterName: "Spinner's End",
    explain: "The Unbreakable Vow, witnessed by Bellatrix: protect Draco, do the deed yourself if he can't. Break it and Snape dies."
  },
  {
    q: "Whom does Dumbledore personally collect Harry from his summer holidays to recruit?",
    options: [
      "Mad-Eye Moody, returning to active service",
      "Horace Slughorn, an old retired Potions professor",
      "Aberforth Dumbledore",
      "Rufus Scrimgeour"
    ],
    answer: 1, chapter: 4, chapterName: "Horace Slughorn",
    explain: "Slughorn has hidden himself in a Muggle house. Harry is the bait — Slughorn cannot resist the Boy Who Lived."
  },
  {
    q: "What is Tonks's nickname for Bill's fiancée Fleur — and who coined it?",
    options: [
      "\"Phlegm\" — coined by Ginny",
      "\"Sparkles\" — coined by Hermione",
      "\"Frenchie\" — coined by Ron",
      "\"Madame\" — coined by Mrs. Weasley"
    ],
    answer: 0, chapter: 5, chapterName: "An Excess of Phlegm",
    explain: "Ginny coins it after Fleur's hundredth perfect remark about Bill at the dinner table."
  },
  {
    q: "Who becomes Defense Against the Dark Arts teacher this year?",
    options: ["Horace Slughorn", "Severus Snape", "Aberforth Dumbledore", "Pomona Sprout"],
    answer: 1, chapter: 8, chapterName: "Snape Victorious",
    explain: "Snape gets the cursed post at last. Slughorn takes Potions — leaving room for Harry to pass it after all."
  },
  {
    q: "Whom does the secondhand Potions textbook turn out to belong to?",
    options: [
      "Albus Dumbledore",
      "James Potter",
      "Severus Snape",
      "Lily Evans"
    ],
    answer: 2, chapter: 9, chapterName: "The Half-Blood Prince",
    explain: "\"This book is the property of the Half-Blood Prince\" — Snape, of course. His mother was a Prince. His father was a Muggle."
  },
  {
    q: "Whose memory does Dumbledore show Harry of a derelict shack in Little Hangleton?",
    options: [
      "Bob Ogden of the Improper Use of Magic Office",
      "Tom Riddle himself",
      "Hokey the house-elf",
      "Caractacus Burke"
    ],
    answer: 0, chapter: 10, chapterName: "The House of Gaunt",
    explain: "Old Bob Ogden's memory shows Voldemort's mother's family — the Gaunts, last descendants of Slytherin, half-mad with inbreeding."
  },
  {
    q: "What cursed object knocks Katie Bell off her broom and into St. Mungo's?",
    options: [
      "A poisoned ring",
      "An opal necklace, intended for Dumbledore",
      "A Vanishing Cabinet panel",
      "A jewelled goblet"
    ],
    answer: 1, chapter: 12, chapterName: "Silver and Opals",
    explain: "Draco gives the Imperiused Katie an opal necklace meant for Dumbledore. She brushes it through her glove and is nearly killed."
  },
  {
    q: "How does young Tom Riddle Jr coerce his uncle Morfin into giving up his ring?",
    options: [
      "He buys it",
      "He uses an Unforgivable on him",
      "He frames Morfin for the murder of Tom Riddle Sr — and steals the ring as a trophy",
      "He inherits it"
    ],
    answer: 2, chapter: 13, chapterName: "The Secret Riddle",
    explain: "Riddle uses Morfin's wand to murder his Muggle father and grandparents, then plants the memory in Morfin's head and walks off with the heirloom."
  },
  {
    q: "What lucky potion does Slughorn award Harry as a Christmas-term Potions prize?",
    options: ["Felix Felicis", "Polyjuice Potion", "Veritaserum", "Amortentia"],
    answer: 0, chapter: 9, chapterName: "The Half-Blood Prince",
    explain: "A tiny vial of liquid luck. Twelve hours of \"everything you attempt will succeed.\" Harry hoards it for an emergency."
  },
  {
    q: "Who is poisoned by the mead Slughorn was secretly going to give Dumbledore for Christmas?",
    options: ["Hermione", "Lavender Brown", "Ron Weasley", "Slughorn himself"],
    answer: 2, chapter: 18, chapterName: "Birthday Surprises",
    explain: "Ron drinks it from Slughorn's glass on his birthday. Harry shoves a bezoar down his throat just in time."
  },
  {
    q: "What memory does Harry, drunk on Felix Felicis, finally extract from Slughorn?",
    options: [
      "Slughorn explaining what a Horcrux is — and how Tom Riddle made seven",
      "Slughorn revealing Snape's loyalties",
      "Slughorn's training as an Auror",
      "Slughorn's first meeting with Lily Evans"
    ],
    answer: 0, chapter: 23, chapterName: "Horcruxes",
    explain: "Slughorn confesses he taught Riddle about Horcruxes — and that Riddle wanted to split his soul into seven."
  },
  {
    q: "What spell from the Half-Blood Prince's book does Harry cast on Draco in the bathroom — to terrible effect?",
    options: [
      "Crucio",
      "Sectumsempra",
      "Avada Kedavra",
      "Diffindo"
    ],
    answer: 1, chapter: 24, chapterName: "Sectumsempra",
    explain: "\"For Enemies\" was scrawled in the margin. The spell slashes Draco open as if with an invisible sword. Snape arrives in time to save him."
  },
  {
    q: "Where do Dumbledore and Harry travel by Side-Along Apparition to find a Horcrux?",
    options: [
      "Godric's Hollow",
      "An island in a freezing northern sea",
      "A cliff-cave by the seaside where Tom Riddle once tortured two children",
      "The Forbidden Forest"
    ],
    answer: 2, chapter: 26, chapterName: "The Cave",
    explain: "The cave by the sea. Dumbledore drinks the tormenting potion to retrieve the locket — and the lake is full of Inferi."
  },
  {
    q: "What does Dumbledore force Harry to do as he drinks the cursed potion in the cave?",
    options: [
      "Promise to keep making him drink, no matter what",
      "Fetch the locket alone",
      "Kill the Inferi",
      "Cast a Patronus"
    ],
    answer: 0, chapter: 26, chapterName: "The Cave",
    explain: "Harry has to spoon the potion into Dumbledore's mouth, ignoring his pleading and screams, until the basin is empty."
  },
  {
    q: "On the Astronomy Tower, who actually casts the curse that kills Dumbledore?",
    options: [
      "Draco Malfoy",
      "Severus Snape",
      "Bellatrix Lestrange",
      "Fenrir Greyback"
    ],
    answer: 1, chapter: 27, chapterName: "The Lightning-Struck Tower",
    explain: "Draco lowers his wand. Snape arrives, fulfils the Vow, and a jet of green light sends Dumbledore over the battlements."
  },
  {
    q: "Who reveals on the way down from the Tower that he is the real Half-Blood Prince?",
    options: [
      "Severus Snape, fleeing across the grounds",
      "Slughorn",
      "Voldemort",
      "Lupin"
    ],
    answer: 0, chapter: 28, chapterName: "Flight of the Prince",
    explain: "Harry shrieks the name; Snape spits back that he himself is the Half-Blood Prince — and stops Harry's curses, but does not return them."
  },
  {
    q: "What does Harry discover the locket from the cave actually is?",
    options: [
      "The real Slytherin Horcrux",
      "A fake — the real one has been stolen by someone signed only \"R.A.B.\"",
      "An Auror's tracking charm",
      "Dumbledore's old Hogwarts pendant"
    ],
    answer: 1, chapter: 28, chapterName: "Flight of the Prince",
    explain: "Inside is a note: someone calling themselves R.A.B. stole the real Horcrux long ago, hoping to destroy it before they died."
  },
  {
    q: "What does Harry decide at Dumbledore's white tomb — and not return to next year?",
    options: [
      "He'll marry Ginny right away",
      "He'll go back to the Dursleys for good",
      "He won't come back to Hogwarts; he'll hunt the remaining Horcruxes",
      "He'll join the Auror office immediately"
    ],
    answer: 2, chapter: 30, chapterName: "The White Tomb",
    explain: "Ron and Hermione are coming with him. The hunt for the Horcruxes — and Voldemort — begins."
  }
];

let current = 0;
let score = 0;
let answered = false;
const quizArea = document.getElementById("quiz-area");
const currentQEl = document.getElementById("current-q");
const totalQEl = document.getElementById("total-q");
const progressFill = document.getElementById("progress-fill");
totalQEl.textContent = questions.length;

function render() {
  if (current >= questions.length) { renderResults(); return; }
  answered = false;
  currentQEl.textContent = current + 1;
  progressFill.style.width = ((current) / questions.length * 100) + "%";
  const q = questions[current];
  quizArea.innerHTML = `
    <div class="question-card">
      <h2>${escapeHtml(q.q)}</h2>
      <div class="options">
        ${q.options.map((opt, i) => `<button class="option" data-index="${i}">${escapeHtml(opt)}</button>`).join("")}
      </div>
      <div class="feedback" id="feedback"></div>
      <button class="next-btn" id="next-btn" style="display:none;">${current + 1 === questions.length ? "See Results" : "Next Question →"}</button>
    </div>`;
  quizArea.querySelectorAll(".option").forEach(btn => btn.addEventListener("click", () => handleAnswer(Number(btn.dataset.index), btn)));
  document.getElementById("next-btn").addEventListener("click", () => { current++; render(); });
}

function handleAnswer(chosenIndex, btn) {
  if (answered) return;
  answered = true;
  const q = questions[current];
  const correct = chosenIndex === q.answer;
  quizArea.querySelectorAll(".option").forEach((b, i) => {
    b.disabled = true;
    if (i === q.answer) b.classList.add("correct");
    else if (i === chosenIndex) b.classList.add("incorrect");
  });
  const feedback = document.getElementById("feedback");
  if (correct) {
    score++;
    feedback.innerHTML = `<strong>Correct!</strong> ${escapeHtml(q.explain)}`;
    feedback.className = "feedback show correct";
  } else {
    feedback.innerHTML = `<strong>Not quite.</strong> The answer is <em>${escapeHtml(q.options[q.answer])}</em>.<div class="chapter-hint">Revisit <strong>Chapter ${q.chapter}: ${escapeHtml(q.chapterName)}</strong> — ${escapeHtml(q.explain)}</div>`;
    feedback.className = "feedback show incorrect";
  }
  document.getElementById("next-btn").style.display = "inline-block";
  progressFill.style.width = ((current + 1) / questions.length * 100) + "%";
}

function renderResults() {
  const pct = Math.round(score / questions.length * 100);
  let verdict;
  if (pct === 100) verdict = "Perfect — Slughorn would invite you to the Slug Club.";
  else if (pct >= 85) verdict = "Outstanding — pass the Felix Felicis.";
  else if (pct >= 65) verdict = "Acceptable. The Half-Blood Prince approves.";
  else if (pct >= 45) verdict = "A passing mark, but the cave's Inferi would still pull you down.";
  else verdict = "Best brew yourself a strong tea and re-read.";
  document.getElementById("progress").style.display = "none";
  quizArea.innerHTML = `<div class="results"><h2>Your Result</h2><div class="score">${score} / ${questions.length}</div><div class="verdict">${verdict}</div><button class="restart-btn" onclick="restart()">Try Again</button></div>`;
}
function restart() { current = 0; score = 0; document.getElementById("progress").style.display = ""; render(); }
function escapeHtml(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
render();
