const flashcards = [
  { front: "🛑 Avoided Economic Default", back: "Despite severe crisis (2022–23), Pakistan avoided sovereign default through IMF support and international cooperation, protecting banks, imports, and savings." },
  { front: "📉 Inflation Stabilization", back: "Inflation, which crossed crisis levels, was gradually brought under control by 2024–25 through monetary tightening and fiscal discipline." },
  { front: "💱 Exchange Rate Stability", back: "After sharp depreciation, the rupee stabilized due to market-based reforms, IMF oversight, and improved external discipline." },
  { front: "🏦 Foreign Reserves Recovery", back: "Foreign exchange reserves recovered from dangerously low levels, improving import cover and international payment confidence." },
  { front: "📊 Primary Fiscal Surplus", back: "Pakistan achieved a rare primary surplus, meaning government revenues exceeded expenditures (excluding interest), showing improved fiscal control." },
  { front: "🌍 IMF Long-Term Program", back: "Pakistan entered a multi-year IMF Extended Fund Facility (2024–27), restoring international credibility and policy continuity." },
  { front: "⭐ Credit Rating Upgrades", back: "Global rating agencies upgraded Pakistan’s outlook, signaling improved macroeconomic stability and investor confidence." },
  { front: "💻 IT & Services Export Growth", back: "IT and freelancing exports reached record highs, becoming Pakistan’s fastest-growing and most promising export sector." },
  { front: "📦 Import Discipline", back: "Imports were controlled during crisis years, narrowing the trade deficit and reducing pressure on foreign exchange reserves." },
  { front: "⚡ Solar & Energy Transition", back: "Rapid adoption of solar energy by households and businesses reduced electricity costs and long-term fuel import dependence." },
  { front: "✈️ PIA Privatization", back: "After decades of losses, Pakistan International Airlines was partially privatized — a landmark structural reform." },
  { front: "🧑‍🤝‍🧑 Social Protection Expansion", back: "Benazir Income Support Programme (BISP) coverage and payments increased, helping poor households during inflation shock." },
  { front: "🧠 Economic Resilience", back: "Pakistan absorbed global inflation, floods, political instability, and supply shocks while keeping the financial system functional." },
  { front: "🌐 International Re-Engagement", back: "Re-engagement with IMF, World Bank, ADB, GCC countries, and China improved Pakistan’s global economic standing." },
  { front: "📌 Big Picture Success", back: "Pakistan’s biggest achievement was stabilizing the economy, restoring credibility, and laying foundations for long-term reform." },

  // Optional challenges set:
  { front: "⚠️ Trade Deficit Risk", back: "Imports still grow faster than exports at times, keeping pressure on the balance of payments." },
  { front: "⚠️ Tax System Weakness", back: "Low tax base and weak enforcement limit sustainable revenue growth." },
  { front: "⚠️ Energy Sector Losses", back: "Circular debt and inefficiencies continue to burden public finances." },
  { front: "⚠️ Climate Vulnerability", back: "Floods and climate shocks remain major economic risks." },
  { front: "🎯 Future Target", back: "Sustain reforms, grow exports faster than imports, expand IT/services, and reduce dependency on debt." }
];

let index = 0;
let showingFront = true;

const card = document.getElementById("card");
const cardText = document.getElementById("cardText");
const counter = document.getElementById("counter");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");

function renderCard() {
  const current = flashcards[index];
  cardText.textContent = showingFront ? current.front : current.back;
  counter.textContent = `Card ${index + 1} of ${flashcards.length} • ${showingFront ? "Front" : "Back"}`;
}

function flipCard() {
  showingFront = !showingFront;
  renderCard();
}

function nextCard() {
  index = (index + 1) % flashcards.length;
  showingFront = true;
  renderCard();
}

function prevCard() {
  index = (index - 1 + flashcards.length) % flashcards.length;
  showingFront = true;
  renderCard();
}

card.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

renderCard();
