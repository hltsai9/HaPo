// Harry Potter and the Chamber of Secrets — Quiz
// Each question lists the chapter the answer appears in,
// so if you get it wrong you know exactly where to re-read.

const questions = [
  {
    q: "What punishment does Uncle Vernon inflict on Harry after Dobby's pudding disaster?",
    options: [
      "He throws Harry into the garden shed",
      "He bars up Harry's window and locks him in his room",
      "He burns Harry's schoolbooks",
      "He sends Harry to Aunt Marge's house"
    ],
    answer: 1,
    chapter: 2,
    chapterName: "Dobby's Warning",
    explain: "Vernon fits bars to Harry's window and locks him in his bedroom, with a cat flap cut for food — until Ron and the twins rescue him."
  },
  {
    q: "Which house-elf appears in Harry's bedroom to warn him not to return to Hogwarts?",
    options: ["Kreacher", "Winky", "Dobby", "Hokey"],
    answer: 2,
    chapter: 2,
    chapterName: "Dobby's Warning",
    explain: "Dobby — wearing a filthy pillowcase and bowing so low his nose hits the floor — pleads with Harry to stay away from the school."
  },
  {
    q: "How do Fred, George, and Ron rescue Harry from the Dursleys?",
    options: [
      "On a flying carpet",
      "Through the Floo Network",
      "On thestrals",
      "In a flying Ford Anglia"
    ],
    answer: 3,
    chapter: 3,
    chapterName: "The Burrow",
    explain: "They arrive at Privet Drive in the middle of the night in Arthur Weasley's enchanted turquoise Ford Anglia — and tear the bars clean off Harry's window."
  },
  {
    q: "What does Lucius Malfoy secretly slip into Ginny's cauldron at Flourish and Blotts?",
    options: [
      "A locket",
      "A cursed necklace",
      "An old black diary",
      "A silver ring"
    ],
    answer: 2,
    chapter: 4,
    chapterName: "At Flourish and Blotts",
    explain: "During a scuffle with Arthur Weasley, Lucius slips a battered black diary into Ginny's cauldron — Tom Riddle's diary."
  },
  {
    q: "When Harry and Ron miss the Hogwarts Express, how do they get to school?",
    options: [
      "They take a Knight Bus",
      "They fly the Ford Anglia",
      "They Apparate with Mr. Weasley",
      "They catch a later train"
    ],
    answer: 1,
    chapter: 5,
    chapterName: "The Whomping Willow",
    explain: "They fly the Ford Anglia all the way to Hogwarts — and crash straight into the Whomping Willow on arrival."
  },
  {
    q: "Who is the new Defense Against the Dark Arts teacher?",
    options: [
      "Remus Lupin",
      "Gilderoy Lockhart",
      "Alastor Moody",
      "Dolores Umbridge"
    ],
    answer: 1,
    chapter: 6,
    chapterName: "Gilderoy Lockhart",
    explain: "Gilderoy Lockhart, bestselling author of seven self-aggrandizing memoirs, takes the cursed DADA post — and is breathtakingly incompetent."
  },
  {
    q: "What spell does Ron try to hex Malfoy with, only to have it backfire?",
    options: [
      "The Jelly-Legs Jinx",
      "The Full Body-Bind",
      "The Slug-Vomiting Curse",
      "The Bat-Bogey Hex"
    ],
    answer: 2,
    chapter: 7,
    chapterName: "Mudbloods and Murmurs",
    explain: "Ron tries \"Eat slugs!\" on Malfoy for calling Hermione a Mudblood, but his broken, Spellotaped wand backfires — and Ron spends the afternoon belching slugs."
  },
  {
    q: "Whose 500th Deathday Party do Harry, Ron, and Hermione attend?",
    options: [
      "The Fat Friar's",
      "The Bloody Baron's",
      "Moaning Myrtle's",
      "Nearly Headless Nick's"
    ],
    answer: 3,
    chapter: 8,
    chapterName: "The Deathday Party",
    explain: "Sir Nicholas de Mimsy-Porpington invites the trio to his grim 500th Deathday Party in a cold dungeon full of floating, long-dead guests."
  },
  {
    q: "What message appears written in blood on the wall after Mrs. Norris is attacked?",
    options: [
      "\"Fear the Heir\"",
      "\"The Chamber of Secrets has been opened. Enemies of the heir, beware.\"",
      "\"Beware the Serpent of Slytherin\"",
      "\"The monster returns\""
    ],
    answer: 1,
    chapter: 9,
    chapterName: "The Writing on the Wall",
    explain: "The ominous warning is painted in blood-red letters a foot high on the corridor wall — above Mrs. Norris, hanging stiff as a board from a torch bracket."
  },
  {
    q: "What happens to Harry's arm after Lockhart tries to mend it during the Quidditch match?",
    options: [
      "It grows twice as long",
      "Every bone in his arm vanishes",
      "It turns to stone",
      "It starts sprouting feathers"
    ],
    answer: 1,
    chapter: 10,
    chapterName: "The Rogue Bludger",
    explain: "Lockhart's botched charm removes every bone from Harry's arm, leaving it floppy as rubber. Madam Pomfrey has to re-grow the bones overnight with Skele-Gro."
  },
  {
    q: "What does Harry reveal he can do at the Dueling Club, horrifying the entire school?",
    options: [
      "Cast nonverbal curses",
      "Speak Parseltongue",
      "Disapparate",
      "Conjure a Patronus"
    ],
    answer: 1,
    chapter: 11,
    chapterName: "The Dueling Club",
    explain: "When Draco conjures a snake, Harry speaks Parseltongue to stop it attacking Justin Finch-Fletchley — and everyone assumes he's the Heir of Slytherin."
  },
  {
    q: "Whose hair does Hermione accidentally use in the Polyjuice Potion, with disastrous results?",
    options: [
      "Pansy Parkinson's",
      "Millicent Bulstrode's (a cat hair, actually)",
      "Professor McGonagall's cat",
      "Mrs. Norris's"
    ],
    answer: 1,
    chapter: 12,
    chapterName: "The Polyjuice Potion",
    explain: "Hermione grabs what she thinks is Millicent Bulstrode's hair off her robes — but it's a cat's hair, and she ends up furry with whiskers and a tail."
  },
  {
    q: "Who is the charming Head Boy whose memory lives inside the diary?",
    options: [
      "Tom Riddle",
      "Salazar Slytherin",
      "Godric Gryffindor",
      "Nicolas Flamel"
    ],
    answer: 0,
    chapter: 13,
    chapterName: "The Very Secret Diary",
    explain: "Tom Marvolo Riddle — a model student from fifty years earlier whose name, rearranged, spells \"I am Lord Voldemort.\""
  },
  {
    q: "Who arrives at Hagrid's cabin to arrest him and cart him off to Azkaban?",
    options: [
      "Lucius Malfoy",
      "Cornelius Fudge",
      "Professor Snape",
      "Dolores Umbridge"
    ],
    answer: 1,
    chapter: 14,
    chapterName: "Cornelius Fudge",
    explain: "Minister for Magic Cornelius Fudge arrives with Lucius Malfoy (who also has an order to suspend Dumbledore) and takes a protesting Hagrid away."
  },
  {
    q: "What kind of creature is Aragog, Hagrid's beloved pet in the Forbidden Forest?",
    options: [
      "A hippogriff",
      "A manticore",
      "An acromantula",
      "A basilisk"
    ],
    answer: 2,
    chapter: 15,
    chapterName: "Aragog",
    explain: "Aragog is a car-sized, speaking acromantula — a giant spider Hagrid raised in a school cupboard decades ago. He is not, however, the monster of the Chamber."
  },
  {
    q: "Where is the entrance to the Chamber of Secrets?",
    options: [
      "Behind Dumbledore's office",
      "Under the Whomping Willow",
      "Inside Moaning Myrtle's bathroom",
      "Beneath the Great Hall"
    ],
    answer: 2,
    chapter: 16,
    chapterName: "The Chamber of Secrets",
    explain: "Harry and Ron realize Myrtle was killed in that very bathroom. Harry hisses \"Open\" in Parseltongue at a tap engraved with a tiny snake — and the sinks slide apart."
  },
  {
    q: "What does Harry use to stab Tom Riddle's diary and defeat him?",
    options: [
      "The Sword of Gryffindor",
      "A basilisk fang",
      "Fawkes's feather",
      "His wand"
    ],
    answer: 1,
    chapter: 17,
    chapterName: "The Heir of Slytherin",
    explain: "Having already killed the basilisk with the sword, Harry seizes one of its venomous fangs and drives it through the diary, ending Riddle once more."
  },
  {
    q: "How does Harry trick Lucius Malfoy into setting Dobby free?",
    options: [
      "He steals Lucius's wand",
      "He blackmails him about the diary",
      "He hides a sock inside the diary, which Lucius throws to Dobby",
      "He persuades Dumbledore to insist on it"
    ],
    answer: 2,
    chapter: 18,
    chapterName: "Dobby's Reward",
    explain: "Harry stuffs his smelly sock inside the diary. When Lucius furiously throws the book away, the sock goes with it — and Dobby catches it. \"Master has given Dobby a sock!\" — he is free."
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
  if (pct === 100) verdict = "Perfect! Hermione would be taking notes from YOU.";
  else if (pct >= 85) verdict = "Top marks — worthy of the Special Award for Services to the School.";
  else if (pct >= 65) verdict = "A solid showing. You'd have survived the Chamber.";
  else if (pct >= 45) verdict = "A reasonable start — but best avoid looking any basilisks in the eye.";
  else verdict = "Back to the library. A Polyjuice of studying is in order!";

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
