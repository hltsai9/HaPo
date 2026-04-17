// Harry Potter and the Philosopher's Stone — Quiz
// Each question lists the chapter the answer appears in,
// so if you get it wrong you know exactly where to re-read.

const questions = [
  {
    q: "Who leaves baby Harry on the Dursleys' doorstep the night his parents died?",
    options: ["Rubeus Hagrid", "Albus Dumbledore", "Minerva McGonagall", "Sirius Black"],
    answer: 1,
    chapter: 1,
    chapterName: "The Boy Who Lived",
    explain: "Dumbledore places Harry on the doorstep with a letter after Hagrid delivers him on Sirius Black's flying motorbike."
  },
  {
    q: "At the zoo on Dudley's birthday, what happens when Harry accidentally uses magic?",
    options: [
      "He turns his aunt into a balloon",
      "The glass of the snake's enclosure vanishes",
      "Dudley grows a pig's tail",
      "The gorilla escapes its cage"
    ],
    answer: 1,
    chapter: 2,
    chapterName: "The Vanishing Glass",
    explain: "The glass disappears and the Brazilian boa constrictor slips free, thanking Harry on its way out."
  },
  {
    q: "Where does Uncle Vernon finally take the family to escape the endless Hogwarts letters?",
    options: [
      "A caravan park in Wales",
      "A friend's farmhouse",
      "A hut on a rock in the sea",
      "A hotel in London"
    ],
    answer: 2,
    chapter: 3,
    chapterName: "The Letters from No One",
    explain: "Vernon drags the family to a miserable shack on a rock in the middle of the sea, convinced no letter can follow them there."
  },
  {
    q: "What does Hagrid give Dudley when he finds the Dursleys in the hut?",
    options: ["A black eye", "A pig's tail", "A pumpkin head", "Donkey ears"],
    answer: 1,
    chapter: 4,
    chapterName: "The Keeper of the Keys",
    explain: "Annoyed at Vernon for insulting Dumbledore, Hagrid points his umbrella at Dudley and gives him a curly pink pig's tail."
  },
  {
    q: "What is the name of the wizarding bank in Diagon Alley?",
    options: ["Gringotts", "Flourish and Blotts", "Ollivanders", "The Leaky Cauldron"],
    answer: 0,
    chapter: 5,
    chapterName: "Diagon Alley",
    explain: "Gringotts is the goblin-run bank — the safest place in the wizarding world, except perhaps for Hogwarts."
  },
  {
    q: "What magical core does Mr. Ollivander reveal is inside Harry's wand?",
    options: ["Dragon heartstring", "Unicorn tail hair", "Phoenix feather", "Veela hair"],
    answer: 2,
    chapter: 5,
    chapterName: "Diagon Alley",
    explain: "Harry's wand is 11 inches, holly, with a phoenix feather core — and its brother wand belongs to Voldemort."
  },
  {
    q: "What platform do you run through at King's Cross to catch the Hogwarts Express?",
    options: ["Platform 7¼", "Platform 9¾", "Platform 10½", "Platform 13"],
    answer: 1,
    chapter: 6,
    chapterName: "The Journey from Platform Nine and Three-Quarters",
    explain: "You run straight at the barrier between platforms nine and ten — best at a bit of a run if you're nervous."
  },
  {
    q: "Which house does the Sorting Hat almost place Harry in before choosing Gryffindor?",
    options: ["Ravenclaw", "Hufflepuff", "Slytherin", "It never wavers"],
    answer: 2,
    chapter: 7,
    chapterName: "The Sorting Hat",
    explain: "The Hat tells Harry he could be great in Slytherin — but because Harry silently begs not to, it puts him in Gryffindor."
  },
  {
    q: "What does Snape ask Harry about on the very first day of Potions class?",
    options: [
      "The difference between a newt's eye and a toad's eye",
      "Where to find a bezoar",
      "How to brew a calming draught",
      "The name of Snape's favorite ingredient"
    ],
    answer: 1,
    chapter: 8,
    chapterName: "The Potions Master",
    explain: "Snape fires three questions at Harry: asphodel and wormwood, a bezoar (found in a goat's stomach), and monkshood vs. wolfsbane."
  },
  {
    q: "What position does Harry earn on the Gryffindor Quidditch team?",
    options: ["Keeper", "Beater", "Chaser", "Seeker"],
    answer: 3,
    chapter: 9,
    chapterName: "The Midnight Duel",
    explain: "After Harry dives fifty feet to catch Neville's Remembrall, Professor McGonagall makes him the youngest Seeker in a century."
  },
  {
    q: "What creature gets loose in the dungeons on Halloween?",
    options: ["A hippogriff", "A mountain troll", "A three-headed dog", "A boggart"],
    answer: 1,
    chapter: 10,
    chapterName: "Hallowe'en",
    explain: "A twelve-foot mountain troll is let into Hogwarts. Harry and Ron save Hermione by knocking it out with its own club."
  },
  {
    q: "What broomstick does Harry receive anonymously just before his first Quidditch match?",
    options: ["A Comet 260", "A Cleansweep Seven", "A Nimbus 2000", "A Firebolt"],
    answer: 2,
    chapter: 11,
    chapterName: "Quidditch",
    explain: "McGonagall, in secret, orders Harry a Nimbus 2000 — the finest racing broom available that year."
  },
  {
    q: "What does Ron see when he looks into the Mirror of Erised?",
    options: [
      "His family all together",
      "Himself holding the Philosopher's Stone",
      "Himself as Head Boy and Quidditch captain, holding the House Cup",
      "His parents younger and happier"
    ],
    answer: 2,
    chapter: 12,
    chapterName: "The Mirror of Erised",
    explain: "Ron longs to stand out from his talented brothers — so the mirror shows him standing alone with the House Cup and a Head Boy badge."
  },
  {
    q: "What is Nicolas Flamel famous for creating?",
    options: [
      "The Deathly Hallows",
      "The Philosopher's Stone",
      "The Elder Wand",
      "The Mirror of Erised"
    ],
    answer: 1,
    chapter: 13,
    chapterName: "Nicolas Flamel",
    explain: "Hermione finds Flamel in a book — he's the only known maker of the Philosopher's Stone, which produces the Elixir of Life."
  },
  {
    q: "What breed of dragon does Hagrid hatch in his wooden hut?",
    options: [
      "A Hungarian Horntail",
      "A Common Welsh Green",
      "A Norwegian Ridgeback",
      "A Chinese Fireball"
    ],
    answer: 2,
    chapter: 14,
    chapterName: "Norbert the Norwegian Ridgeback",
    explain: "Hagrid wins a dragon egg in a pub card game and hatches Norbert, a Norwegian Ridgeback, in his thoroughly flammable cabin."
  },
  {
    q: "What wounded creature do Harry and Draco come across in the Forbidden Forest?",
    options: ["A centaur", "A hippogriff", "A unicorn", "A thestral"],
    answer: 2,
    chapter: 15,
    chapterName: "The Forbidden Forest",
    explain: "A hooded figure is drinking the silver blood of a slain unicorn — Firenze the centaur rescues Harry and explains who it must be."
  },
  {
    q: "How do Harry, Ron, and Hermione get past Fluffy, the three-headed dog?",
    options: [
      "They cast a sleeping charm",
      "They play music to lull it asleep",
      "They feed it meat laced with potion",
      "They slip past while it's eating"
    ],
    answer: 1,
    chapter: 16,
    chapterName: "Through the Trapdoor",
    explain: "Hagrid had let slip that music puts Fluffy to sleep — Harry plays a flute (Hagrid's Christmas gift) to get them through the trapdoor."
  },
  {
    q: "Where has Lord Voldemort been hiding all year?",
    options: [
      "Inside the Mirror of Erised",
      "On the back of Professor Quirrell's head, beneath his turban",
      "In the Forbidden Forest as a shadow",
      "Possessing Professor Snape"
    ],
    answer: 1,
    chapter: 17,
    chapterName: "The Man with Two Faces",
    explain: "When Quirrell unwinds his turban, a hideous face sits on the back of his head — Voldemort's weakened form, kept alive by unicorn blood."
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
    feedback.innerHTML = `
      <strong>Correct!</strong> ${escapeHtml(q.explain)}
    `;
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
  if (pct === 100) verdict = "Perfect! Hermione Granger would be impressed.";
  else if (pct >= 85) verdict = "Top of the class — Gryffindor earns house points.";
  else if (pct >= 65) verdict = "A solid showing. Dumbledore would nod approvingly.";
  else if (pct >= 45) verdict = "A reasonable start — time for more reading under the Invisibility Cloak.";
  else verdict = "Back to the library with Hermione. A re-read is in order!";

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
