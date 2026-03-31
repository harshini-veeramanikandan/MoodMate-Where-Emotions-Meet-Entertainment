
document.addEventListener("DOMContentLoaded", () => {
  renderNavUser(); applyMoodTheme("happy"); mountFavoriteHandler(document.body);
  const sentenceEl = document.getElementById("sentence");
  const decodeBtn = document.getElementById("decodeBtn");
  const decodedMood = document.getElementById("decodedMood");
  const results = document.getElementById("results");

  const map = {
    happy: ["happy","joy","excited","grateful"],
    sad: ["sad","low","down","tired","lonely","cry"],
    romantic: ["love","romance","heart","crush"],
    relaxed: ["calm","peace","relax","chill"],
    scared: ["scared","anxious","afraid","fear"],
    energetic: ["hype","energy","pumped","wild"]
  };

  function detectMood(text) {
    const t = text.toLowerCase();
    let best = "happy", score = 0;
    for (const mood of Object.keys(map)) {
      const words = map[mood];
      const s = words.reduce((acc, w) => acc + (t.includes(w) ? 1 : 0), 0);
      if (s > score) { score = s; best = mood; }
    }
    return best;
  }

  decodeBtn.addEventListener("click", () => {
    const text = (sentenceEl.value || "").trim();
    if (!text) { decodedMood.textContent = "Enter a sentence."; return; }
    const mood = detectMood(text);
    applyMoodTheme(mood);
    decodedMood.textContent = `Mood: ${mood}`;
    const m = randomPick(moodData[mood]?.movies || []);
    const t = randomPick(moodData[mood]?.music || []);
    results.innerHTML = `
      ${m ? movieCard(m, mood) : `<div class="card"><div class="body"><div class="title">No movies for ${mood}</div></div></div>`}
      ${t ? musicCard(t, mood) : `<div class="card"><div class="body"><div class="title">No music for ${mood}</div></div></div>`}
    `;
  });
});