// Harry Potter and the Order of the Phoenix — Quiz

const questions = [
  {
    q: "What attacks Harry and Dudley in the alleyway in Little Whinging at the start of Book 5?",
    options: ["A pair of werewolves", "Two Dementors", "A boggart", "Three Death Eaters"],
    answer: 1, chapter: 1, chapterName: "Dudley Demented",
    explain: "Two Dementors corner them in an underpass. Harry casts a Patronus to drive them off — and is promptly threatened with expulsion."
  },
  {
    q: "What is the address of the Order of the Phoenix's secret headquarters?",
    options: ["Number Twelve, Grimmauld Place", "Spinner's End", "13 Hogsmeade Lane", "The Burrow"],
    answer: 0, chapter: 6, chapterName: "The Noble and Most Ancient House of Black",
    explain: "Sirius's mother's old house, hidden by a Fidelius Charm. Tucked between numbers 11 and 13 in a row of London townhouses."
  },
  {
    q: "Who is the new Defense Against the Dark Arts teacher this year?",
    options: ["Remus Lupin", "Mad-Eye Moody", "Dolores Umbridge", "Severus Snape"],
    answer: 2, chapter: 11, chapterName: "The Sorting Hat's New Song",
    explain: "Cornelius Fudge installs his Senior Undersecretary at Hogwarts to keep an eye on Dumbledore. She wears pink, smiles a lot, and decorates her office with kitten plates."
  },
  {
    q: "What does Umbridge force Harry to write in detention with her cursed quill?",
    options: ["\"I will respect my elders\"", "\"I must not tell lies\"", "\"I am a humble student\"", "\"I will obey the Ministry\""],
    answer: 1, chapter: 13, chapterName: "Detention with Dolores",
    explain: "The quill cuts the words into the back of his hand and uses his own blood for ink. The scar stays for the rest of his life."
  },
  {
    q: "What does Hermione name the secret defense club that meets in the Room of Requirement?",
    options: ["The Phoenix Squad", "Defense League Alpha", "Dumbledore's Army", "The Resistance"],
    answer: 2, chapter: 18, chapterName: "Dumbledore's Army",
    explain: "Ginny's idea, Hermione's punning. \"DA\" reminds everyone of exactly what the Ministry is afraid of."
  },
  {
    q: "How does Hermione mark the parchment that DA members sign, so that traitors are exposed?",
    options: [
      "By giving them red hair if they betray the group",
      "By cursing it so a snitch grows lurid pimples that spell SNEAK across their face",
      "By giving them an itching curse",
      "By turning their tongue purple"
    ],
    answer: 1, chapter: 27, chapterName: "The Centaur and the Sneak",
    explain: "Marietta Edgecombe blabs to Umbridge — and is left with a constellation of purple pimples spelling SNEAK across her cheeks for months."
  },
  {
    q: "What thestral-visible creatures pull the school carriages — and what does it mean to see them?",
    options: [
      "Just enchanted horses; nothing significant",
      "Thestrals, visible only to those who have witnessed a death",
      "Hippogriffs, visible to everyone",
      "Ghost horses, visible only to ghosts"
    ],
    answer: 1, chapter: 10, chapterName: "Luna Lovegood",
    explain: "Harry sees them for the first time — he watched Cedric die. Luna also sees them; she watched her mother die when she was nine."
  },
  {
    q: "What creature has Hagrid hidden in the Forbidden Forest, asking the trio to look after it?",
    options: ["Aragog", "A hippogriff", "His giant half-brother Grawp", "A baby dragon"],
    answer: 2, chapter: 30, chapterName: "Grawp",
    explain: "Hagrid brings Grawp back from his trip to the giants. Sixteen feet tall, can't quite manage \"Hermione\" — calls her Hermy."
  },
  {
    q: "What does Harry see in Snape's Pensieve memory?",
    options: [
      "James and Sirius bullying a young Snape, hanging him upside down",
      "Snape teaching Lily a hex",
      "Snape being sorted into Slytherin",
      "Snape crying after Lily's death"
    ],
    answer: 0, chapter: 28, chapterName: "Snape's Worst Memory",
    explain: "Harry's father and godfather, age fifteen, jinx and humiliate the young Severus by the lake. Lily defends him; he calls her a Mudblood."
  },
  {
    q: "How do Fred and George Weasley make their famous departure from Hogwarts?",
    options: [
      "On a flying motorbike",
      "On stolen brooms in a blaze of fireworks, mocking Umbridge as they go",
      "By Apparating from the Great Hall",
      "By disappearing into a Vanishing Cabinet"
    ],
    answer: 1, chapter: 29, chapterName: "Career Advice",
    explain: "Their swamp, their dragons, their fireworks, and a cheerful \"Give her hell from us, Peeves!\" before they roar off into the sunset."
  },
  {
    q: "What vision does Voldemort plant in Harry's mind to lure him to the Department of Mysteries?",
    options: [
      "Dumbledore being attacked",
      "Sirius being tortured",
      "His parents speaking to him",
      "Hermione kidnapped"
    ],
    answer: 1, chapter: 32, chapterName: "Out of the Fire",
    explain: "Harry sees Sirius writhing under the Cruciatus on the floor of the Department of Mysteries. It's a trap — Sirius is at Grimmauld Place."
  },
  {
    q: "What does the prophecy in the Department of Mysteries actually say?",
    options: [
      "\"The chosen one will rise\"",
      "\"Either must die at the hand of the other for neither can live while the other survives\"",
      "\"Only Harry Potter can defeat the Dark Lord\"",
      "\"The boy will overthrow the Ministry\""
    ],
    answer: 1, chapter: 37, chapterName: "The Lost Prophecy",
    explain: "Trelawney made it years ago to Dumbledore. Voldemort has been desperate to hear the rest — it's why he attacked the Potters in the first place."
  },
  {
    q: "Which Death Eater shoves Sirius backwards through the veiled archway in the Death Chamber?",
    options: ["Lucius Malfoy", "Antonin Dolohov", "Bellatrix Lestrange", "Peter Pettigrew"],
    answer: 2, chapter: 35, chapterName: "Beyond the Veil",
    explain: "His own cousin. A jet of red light hits him in the chest and Sirius falls backwards, still smiling, through the veil."
  },
  {
    q: "Whom does Dumbledore call \"the only one he ever feared,\" arriving in the Atrium to duel?",
    options: ["Himself", "Grindelwald", "Voldemort", "Snape"],
    answer: 0, chapter: 36, chapterName: "The Only One He Ever Feared",
    explain: "Voldemort fears Dumbledore. Their duel in the Atrium is the most spectacular spell-work the Ministry has ever seen."
  },
  {
    q: "What position does Ron earn on the Gryffindor Quidditch team, leading to the song \"Weasley is our King\"?",
    options: ["Beater", "Chaser", "Keeper", "Seeker"],
    answer: 2, chapter: 19, chapterName: "The Lion and the Serpent",
    explain: "Ron makes Keeper. The Slytherins sing it cruelly first, then Gryffindor reclaims it triumphantly after he saves the day."
  },
  {
    q: "Where does Harry first kiss Cho Chang?",
    options: [
      "In the Astronomy Tower",
      "In the Room of Requirement under mistletoe",
      "By the lake at sunset",
      "In a Hogsmeade tea shop"
    ],
    answer: 1, chapter: 21, chapterName: "The Eye of the Snake",
    explain: "Right after a DA meeting, under mistletoe in the Room of Requirement. She is, as Hermione later puts it, very upset about Cedric."
  },
  {
    q: "Why did Voldemort try to kill the infant Harry, according to the prophecy?",
    options: [
      "Lily refused to join the Death Eaters",
      "James insulted him",
      "Harry was the child \"born as the seventh month dies\" — he chose to mark Harry as his equal",
      "He thought Harry was Neville"
    ],
    answer: 2, chapter: 37, chapterName: "The Lost Prophecy",
    explain: "Voldemort heard half the prophecy and chose Harry over Neville (also born as July ended) — and in marking him, made the prophecy come true."
  },
  {
    q: "What forces Cornelius Fudge to publicly admit Voldemort has returned?",
    options: [
      "Snape's testimony",
      "Voldemort appearing in person at the Ministry — seen by Fudge himself in the Atrium",
      "The Daily Prophet running an exposé",
      "Dumbledore's letter to the Wizengamot"
    ],
    answer: 1, chapter: 36, chapterName: "The Only One He Ever Feared",
    explain: "After a year of denial, Fudge sees Voldemort with his own eyes in the Ministry Atrium. He has to print the truth in the morning Prophet."
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
  if (pct === 100) verdict = "Perfect! Even Umbridge can't deny it.";
  else if (pct >= 85) verdict = "Outstanding — DA-level recall.";
  else if (pct >= 65) verdict = "Acceptable. You'd hold your own at the Department of Mysteries.";
  else if (pct >= 45) verdict = "A passing grade. The Sorting Hat would still place you somewhere.";
  else verdict = "Best book a remedial DA session.";
  document.getElementById("progress").style.display = "none";
  quizArea.innerHTML = `<div class="results"><h2>Your Result</h2><div class="score">${score} / ${questions.length}</div><div class="verdict">${verdict}</div><button class="restart-btn" onclick="restart()">Try Again</button></div>`;
}
function restart() { current = 0; score = 0; document.getElementById("progress").style.display = ""; render(); }
function escapeHtml(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
render();
