
document.addEventListener("DOMContentLoaded", () => {
  renderNavUser();
  applyMoodTheme("romantic");
  mountFavoriteHandler(document.body);

  const map = {
    "Main Character": "happy",
    "Villain Arc": "scared",
    "Soft Girl / Soft Boy": "romantic",
    "Chaos Gremlin": "energetic",
    "Overthinking Pro Max": "sad"
  };
  const alterGrid = document.getElementById("alterGrid");
  const results = document.getElementById("results");

  alterGrid.innerHTML = Object.keys(map).map(k => `
    <button class="btn" data-key="${k}">${k}</button>
  `).join("");

  alterGrid.querySelectorAll("button[data-key]").forEach(btn => {
    btn.addEventListener("click", () => {
      const mood = map[btn.dataset.key];
      applyMoodTheme(mood);
      const mm = moodData[mood]?.movies || [];
      const tt = moodData[mood]?.music || [];
      const m = randomPick(mm), t = randomPick(tt);
      results.innerHTML = `
        ${m ? movieCard(m, mood) : `<div class="card"><div class="body"><div class="title">No movies for ${mood}</div></div></div>`}
        ${t ? musicCard(t, mood) : `<div class="card"><div class="body"><div class="title">No music for ${mood}</div></div></div>`}
      `;
    });
  });
});