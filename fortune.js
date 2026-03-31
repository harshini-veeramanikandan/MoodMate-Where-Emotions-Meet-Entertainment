
document.addEventListener("DOMContentLoaded", () => {
  renderNavUser(); applyMoodTheme("happy"); mountFavoriteHandler(document.body);
  const predictBtn = document.getElementById("predictBtn");
  const fortuneMood = document.getElementById("fortuneMood");
  const fortuneResults = document.getElementById("fortuneResults");
  const fortuneQuote = document.getElementById("fortuneQuote");

  const quotes = [
    "Vibes don’t lie — follow them.",
    "Let your mood pick the soundtrack.",
    "Tonight’s feeling is your compass."
  ];

  predictBtn.addEventListener("click", () => {
    const moods = Object.keys(moodData);
    const mood = moods[Math.floor(Math.random() * moods.length)];
    applyMoodTheme(mood);
    fortuneMood.textContent = `Mood: ${mood}`;
    const m = randomPick(moodData[mood]?.movies || []);
    const t = randomPick(moodData[mood]?.music || []);
    fortuneResults.innerHTML = `
      ${m ? movieCard(m, mood) : `<div class="card"><div class="body"><div class="title">No movies for ${mood}</div></div></div>`}
      ${t ? musicCard(t, mood) : `<div class="card"><div class="body"><div class="title">No music for ${mood}</div></div></div>`}
    `;
    fortuneQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  });
});