document.addEventListener("DOMContentLoaded", () => {
  renderNavUser(); 
  applyMoodTheme("happy"); 
  mountFavoriteHandler(document.body);

  const morning = document.getElementById("morning");
  const afternoon = document.getElementById("afternoon");
  const night = document.getElementById("night");
  const buildBtn = document.getElementById("buildBtn");
  const timelineResults = document.getElementById("timelineResults");

  buildBtn.addEventListener("click", () => {
    const plan = [
      { time: "Morning", mood: morning.value },
      { time: "Afternoon", mood: afternoon.value },
      { time: "Night", mood: night.value }
    ];

    timelineResults.innerHTML = plan.map(slot => {
      const m = randomPick(moodData[slot.mood]?.movies || []);
      const t = randomPick(moodData[slot.mood]?.music || []);
      return `
        <div class="card"><div class="body">
          <div class="title">${slot.time} — ${slot.mood}</div>
          ${m ? movieCard(m, slot.mood) : `<div class="meta">No movies for ${slot.mood}</div>`}
          ${t ? musicCard(t, slot.mood) : `<div class="meta">No music for ${slot.mood}</div>`}
        </div></div>
      `;
    }).join("");
  });
});
