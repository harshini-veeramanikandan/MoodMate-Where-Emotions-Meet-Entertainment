document.addEventListener("DOMContentLoaded", () => {
  renderNavUser();

  const moodSelect = document.getElementById("moodSelect");
  const showBtn = document.getElementById("showBtn");
  const randomBtn = document.getElementById("randomBtn");
  const moviesGrid = document.getElementById("moviesGrid");
  const quickMovie = document.getElementById("quickMovie");

  mountFavoriteHandler(document.body);

  function items(mood) {
    return (moodData[mood]?.movies || []);
  }

  function renderMovies(mood) {
    applyMoodTheme(mood);
    const list = items(mood);
    moviesGrid.innerHTML = list.length
      ? list.map(m => movieCard(m, mood)).join("")
      : `<p class="meta">No movies for "${mood}" yet.</p>`;
  }

  function renderQuickMovie(mood) {
    const m = randomPick(items(mood));
    quickMovie.innerHTML = m
      ? movieCard(m, mood)
      : `<div class="body"><div class="title">No movie for "${mood}"</div></div>`;
  }

  moodSelect.addEventListener("change", () => {
    const mood = moodSelect.value;
    renderMovies(mood);
    renderQuickMovie(mood);
  });

  showBtn.addEventListener("click", () => {
    const mood = moodSelect.value;
    renderMovies(mood);
  });

  randomBtn.addEventListener("click", () => {
    const mood = moodSelect.value;
    renderQuickMovie(mood);
  });

  // Read ?mood= URL param
  const _urlMood = new URLSearchParams(window.location.search).get("mood");
  if (_urlMood && [...moodSelect.options].some(o => o.value === _urlMood)) {
    moodSelect.value = _urlMood;
  }
  const initialMood = moodSelect.value || "";
  renderMovies(initialMood);
  renderQuickMovie(initialMood);
});