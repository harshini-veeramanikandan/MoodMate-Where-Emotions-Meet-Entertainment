document.addEventListener("DOMContentLoaded", () => {
  renderNavUser();
  mountFavoriteHandler(document.body);

  const moodSel      = document.getElementById("mood");
  const typeSel      = document.getElementById("type");
  const searchEl     = document.getElementById("search");
  const langSel      = document.getElementById("language");
  const minYearSel   = document.getElementById("minYear");
  const minRatingSel = document.getElementById("minRating");
  const clearBtn     = document.getElementById("clear");
  const results      = document.getElementById("results");
  const listTitle    = document.getElementById("listTitle");
  const favList      = document.getElementById("favoritesList");

  // ── Read ?mood= from URL (set by voice-mood, index mood chips, etc.) ──
  const urlMood = new URLSearchParams(window.location.search).get("mood");
  if (urlMood) {
    const opt = [...(moodSel?.options || [])].find(o => o.value === urlMood);
    if (opt) moodSel.value = urlMood;
  }

  // ── Render favorites from localStorage ──
  function renderFavorites() {
    if (!favList) return;
    const favs = readStorage(STORAGE_KEYS.favorites);
    if (!favs.length) {
      favList.innerHTML = `<p class="meta">No favorites yet. Save items while browsing Movies or Music.</p>`;
      return;
    }
    // Look up full item data from moodData so we get poster/cover/links
    favList.innerHTML = favs.map(fav => {
      const found = findItemById(fav.id);
      if (!found) return "";
      const { type, mood, data } = found;
      return type === "movie" ? movieCard(data, mood) : musicCard(data, mood);
    }).filter(Boolean).join("") || `<p class="meta">No favorites yet.</p>`;
  }

  // ── Filter + render results ──
  function renderResults() {
    const mood      = moodSel?.value || "";
    const type      = typeSel?.value || "movies";
    const query     = (searchEl?.value || "").toLowerCase().trim();
    const lang      = langSel?.value || "";
    const minYear   = parseInt(minYearSel?.value) || 0;
    const minRating = parseFloat(minRatingSel?.value) || 0;

    applyMoodTheme(mood || "happy");

    const moodsToSearch = mood ? [mood] : Object.keys(moodData);
    const seen = new Set();
    let items = [];

    for (const m of moodsToSearch) {
      const pool = type === "movies"
        ? (moodData[m]?.movies || [])
        : (moodData[m]?.music  || []);
      for (const item of pool) {
        if (seen.has(item.title)) continue;
        seen.add(item.title);
        items.push({ ...item, _mood: m });
      }
    }

    if (query)     items = items.filter(i => i.title.toLowerCase().includes(query) || (i.artist || "").toLowerCase().includes(query));
    if (lang)      items = items.filter(i => i.lang === lang);
    if (minYear)   items = items.filter(i => (i.year || 0) >= minYear);
    if (minRating && type === "movies") items = items.filter(i => (i.rating || 0) >= minRating);

    listTitle.textContent = `${items.length} result${items.length !== 1 ? "s" : ""}`;

    results.innerHTML = items.length
      ? (type === "movies"
          ? items.map(m => movieCard(m, m._mood)).join("")
          : items.map(t => musicCard(t, t._mood)).join(""))
      : `<p class="meta">No ${type} found matching your filters.</p>`;
  }

  // ── Event listeners ──
  [moodSel, typeSel, langSel, minYearSel, minRatingSel].forEach(el => {
    el?.addEventListener("change", renderResults);
  });
  searchEl?.addEventListener("input", renderResults);
  clearBtn?.addEventListener("click", () => {
    if (moodSel)      moodSel.value = "";
    if (typeSel)      typeSel.value = "movies";
    if (searchEl)     searchEl.value = "";
    if (langSel)      langSel.value = "";
    if (minYearSel)   minYearSel.value = "";
    if (minRatingSel) minRatingSel.value = "";
    window.history.replaceState({}, "", window.location.pathname);
    renderResults();
  });

  // Refresh favorites panel when save/unsave is clicked
  document.body.addEventListener("click", () => setTimeout(renderFavorites, 80));

  // ── Initial render ──
  renderResults();
  renderFavorites();
});
