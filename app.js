const TOTAL_QUESTIONS = 30;
const DATA_PATH = "data/en.json";
const ANSWER_SCORES = {
  yes: 1,
  unsure: 0.5,
  no: 0,
};

const startButton = document.getElementById("start-test");
const learnMoreButton = document.getElementById("learn-more");
const restartButton = document.getElementById("restart");
const shareButton = document.getElementById("share");

const testCard = document.getElementById("test-card");
const resultCard = document.getElementById("result-card");
const infoCard = document.getElementById("info-card");

const wordEl = document.getElementById("word");
const bandEl = document.getElementById("band");
const progressEl = document.getElementById("progress");
const meterFill = document.getElementById("meter-fill");

const estimateEl = document.getElementById("estimate");
const levelEl = document.getElementById("level");
const levelExplainEl = document.getElementById("level-explain");
const sampleCountEl = document.getElementById("sample-count");
const knownRateEl = document.getElementById("known-rate");
const coverageEl = document.getElementById("coverage");

let dataset = null;
let session = [];
let currentIndex = 0;
let results = [];

const levelBands = [
  { level: "A1", max: 1000, label: "Basic everyday words for simple needs." },
  { level: "A2", max: 2000, label: "Common daily vocabulary across familiar topics." },
  { level: "B1", max: 3500, label: "Handles routine reading and conversations." },
  { level: "B2", max: 5000, label: "Comfortable with general media and texts." },
  { level: "C1", max: 8000, label: "Understands complex and academic language." },
  { level: "C2", max: Infinity, label: "Near-native breadth across rare terms." },
];

function setCardState(card, state) {
  card.setAttribute("data-state", state);
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function groupByBand(words) {
  const grouped = {};
  words.forEach((word) => {
    if (!grouped[word.band]) {
      grouped[word.band] = [];
    }
    grouped[word.band].push(word);
  });
  return grouped;
}

function buildSession(words, total) {
  const grouped = groupByBand(words);
  const bands = shuffle(Object.keys(grouped));
  const picks = [];
  const used = new Set();

  while (picks.length < total) {
    let added = false;
    bands.forEach((band) => {
      if (picks.length >= total) {
        return;
      }
      const options = grouped[band].filter((word) => !used.has(word.word));
      if (options.length === 0) {
        return;
      }
      const choice = options[Math.floor(Math.random() * options.length)];
      picks.push(choice);
      used.add(choice.word);
      added = true;
    });
    if (!added) {
      break;
    }
  }

  return picks;
}

function updateQuestion() {
  const current = session[currentIndex];
  wordEl.textContent = current.word;
  bandEl.textContent = `Band ${current.band} (${current.range})`;
  progressEl.textContent = `${currentIndex + 1} / ${session.length}`;
  meterFill.style.width = `${((currentIndex + 1) / session.length) * 100}%`;
}

function estimateVocabulary(resultsData) {
  const bandStats = {};
  resultsData.forEach((result) => {
    if (!bandStats[result.band]) {
      bandStats[result.band] = { score: 0, total: 0 };
    }
    bandStats[result.band].score += result.score;
    bandStats[result.band].total += 1;
  });

  const overall = resultsData.reduce((sum, result) => sum + result.score, 0) /
    Math.max(resultsData.length, 1);

  const ratios = dataset.bands.map((band) => {
    const stat = bandStats[band.index];
    if (!stat) {
      return null;
    }
    return stat.score / stat.total;
  });

  const resolvedRatios = ratios.map((ratio, index) => {
    if (ratio !== null) {
      return ratio;
    }
    const left = ratios.slice(0, index).reverse().find((value) => value !== null);
    const right = ratios.slice(index + 1).find((value) => value !== null);
    if (left !== undefined && right !== undefined) {
      return (left + right) / 2;
    }
    return left ?? right ?? overall;
  });

  const estimate = dataset.bands.reduce((sum, band, index) => {
    return sum + resolvedRatios[index] * band.size;
  }, 0);

  const clamped = Math.max(0, Math.min(dataset.maxRank, estimate));
  return Math.round(clamped / 50) * 50;
}

function getLevel(estimate) {
  return levelBands.find((band) => estimate <= band.max) ?? levelBands[0];
}

function showResults() {
  const estimate = estimateVocabulary(results);
  const levelInfo = getLevel(estimate);
  const knownRate = results.reduce((sum, item) => sum + item.score, 0) /
    Math.max(results.length, 1);

  estimateEl.textContent = `${estimate} words`;
  levelEl.textContent = levelInfo.level;
  levelExplainEl.textContent = levelInfo.label;
  sampleCountEl.textContent = `${results.length} samples`;
  knownRateEl.textContent = `${Math.round(knownRate * 100)}%`;
  coverageEl.textContent = `${dataset.bands.length} bands`;

  setCardState(testCard, "idle");
  setCardState(resultCard, "active");
  setCardState(infoCard, "active");
}

function resetTest() {
  session = buildSession(dataset.words, TOTAL_QUESTIONS);
  currentIndex = 0;
  results = [];
  updateQuestion();
  setCardState(testCard, "active");
  setCardState(resultCard, "idle");
  setCardState(infoCard, "active");
}

function handleAnswer(answer) {
  const current = session[currentIndex];
  results.push({
    word: current.word,
    band: current.band,
    score: ANSWER_SCORES[answer],
  });
  currentIndex += 1;
  if (currentIndex >= session.length) {
    showResults();
  } else {
    updateQuestion();
  }
}

function bindActions() {
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      handleAnswer(button.dataset.answer);
    });
  });

  startButton.addEventListener("click", () => {
    resetTest();
  });

  learnMoreButton.addEventListener("click", () => {
    infoCard.scrollIntoView({ behavior: "smooth" });
  });

  restartButton.addEventListener("click", () => {
    resetTest();
  });

  shareButton.addEventListener("click", async () => {
    const summary = `${estimateEl.textContent}, level ${levelEl.textContent}.`;
    try {
      await navigator.clipboard.writeText(summary);
      shareButton.textContent = "Copied";
      setTimeout(() => {
        shareButton.textContent = "Copy summary";
      }, 1400);
    } catch (error) {
      shareButton.textContent = "Copy failed";
      setTimeout(() => {
        shareButton.textContent = "Copy summary";
      }, 1400);
    }
  });
}

async function init() {
  const response = await fetch(DATA_PATH);
  dataset = await response.json();
  setCardState(testCard, "idle");
  setCardState(resultCard, "idle");
  setCardState(infoCard, "active");
  bindActions();
}

init();
