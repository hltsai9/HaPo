// Harry Potter and the Deathly Hallows — Quiz

const questions = [
  {
    q: "What is the Order's plan to move Harry safely from Privet Drive?",
    options: [
      "A flying car",
      "Six volunteers take Polyjuice Potion to become him — Seven Potters fly out in different directions",
      "The Knight Bus",
      "A Portkey"
    ],
    answer: 1, chapter: 4, chapterName: "The Seven Potters",
    explain: "Six Order members swallow Polyjuice with Harry's hair. They scatter into the night sky on brooms, thestrals, and a flying motorbike."
  },
  {
    q: "Who dies during the Battle of the Seven Potters?",
    options: ["Tonks", "Sirius Black", "Mad-Eye Moody", "Kingsley Shacklebolt"],
    answer: 2, chapter: 5, chapterName: "Fallen Warrior",
    explain: "Mad-Eye is hit and falls hundreds of feet. Mundungus, his decoy, has Disapparated; Mad-Eye doesn't."
  },
  {
    q: "What three items does Dumbledore leave to the trio in his will?",
    options: [
      "Three Horcruxes",
      "The Deluminator to Ron, The Tales of Beedle the Bard to Hermione, and the first Snitch Harry ever caught",
      "The Sword of Gryffindor, the Pensieve, and the Map",
      "Three vials of memory each"
    ],
    answer: 1, chapter: 7, chapterName: "The Will of Albus Dumbledore",
    explain: "The Deluminator (clicks lights out — and back), an old book of fairy tales (with hidden meaning), and a Snitch with a secret to open."
  },
  {
    q: "Whose wedding is interrupted by the news that the Ministry has fallen?",
    options: ["Bill and Fleur", "Tonks and Lupin", "Percy and Audrey", "Cho and Cedric"],
    answer: 0, chapter: 8, chapterName: "The Wedding",
    explain: "The Burrow is mid-celebration when Kingsley's silver lynx Patronus tells everyone to flee: Voldemort has taken the Ministry."
  },
  {
    q: "Where do Harry, Ron, and Hermione hide and plan their Horcrux hunt?",
    options: ["The Burrow", "Number Twelve, Grimmauld Place", "Shell Cottage", "Godric's Hollow"],
    answer: 1, chapter: 9, chapterName: "A Place to Hide",
    explain: "They Disapparate to Sirius's old house. Kreacher serves them. He even tells them where the locket Horcrux went: stolen by Mundungus."
  },
  {
    q: "Who is now wearing Slytherin's locket as the Ministry's new Senior Undersecretary?",
    options: ["Pius Thicknesse", "Dolores Umbridge", "Yaxley", "Bellatrix Lestrange"],
    answer: 1, chapter: 13, chapterName: "The Muggle-Born Registration Commission",
    explain: "Mundungus, terrified, sold the locket to Umbridge. Harry, Ron, and Hermione break into the Ministry to take it back."
  },
  {
    q: "What does Ron destroy in the frozen forest pool?",
    options: [
      "Slytherin's locket Horcrux",
      "Helga Hufflepuff's cup",
      "Ravenclaw's diadem",
      "Tom Riddle's diary"
    ],
    answer: 0, chapter: 19, chapterName: "The Silver Doe",
    explain: "Following Snape's silver doe Patronus, Harry finds the Sword of Gryffindor in a pool. Ron returns to pull him out — and stabs the locket."
  },
  {
    q: "Whose Patronus leads Harry to the Sword of Gryffindor under the ice?",
    options: ["Dumbledore's", "An unknown silver doe", "Lily's", "Snape's silver doe"],
    answer: 3, chapter: 19, chapterName: "The Silver Doe",
    explain: "We learn at the very end: Snape, ever loyal to Lily's memory, conjured a doe that matched hers — and led Harry to the sword."
  },
  {
    q: "What is the children's tale Xenophilius Lovegood reads to them?",
    options: [
      "\"The Wizard and the Hopping Pot\"",
      "\"The Tale of the Three Brothers\"",
      "\"Babbitty Rabbity\"",
      "\"The Fountain of Fair Fortune\""
    ],
    answer: 1, chapter: 21, chapterName: "The Tale of the Three Brothers",
    explain: "Three brothers cheat Death and receive the Hallows: a wand, a stone, an invisibility cloak. Only the youngest avoids Death's revenge."
  },
  {
    q: "What three objects make up the Deathly Hallows?",
    options: [
      "A locket, a cup, and a diadem",
      "The Elder Wand, the Resurrection Stone, the Cloak of Invisibility",
      "The Sword, the Sorting Hat, the Goblet of Fire",
      "The Mirror of Erised, a Pensieve, and a Time-Turner"
    ],
    answer: 1, chapter: 22, chapterName: "The Deathly Hallows",
    explain: "The Master of all three is master of Death. The Cloak Harry already owns; the others Voldemort and Dumbledore have hunted."
  },
  {
    q: "How do Harry, Ron, and Hermione escape Malfoy Manor — and what does it cost them?",
    options: [
      "Snape rescues them; nothing is lost",
      "Dobby Apparates them to Shell Cottage and is killed by Bellatrix's flying knife",
      "Lupin and Tonks duel the Death Eaters off",
      "They use Polyjuice and walk out"
    ],
    answer: 1, chapter: 23, chapterName: "Malfoy Manor",
    explain: "Dobby pops in and out to save them — and on his way out, Bellatrix's silver knife strikes him. He dies in Harry's arms on the beach."
  },
  {
    q: "How do they break into Bellatrix's vault at Gringotts?",
    options: [
      "Confunding goblins at the door",
      "Hermione drinks Polyjuice to become Bellatrix; the goblin Griphook helps; they escape on a chained dragon",
      "They steal the Sword of Gryffindor",
      "They Apparate inside"
    ],
    answer: 1, chapter: 26, chapterName: "Gringotts",
    explain: "Hermione becomes Bellatrix. Cursed treasure multiplies. Hufflepuff's cup is found, Griphook betrays them — and they escape on a half-blind dragon."
  },
  {
    q: "Where is Ravenclaw's diadem Horcrux hidden?",
    options: [
      "In the lake",
      "In the Room of Requirement, used as a hiding place by generations of students",
      "In Dumbledore's old office",
      "In Bellatrix's vault"
    ],
    answer: 1, chapter: 29, chapterName: "The Lost Diadem",
    explain: "The Room of Hidden Things, full of generations of contraband. Voldemort thought himself the only one who'd found it. He was wrong."
  },
  {
    q: "Who destroys Hufflepuff's cup with a basilisk fang?",
    options: ["Harry", "Hermione", "Ron", "Neville"],
    answer: 2, chapter: 31, chapterName: "The Battle of Hogwarts",
    explain: "Down in the Chamber of Secrets, Ron remembers how to open it (parseltongue, sort of) and grabs a fang. Hermione kisses him for it."
  },
  {
    q: "Who beheads Nagini with the Sword of Gryffindor?",
    options: [
      "Ginny Weasley",
      "Neville Longbottom",
      "Harry Potter",
      "Bellatrix Lestrange"
    ],
    answer: 1, chapter: 31, chapterName: "The Battle of Hogwarts",
    explain: "Neville pulls the sword from the Sorting Hat in front of Voldemort and the assembled school — and beheads the snake in one stroke."
  },
  {
    q: "Whose memories does Harry collect in the Pensieve to learn Snape's true allegiance?",
    options: [
      "Dumbledore's, before he died",
      "Snape's, as he lies dying in the Shrieking Shack",
      "Lily's, found in a vault",
      "Voldemort's, after the killing curse"
    ],
    answer: 1, chapter: 33, chapterName: "The Prince's Tale",
    explain: "Bitten by Nagini, Snape gives Harry his last memories — childhood with Lily, Dumbledore's plans, the truth: Harry must die so Voldemort can."
  },
  {
    q: "Who is the true master of the Elder Wand at the moment of Harry and Voldemort's final duel?",
    options: [
      "Voldemort, who took it from Dumbledore's tomb",
      "Snape, who killed Dumbledore",
      "Harry, because he disarmed Draco at Malfoy Manor — and Draco had disarmed Dumbledore on the Tower",
      "Dumbledore's portrait"
    ],
    answer: 2, chapter: 36, chapterName: "The Flaw in the Plan",
    explain: "The wand never truly belonged to Snape; Draco had disarmed Dumbledore. Harry then disarmed Draco. The wand answers to Harry."
  },
  {
    q: "How does the saga end, nineteen years later?",
    options: [
      "Harry teaches Defense at Hogwarts",
      "On Platform 9¾, Harry sees his children — Albus Severus, James, and Lily — off to Hogwarts. \"All was well.\"",
      "Harry rebuilds Hogwarts from scratch",
      "Harry retires to Godric's Hollow"
    ],
    answer: 1, chapter: 37, chapterName: "Epilogue: Nineteen Years Later",
    explain: "King's Cross Station. Albus Severus, Rose Weasley, James Sirius. The scar has not pained Harry for nineteen years. All was well."
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
  if (pct === 100) verdict = "Perfect — Master of Death.";
  else if (pct >= 85) verdict = "Outstanding — Order of Merlin, First Class.";
  else if (pct >= 65) verdict = "Acceptable. You'd survive the Battle of Hogwarts.";
  else if (pct >= 45) verdict = "A passing grade. Keep your wand close.";
  else verdict = "Borrow Hermione's library. Try again.";
  document.getElementById("progress").style.display = "none";
  quizArea.innerHTML = `<div class="results"><h2>Your Result</h2><div class="score">${score} / ${questions.length}</div><div class="verdict">${verdict}</div><button class="restart-btn" onclick="restart()">Try Again</button></div>`;
}
function restart() { current = 0; score = 0; document.getElementById("progress").style.display = ""; render(); }
function escapeHtml(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
render();
