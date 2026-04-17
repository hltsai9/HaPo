// Harry Potter and the Prisoner of Azkaban — Quiz
// Each question lists the chapter the answer appears in,
// so if you get it wrong you know exactly where to re-read.

const questions = [
  {
    q: "What does Harry accidentally do to Aunt Marge when she insults his parents?",
    options: [
      "Turns her hair green",
      "Inflates her like a balloon",
      "Makes her grow a pig's tail",
      "Gives her donkey ears"
    ],
    answer: 1,
    chapter: 2,
    chapterName: "Aunt Marge's Big Mistake",
    explain: "Harry loses his temper and accidentally inflates Aunt Marge into a giant purple balloon that bobs up toward the ceiling and floats out of the house."
  },
  {
    q: "What is the name of the purple triple-decker bus that picks Harry up after he flees the Dursleys?",
    options: [
      "The Wizard Express",
      "The Nightflyer",
      "The Knight Bus",
      "The Hogsmeade Coach"
    ],
    answer: 2,
    chapter: 3,
    chapterName: "The Knight Bus",
    explain: "The Knight Bus is emergency transport for stranded witches and wizards. Wave your wand arm and it appears with a BANG — as Stan Shunpike would tell you."
  },
  {
    q: "What creatures board the Hogwarts Express searching for Sirius Black, and cause Harry to faint?",
    options: ["Aurors", "Dementors", "Banshees", "Inferi"],
    answer: 1,
    chapter: 5,
    chapterName: "The Dementor",
    explain: "Dementors swarm the train looking for the escaped prisoner. Harry hears his mother scream in his head before Lupin drives the creature off with a Patronus."
  },
  {
    q: "What does Professor Trelawney claim to see in Harry's tea leaves during their first Divination class?",
    options: ["The Thestral", "The Phoenix", "The Basilisk", "The Grim"],
    answer: 3,
    chapter: 6,
    chapterName: "Talons and Tea Leaves",
    explain: "Trelawney gasps that she sees the Grim — a giant, spectral black dog — and proclaims it an omen of imminent, certain death."
  },
  {
    q: "What magical creature does Hagrid introduce for his very first Care of Magical Creatures lesson?",
    options: ["A thestral", "A niffler", "A hippogriff", "A blast-ended skrewt"],
    answer: 2,
    chapter: 6,
    chapterName: "Talons and Tea Leaves",
    explain: "Hagrid proudly brings out a flock of hippogriffs — including Buckbeak, who lets Harry ride him, and later bites Draco for being rude."
  },
  {
    q: "In the Boggart lesson, what form does Snape take when Neville's boggart changes — and how does Neville defeat it?",
    options: [
      "A vampire, by throwing garlic",
      "Snape wearing Neville's gran's clothes, with the spell Riddikulus",
      "A giant spider, by squashing it",
      "A mummy, by unwrapping it"
    ],
    answer: 1,
    chapter: 7,
    chapterName: "The Boggart in the Wardrobe",
    explain: "Lupin has Neville picture Snape in his grandmother's vulture-topped hat, green dress, and red handbag — then cry \"Riddikulus!\""
  },
  {
    q: "Who slashes the Fat Lady's portrait to ribbons trying to enter Gryffindor Tower?",
    options: [
      "Peeves the poltergeist",
      "A Dementor",
      "Sirius Black",
      "Professor Snape"
    ],
    answer: 2,
    chapter: 8,
    chapterName: "Flight of the Fat Lady",
    explain: "The Fat Lady flees her frame, shrieking that it was Sirius Black — he'd arrived at the password-protected portrait and went berserk when she refused him entry."
  },
  {
    q: "Who secretly gives Harry the Marauder's Map?",
    options: [
      "Remus Lupin",
      "Sirius Black",
      "Fred and George Weasley",
      "Dumbledore"
    ],
    answer: 2,
    chapter: 10,
    chapterName: "The Marauder's Map",
    explain: "Fred and George hand over the Map to keep Harry out of Snape's way during the Hogsmeade trips he isn't allowed on. They stole it from Filch's office years earlier."
  },
  {
    q: "What does the Marauder's Map require you to say to activate it?",
    options: [
      "\"Lumos Maxima\"",
      "\"I solemnly swear that I am up to no good\"",
      "\"Open says me\"",
      "\"Show me the way\""
    ],
    answer: 1,
    chapter: 10,
    chapterName: "The Marauder's Map",
    explain: "Tap the map and recite: \"I solemnly swear that I am up to no good.\" To wipe it clean: \"Mischief managed.\""
  },
  {
    q: "Who anonymously sends Harry a Firebolt for Christmas — a gift Professor McGonagall promptly confiscates for inspection?",
    options: [
      "Dumbledore",
      "The Weasleys",
      "Sirius Black",
      "Madam Hooch"
    ],
    answer: 2,
    chapter: 11,
    chapterName: "The Firebolt",
    explain: "Sirius orders the Firebolt by mail from his hiding place and signs Harry's own name on the withdrawal slip at Gringotts. Harry and Ron don't find out until the end of term."
  },
  {
    q: "What form does Harry's Patronus take?",
    options: ["A wolf", "A dog", "A stag", "A phoenix"],
    answer: 2,
    chapter: 12,
    chapterName: "The Patronus",
    explain: "Harry's Patronus is a great silver stag — the same form as his father James's Animagus, known to the Marauders as Prongs."
  },
  {
    q: "What happens to Harry's Nimbus 2000 during the stormy Quidditch match against Hufflepuff?",
    options: [
      "It gets hit by a rogue Bludger and snaps in half",
      "It blows into the Whomping Willow and is smashed to splinters",
      "Snape jinxes it in front of the whole crowd",
      "A Dementor catches it in midair"
    ],
    answer: 1,
    chapter: 13,
    chapterName: "Gryffindor versus Ravenclaw",
    explain: "Harry falls off his broom when Dementors invade the pitch. The unmanned Nimbus 2000 drifts into the Whomping Willow and is beaten into kindling."
  },
  {
    q: "Where does Snape catch Harry sneaking around without permission, and nearly proves he's been to Hogsmeade?",
    options: [
      "The Shrieking Shack",
      "Honeydukes cellar",
      "A corridor near the statue of the one-eyed witch, holding the Marauder's Map",
      "The Three Broomsticks"
    ],
    answer: 2,
    chapter: 14,
    chapterName: "Snape's Grudge",
    explain: "Snape finds Harry by the statue of the one-eyed witch holding a suspicious bit of blank parchment. Lupin quietly saves him from detection — and returns the Map."
  },
  {
    q: "What does Professor Trelawney predict during her sudden trance in Harry's end-of-year exam?",
    options: [
      "That Harry will die before the year is out",
      "That the Dark Lord's servant will break free tonight and return to his master",
      "That Dumbledore will fall",
      "That Sirius Black will be caught"
    ],
    answer: 1,
    chapter: 16,
    chapterName: "Professor Trelawney's Prediction",
    explain: "In a harsh, unrecognizable voice, Trelawney prophesies that the servant, chained for twelve years, will break free tonight and set out to rejoin his master."
  },
  {
    q: "What does the great black dog do to Ron near the Whomping Willow?",
    options: [
      "Bites him on the hand",
      "Steals Scabbers from his pocket",
      "Drags him by the leg into a tunnel under the tree",
      "Chases him into the Forbidden Forest"
    ],
    answer: 2,
    chapter: 17,
    chapterName: "Cat, Rat, and Dog",
    explain: "The huge black dog — Sirius in Animagus form — grabs Ron's leg, breaks it, and drags him through a gap in the Whomping Willow's roots into the Shrieking Shack."
  },
  {
    q: "In \"Moony, Wormtail, Padfoot, and Prongs,\" which nickname belongs to which Marauder?",
    options: [
      "Moony = James, Wormtail = Sirius, Padfoot = Peter, Prongs = Remus",
      "Moony = Remus, Wormtail = Peter, Padfoot = Sirius, Prongs = James",
      "Moony = Sirius, Wormtail = James, Padfoot = Remus, Prongs = Peter",
      "Moony = Peter, Wormtail = Remus, Padfoot = James, Prongs = Sirius"
    ],
    answer: 1,
    chapter: 18,
    chapterName: "Moony, Wormtail, Padfoot, and Prongs",
    explain: "Moony (werewolf) = Remus Lupin, Wormtail (rat) = Peter Pettigrew, Padfoot (dog) = Sirius Black, Prongs (stag) = James Potter. Lupin explains it in the Shrieking Shack."
  },
  {
    q: "Who was the real secret-keeper who betrayed Harry's parents to Voldemort?",
    options: [
      "Sirius Black",
      "Remus Lupin",
      "Peter Pettigrew",
      "Severus Snape"
    ],
    answer: 2,
    chapter: 19,
    chapterName: "The Servant of Lord Voldemort",
    explain: "At the last minute James swapped to Pettigrew — \"a weak, talentless thing\" nobody would suspect. Pettigrew gave them up, faked his own death, and framed Sirius."
  },
  {
    q: "What does Hermione reveal at the end of the year that allowed her to take every class — and save two innocent lives?",
    options: [
      "A Portkey",
      "A Time-Turner",
      "Polyjuice Potion",
      "Felix Felicis"
    ],
    answer: 1,
    chapter: 21,
    chapterName: "Hermione's Secret",
    explain: "McGonagall gave Hermione a Time-Turner so she could attend overlapping lessons. She and Harry use it to rescue Buckbeak and fly Sirius to freedom."
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
  if (pct === 100) verdict = "Perfect! Dumbledore himself would be impressed.";
  else if (pct >= 85) verdict = "Outstanding — you could out-prophesy Trelawney.";
  else if (pct >= 65) verdict = "Acceptable. Lupin would give you a chocolate frog.";
  else if (pct >= 45) verdict = "A passable effort — but the Dementors would still find you first.";
  else verdict = "Best borrow Hermione's Time-Turner and study again.";

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
