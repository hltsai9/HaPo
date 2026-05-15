// Harry Potter and the Goblet of Fire — Quiz
// Each question lists the chapter the answer appears in,
// so if you get it wrong you know exactly where to re-read.

const questions = [
  {
    q: "Whose murder by Voldemort opens Book 4 at the abandoned Riddle House?",
    options: ["Bertha Jorkins", "Frank Bryce", "Amos Diggory", "Igor Karkaroff"],
    answer: 1,
    chapter: 1,
    chapterName: "The Riddle House",
    explain: "Frank Bryce, the elderly Muggle gardener, overhears Voldemort and Wormtail plotting and is killed with Avada Kedavra."
  },
  {
    q: "How do the Weasleys travel to Privet Drive to collect Harry?",
    options: ["By flying car", "By Apparition", "By Floo Powder through the Dursleys' boarded-up fireplace", "By Knight Bus"],
    answer: 2,
    chapter: 4,
    chapterName: "Back to The Burrow",
    explain: "They blast their way out of the boarded-up fireplace and into the Dursleys' living room — Fred drops Ton-Tongue Toffees on the way out."
  },
  {
    q: "What ordinary object turns out to be the Portkey to the Quidditch World Cup?",
    options: ["A teapot", "An old boot", "A rusty kettle", "A pair of Wellington boots"],
    answer: 1,
    chapter: 6,
    chapterName: "The Portkey",
    explain: "Mr. Weasley leads them up Stoatshead Hill to a moldy old boot — touch it at the right moment, and you're whisked across the country."
  },
  {
    q: "Who wins the Quidditch World Cup final?",
    options: [
      "Bulgaria, after Krum catches the Snitch",
      "Ireland, even though Krum catches the Snitch for Bulgaria",
      "Bulgaria, by 100 points",
      "Ireland, after their Seeker catches the Snitch"
    ],
    answer: 1,
    chapter: 8,
    chapterName: "The Quidditch World Cup",
    explain: "Krum sees Ireland is too far ahead. He catches the Snitch on his own terms — Bulgaria still loses 170-160."
  },
  {
    q: "What appears in the sky after the World Cup, sending the wizarding world into panic?",
    options: [
      "A flaming phoenix",
      "The Dark Mark — a skull with a serpent tongue",
      "A hovering Hogwarts crest",
      "A burning broomstick"
    ],
    answer: 1,
    chapter: 9,
    chapterName: "The Dark Mark",
    explain: "An emerald skull with a serpent for a tongue — Voldemort's calling card — blazes above the campsite. Death Eaters have not been seen this open in years."
  },
  {
    q: "Who is announced as the new Defense Against the Dark Arts teacher?",
    options: [
      "Gilderoy Lockhart, again",
      "Remus Lupin, returning",
      "\"Mad-Eye\" Alastor Moody",
      "Dolores Umbridge"
    ],
    answer: 2,
    chapter: 12,
    chapterName: "The Triwizard Tournament",
    explain: "Dumbledore announces both the Triwizard Tournament's revival and Moody — a famously paranoid retired Auror — as the new DADA teacher."
  },
  {
    q: "Which three curses does Moody demonstrate as the Unforgivables?",
    options: [
      "Confundus, Stupefy, Petrificus Totalus",
      "Imperio, Crucio, Avada Kedavra",
      "Sectumsempra, Crucio, Imperio",
      "Avada Kedavra, Reducto, Bombarda"
    ],
    answer: 1,
    chapter: 14,
    chapterName: "The Unforgivable Curses",
    explain: "He shows them on a spider: Imperius (control), Cruciatus (torture), and the Killing Curse — a single use of any earns a life sentence in Azkaban."
  },
  {
    q: "How does Beauxbatons' delegation arrive at Hogwarts?",
    options: [
      "On thestral-drawn carriages from the sky",
      "By a powder-blue carriage pulled by enormous winged horses",
      "By a flying ship",
      "Through the Floo Network"
    ],
    answer: 1,
    chapter: 15,
    chapterName: "Beauxbatons and Durmstrang",
    explain: "A house-sized carriage drawn by twelve palomino abraxan horses descends onto the lawn. Durmstrang arrives differently — by ship, surfacing from the lake."
  },
  {
    q: "How many champions does the Goblet of Fire spit out — and why is that a problem?",
    options: [
      "Three, all from different schools, as expected",
      "Four — Harry's name comes out as a fourth, even though he never entered",
      "Two, after a tie",
      "Five, because the Goblet malfunctions"
    ],
    answer: 1,
    chapter: 17,
    chapterName: "The Four Champions",
    explain: "Cedric, Fleur, and Krum are picked. Then the Goblet flares again and a fourth slip of paper drifts out: Harry Potter."
  },
  {
    q: "What kind of dragon does Harry face in the First Task?",
    options: [
      "A Common Welsh Green",
      "A Hungarian Horntail",
      "A Norwegian Ridgeback",
      "A Chinese Fireball"
    ],
    answer: 1,
    chapter: 20,
    chapterName: "The First Task",
    explain: "Harry pulls the most vicious of the four — the Hungarian Horntail — and Summons his Firebolt to outfly her for the golden egg."
  },
  {
    q: "What does Hermione found, to the bemused indifference of nearly everyone?",
    options: [
      "Dumbledore's Army",
      "The Society for the Promotion of Elfish Welfare (S.P.E.W.)",
      "The Order of the Phoenix",
      "The Slug Club"
    ],
    answer: 1,
    chapter: 14,
    chapterName: "The Unforgivable Curses",
    explain: "Hermione is horrified by the way house-elves are treated and starts knitting hats and badges to free them. Most of the elves are insulted by it."
  },
  {
    q: "Who does Hermione go to the Yule Ball with?",
    options: [
      "Ron Weasley",
      "Cedric Diggory",
      "Viktor Krum",
      "Neville Longbottom"
    ],
    answer: 2,
    chapter: 23,
    chapterName: "The Yule Ball",
    explain: "Krum has been watching her in the library all term. Nobody recognises her in periwinkle dress robes with her hair sleek — least of all Ron."
  },
  {
    q: "What does Harry use to breathe underwater in the Second Task?",
    options: ["A Bubble-Head Charm", "Polyjuice Potion of a fish", "Gillyweed", "A Sea-snail spell"],
    answer: 2,
    chapter: 26,
    chapterName: "The Second Task",
    explain: "Dobby smuggles him a tangle of slimy gillyweed at the last minute — chew and swallow, and gills sprout on his neck."
  },
  {
    q: "What is the layout of the Third Task?",
    options: [
      "A flooded coliseum",
      "A flying obstacle course",
      "An enormous hedge maze on the Quidditch pitch",
      "An underground labyrinth of trapdoors"
    ],
    answer: 2,
    chapter: 31,
    chapterName: "The Third Task",
    explain: "The Quidditch pitch has been transformed into a twenty-foot-high hedge maze. The first to reach the Triwizard Cup at the centre wins."
  },
  {
    q: "What three ingredients does Wormtail use to resurrect Voldemort?",
    options: [
      "Hair of an enemy, blood of a friend, tear of a child",
      "Bone of the father, flesh of the servant, blood of the enemy",
      "Eye of newt, breath of basilisk, blood of unicorn",
      "Tooth of dragon, scale of merperson, soul of a Dementor"
    ],
    answer: 1,
    chapter: 32,
    chapterName: "Flesh, Blood, and Bone",
    explain: "Bone from his father's grave (unknowingly given), Wormtail's own hand cut off, and Harry's blood — taken by force at the headstone."
  },
  {
    q: "What is the Triwizard Cup actually?",
    options: [
      "A trophy",
      "An animated Snitch in disguise",
      "A Portkey, secretly enchanted to take its winner to Voldemort",
      "A Horcrux"
    ],
    answer: 2,
    chapter: 31,
    chapterName: "The Third Task",
    explain: "Crouch Jr puts the Imperius Curse on the Cup so it would Portkey whoever touched it straight to a graveyard in Little Hangleton."
  },
  {
    q: "What unusual effect happens when Harry's and Voldemort's wands meet in the graveyard?",
    options: [
      "Both wands explode",
      "Priori Incantatem — a golden cage, and the echoes of Voldemort's victims pour from his wand",
      "Voldemort is stunned by the rebound",
      "Harry's wand absorbs Voldemort's"
    ],
    answer: 1,
    chapter: 34,
    chapterName: "Priori Incantatem",
    explain: "Their twin-cored wands lock in mid-air. From Voldemort's wand emerge the shades of his recent victims — Cedric, Bertha Jorkins, Frank Bryce, Lily and James Potter."
  },
  {
    q: "Who has been impersonating Mad-Eye Moody all year using Polyjuice Potion?",
    options: [
      "Severus Snape",
      "Igor Karkaroff",
      "Barty Crouch Jr",
      "Peter Pettigrew"
    ],
    answer: 2,
    chapter: 35,
    chapterName: "Veritaserum",
    explain: "The real Moody has been chained inside his own seven-locked trunk all term. Crouch Jr — supposedly dead — has been wearing his face."
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
  if (current >= questions.length) {
    renderResults();
    return;
  }

  answered = false;
  currentQEl.textContent = current + 1;
  progressFill.style.width = ((current) / questions.length * 100) + "%";

  const q = questions[current];
  quizArea.innerHTML = `
    <div class="question-card">
      <h2>${escapeHtml(q.q)}</h2>
      <div class="options">
        ${q.options.map((opt, i) => `
          <button class="option" data-index="${i}">${escapeHtml(opt)}</button>
        `).join("")}
      </div>
      <div class="feedback" id="feedback"></div>
      <button class="next-btn" id="next-btn" style="display:none;">
        ${current + 1 === questions.length ? "See Results" : "Next Question →"}
      </button>
    </div>
  `;

  quizArea.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => handleAnswer(Number(btn.dataset.index), btn));
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    current++;
    render();
  });
}

function handleAnswer(chosenIndex, btn) {
  if (answered) return;
  answered = true;

  const q = questions[current];
  const correct = chosenIndex === q.answer;
  const allButtons = quizArea.querySelectorAll(".option");

  allButtons.forEach((b, i) => {
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
    feedback.innerHTML = `
      <strong>Not quite.</strong> The answer is <em>${escapeHtml(q.options[q.answer])}</em>.
      <div class="chapter-hint">
        Revisit <strong>Chapter ${q.chapter}: ${escapeHtml(q.chapterName)}</strong> — ${escapeHtml(q.explain)}
      </div>
    `;
    feedback.className = "feedback show incorrect";
  }

  document.getElementById("next-btn").style.display = "inline-block";
  progressFill.style.width = ((current + 1) / questions.length * 100) + "%";
}

function renderResults() {
  const pct = Math.round(score / questions.length * 100);
  let verdict;
  if (pct === 100) verdict = "Perfect! You're champion of all four schools.";
  else if (pct >= 85) verdict = "Outstanding — Triwizard winner material.";
  else if (pct >= 65) verdict = "Solid effort. You'd survive at least two tasks.";
  else if (pct >= 45) verdict = "A passable showing — but mind the cup, it's a Portkey.";
  else verdict = "Best re-read before the dragons get you.";

  document.getElementById("progress").style.display = "none";

  quizArea.innerHTML = `
    <div class="results">
      <h2>Your Result</h2>
      <div class="score">${score} / ${questions.length}</div>
      <div class="verdict">${verdict}</div>
      <button class="restart-btn" onclick="restart()">Try Again</button>
    </div>
  `;
}

function restart() {
  current = 0;
  score = 0;
  document.getElementById("progress").style.display = "";
  render();
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

render();
