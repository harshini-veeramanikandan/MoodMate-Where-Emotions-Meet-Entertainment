
document.addEventListener("DOMContentLoaded", () => {
  renderNavUser(); applyMoodTheme("relaxed"); mountFavoriteHandler(document.body);
  const picker = document.getElementById("colorPicker");
  const btn = document.getElementById("translateBtn");
  const resultMood = document.getElementById("resultMood");
  const results = document.getElementById("results");

  function rgbHexToMood(hex) {
    const h = hex.replace("#",""); const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
    if (b > r && b > g) return "sad";     
    if (r > g && r > b) return "scared";     
    if (g > r && g > b) return "relaxed";   

    if (r > 180 && g > 180 && b < 120) return "happy"; 
    if (r > 200 && b > 150 && g < 160) return "romantic";
    return "energetic";
  }

  btn.addEventListener("click", () => {
    const hex = picker.value || "#ffffff";
    const mood = rgbHexToMood(hex);
    resultMood.textContent = `Mood: ${mood}`;
    applyMoodTheme(mood);
    const m = randomPick(moodData[mood]?.movies || []);
    const t = randomPick(moodData[mood]?.music || []);
    results.innerHTML = `
      ${m ? movieCard(m, mood) : `<div class="card"><div class="body"><div class="title">No movies for ${mood}</div></div></div>`}
      ${t ? musicCard(t, mood) : `<div class="card"><div class="body"><div class="title">No music for ${mood}</div></div></div>`}
    `;
  });
});