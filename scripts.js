const flashcards = [
  { front: "🛑 Avoided Economic Default", back: "Despite severe crisis (2022–23), Pakistan avoided sovereign default through IMF support and international cooperation, protecting banks, imports, and savings." },
  { front: "📉 Inflation Stabilization", back: "Inflation, which crossed crisis levels, was gradually brought under control by 2024–25 through monetary tightening and fiscal discipline." },
  { front: "💱 Exchange Rate Stability", back: "After sharp depreciation, the rupee stabilized due to market-based reforms, IMF oversight, and improved external discipline." },
  { front: "🏦 Foreign Reserves Recovery", back: "Foreign exchange reserves recovered from dangerously low levels, improving import cover and international payment confidence." },
  { front: "📊 Primary Fiscal Surplus", back: "Pakistan achieved a rare primary surplus, meaning government revenues exceeded expenditures (excluding interest), showing improved fiscal control." },
  { front: "🌍 IMF Long-Term Program", back: "Pakistan entered a multi-year IMF program (2024–27), improving credibility and policy continuity." },
  { front: "⭐ Credit Rating Upgrades", back: "Global rating agencies upgraded Pakistan’s outlook, signaling improved macro stability and investor confidence." },
  { front: "💻 IT & Services Export Growth", back: "IT and freelancing exports reached record highs, becoming a strong long-term growth sector." },
  { front: "📦 Import Discipline", back: "Imports were controlled during crisis years, narrowing the trade deficit and easing pressure on reserves." },
  { front: "⚡ Solar & Energy Transition", back: "Solar adoption accelerated in homes/businesses, reducing electricity cost pressure and long-term fuel import dependency." },
  { front: "✈️ PIA Privatization", back: "A major SOE reform step: PIA moved toward privatization after decades of losses." },
  { front: "🧑‍🤝‍🧑 Social Protection Expansion", back: "Cash-transfer support expanded to help poor households during high inflation." },
  { front: "🧠 Economic Resilience", back: "Pakistan absorbed global inflation, floods, and instability while keeping financial systems running." },
  { front: "🌐 International Re-Engagement", back: "Re-engagement with multilaterals and partners restored confidence and support pathways." },
  { front: "📌 Big Picture Success", back: "Main win: stabilization + credibility recovery + foundations for long-term reforms." },

  // Challenges / targets
  { front: "⚠️ Trade Deficit Risk", back: "Imports can rise faster than exports, pressuring the external account again." },
  { front: "⚠️ Tax System Weakness", back: "Low tax base and weak enforcement limit sustainable revenue." },
  { front: "⚠️ Energy Sector Losses", back: "Circular debt and inefficiencies keep hurting public finances." },
  { front: "⚠️ Climate Vulnerability", back: "Floods and climate shocks remain major macroeconomic risks." },
  { front: "🎯 Future Target", back: "Grow exports faster than imports, expand IT/services, and reduce debt dependency." }
];

let index = 0;

const card = document.getElementById("card");
const frontText = document.getElementById("frontText");
const backText = document.getElementById("backText");
const counter = document.getElementById("counter");
const progressBar = document.getElementById("progressBar");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");
const randomBtn = document.getElementById("randomBtn");

function render() {
  const c = flashcards[index];
  frontText.textContent = c.front;
  backText.textContent = c.back;

  const current = index + 1;
  const total = flashcards.length;
  counter.textContent = `Card ${current} of ${total}`;

  progressBar.style.width = `${(current / total) * 100}%`;
}

function flip() {
  card.classList.toggle("is-flipped");
}

function next() {
  index = (index + 1) % flashcards.length;
  card.classList.remove("is-flipped");
  render();
}

function prev() {
  index = (index - 1 + flashcards.length) % flashcards.length;
  card.classList.remove("is-flipped");
  render();
}

function randomCard() {
  let newIndex = index;
  while (flashcards.length > 1 && newIndex === index) {
    newIndex = Math.floor(Math.random() * flashcards.length);
  }
  index = newIndex;
  card.classList.remove("is-flipped");
  render();
}

// Buttons
card.addEventListener("click", flip);
flipBtn.addEventListener("click", flip);
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
randomBtn.addEventListener("click", randomCard);

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
  if (e.key === " " || e.key === "Enter") flip();
});

render();
