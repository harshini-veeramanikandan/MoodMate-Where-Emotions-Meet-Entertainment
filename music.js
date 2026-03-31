document.addEventListener("DOMContentLoaded", () => {
  renderNavUser();

  const moodSelect = document.getElementById("moodSelect");
  const showBtn = document.getElementById("showBtn");
  const randomBtn = document.getElementById("randomBtn");
  const musicGrid = document.getElementById("musicGrid");
  const quickMusic = document.getElementById("quickMusic");

  mountFavoriteHandler(document.body);

  function items(mood) {
    return (moodData[mood]?.music || []);
  }

  function renderMusic(mood) {
    applyMoodTheme(mood);
    const list = items(mood);
    musicGrid.innerHTML = list.length
      ? list.map(t => musicCard(t, mood)).join("")
      : `<p class="meta">No music for "${mood}" yet.</p>`;
  }

  function renderQuickMusic(mood) {
    const t = randomPick(items(mood));
    quickMusic.innerHTML = t
      ? musicCard(t, mood)
      : `<div class="body"><div class="title">No song for "${mood}"</div></div>`;
  }
  moodSelect.addEventListener("change", () => {
    const mood = moodSelect.value;
    renderMusic(mood);
    renderQuickMusic(mood);
  });

  showBtn.addEventListener("click", () => {
    const mood = moodSelect.value;
    renderMusic(mood);
  });

  randomBtn.addEventListener("click", () => {
    const mood = moodSelect.value;
    renderQuickMusic(mood);
  });

  // Initial render
  // Read ?mood= URL param
  const _urlMood = new URLSearchParams(window.location.search).get("mood");
  if (_urlMood && [...moodSelect.options].some(o => o.value === _urlMood)) {
    moodSelect.value = _urlMood;
  }
  const initialMood = moodSelect.value || "";
  renderMusic(initialMood);
  renderQuickMusic(initialMood);
});