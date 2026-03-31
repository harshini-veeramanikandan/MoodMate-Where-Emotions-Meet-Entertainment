// Storage keys
const STORAGE_KEYS = {
  favorites: "moodmate:favorites",
  userMovies: "moodmate:user:movies",
  userMusic: "moodmate:user:music",
  users: "moodmate:users",
  session: "moodmate:session"
};

function readStorage(key, fallback = []) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } }
function writeStorage(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function getSession() { return readStorage(STORAGE_KEYS.session, null); }
function setSession(user) { writeStorage(STORAGE_KEYS.session, user); }
function logout() { localStorage.removeItem(STORAGE_KEYS.session); }
function getUsers() { return readStorage(STORAGE_KEYS.users, []); }
function addUser(username) {
  const users = getUsers();
  const exists = users.find(u => u.username.toLowerCase() === username.toLowerCase());
  if (exists) return { ok: false, error: "User already exists" };
  const user = { username, avatar: username.slice(0,1).toUpperCase() };
  users.push(user); writeStorage(STORAGE_KEYS.users, users); return { ok: true, user };
}

function hashItem(item) { return btoa(encodeURIComponent(`${item.type}|${item.title}|${item.year || ""}|${item.artist || ""}`)); }
function isFavorite(item) { const favorites = readStorage(STORAGE_KEYS.favorites); return favorites.some(f => f.id === hashItem(item)); }
function toggleFavorite(item) {
  const favorites = readStorage(STORAGE_KEYS.favorites);
  const id = hashItem(item); const idx = favorites.findIndex(f => f.id === id);
  if (idx >= 0) { favorites.splice(idx, 1); writeStorage(STORAGE_KEYS.favorites, favorites); return false; }
  favorites.push({ id, ...item }); writeStorage(STORAGE_KEYS.favorites, favorites); return true;
}
function mountFavoriteHandler(root) {
  root.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-role='fav']"); if (!btn) return;
    e.preventDefault();
    const type = btn.getAttribute("data-type");
    const title = btn.getAttribute("data-title");
    const year = parseInt(btn.getAttribute("data-year") || "0", 10);
    const artist = btn.getAttribute("data-artist") || "";
    const item = { type, title, year, artist };
    const saved = toggleFavorite(item);
    btn.classList.toggle("success", saved); btn.textContent = saved ? "♥ Saved" : "♡ Save";
  });
}

function buildDetailUrl(item) { const id = hashItem(item); return `details.html?type=${encodeURIComponent(item.type)}&id=${encodeURIComponent(id)}`; }

/* ── MOVIE CARD ── 16:9 poster, centered body ── */
function movieCard(movie, mood) {
  const item = { type: "movie", title: movie.title, year: movie.year };
  const fav = isFavorite(item);
  const detailUrl = buildDetailUrl(item);
  const posterPlaceholder = `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0.35"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5"/></svg><span style="font-size:11px;letter-spacing:0.05em;text-transform:uppercase">${movie.title.slice(0,12)}</span></div>`;
  return `
    <a class="card" href="${detailUrl}">
      <div class="thumb">
        ${movie.poster ? `<img src="${movie.poster}" alt="${movie.title}" loading="lazy">` : posterPlaceholder}
        ${movie.rating ? `<div class="rating-badge">★ ${movie.rating}</div>` : ''}
      </div>
      <div class="body">
        <div class="title">${movie.title}</div>
        <div class="meta">${movie.year || "—"}${movie.lang ? ` · ${movie.lang}` : ""}${movie.rating ? ` · ★${movie.rating}` : ""}</div>
        <div class="actions">
          ${movie.imdb ? `<a class="btn" href="${movie.imdb}" target="_blank" rel="noopener" onclick="event.stopPropagation()">IMDb ↗</a>` : `<button class="btn" disabled onclick="event.stopPropagation()">IMDb</button>`}
          <button class="btn ${fav ? "success" : ""}" data-role="fav" data-type="movie" data-title="${movie.title}" data-year="${movie.year || ""}" onclick="event.preventDefault();">${fav ? "♥ Saved" : "♡ Save"}</button>
        </div>
      </div>
    </a>
  `;
}

/* ── MUSIC CARD ── 16:9 cover, centered body ── */
function musicCard(track, mood) {
  const item = { type: "music", title: track.title, artist: track.artist, year: track.year };
  const fav = isFavorite(item);
  const detailUrl = buildDetailUrl(item);
  const notePlaceholder = `<div style="display:flex;flex-direction:column;align-items:center;gap:6px;opacity:0.3"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg><span style="font-size:10px;letter-spacing:0.05em;text-transform:uppercase">${(track.artist||"").slice(0,10)}</span></div>`;
  return `
    <a class="card" href="${detailUrl}">
      <div class="thumb">
        ${track.cover ? `<img src="${track.cover}" alt="${track.title}" loading="lazy">` : notePlaceholder}
      </div>
      <div class="body">
        <div class="title">${track.title}</div>
        <div class="meta">${track.artist || ""}${track.year ? ` · ${track.year}` : ""}</div>
        <div class="actions">
          ${track.link ? `<a class="btn primary" href="${track.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">▶ Listen</a>` : `<button class="btn" disabled onclick="event.stopPropagation()">Listen</button>`}
          <button class="btn ${fav ? "success" : ""}" data-role="fav" data-type="music" data-title="${track.title}" data-artist="${track.artist || ""}" data-year="${track.year || ""}" onclick="event.preventDefault();">${fav ? "♥ Saved" : "♡ Save"}</button>
        </div>
      </div>
    </a>
  `;
}

function randomPick(arr) { if (!arr || arr.length === 0) return null; return arr[Math.floor(Math.random() * arr.length)]; }

function findItemById(id) {
  for (const mood of Object.keys(moodData)) {
    for (const m of moodData[mood].movies || []) { if (hashItem({ type:"movie", title:m.title, year:m.year }) === id) return { type:"movie", mood, data:m }; }
    for (const t of moodData[mood].music || []) { if (hashItem({ type:"music", title:t.title, artist:t.artist, year:t.year }) === id) return { type:"music", mood, data:t }; }
  }
  const um = readStorage(STORAGE_KEYS.userMovies); for (const m of um) { if (hashItem({ type:"movie", title:m.title, year:m.year }) === id) return { type:"movie", mood:m.mood, data:m }; }
  const ut = readStorage(STORAGE_KEYS.userMusic); for (const t of ut) { if (hashItem({ type:"music", title:t.title, artist:t.artist, year:t.year }) === id) return { type:"music", mood:t.mood, data:t }; }
  const favs = readStorage(STORAGE_KEYS.favorites); const f = favs.find(x => x.id === id); if (f) return { type:f.type, mood:"unknown", data:f };
  return null;
}

function renderNavUser() {
  const session = getSession();
  const nav = document.querySelector(".nav .nav-links");
  if (!nav) return;
  const existing = nav.querySelector(".user-slot"); if (existing) existing.remove();
  const slot = document.createElement("span"); slot.className = "user-slot";
  slot.style.cssText = "display:inline-flex;gap:8px;align-items:center;margin-left:4px;";
  if (session) {
    slot.innerHTML = `<a href="profile.html" title="${session.username}" style="text-decoration:none"><span class="avatar">${session.avatar}</span></a>`;
  } else {
    slot.innerHTML = `<a href="login.html" class="btn" style="padding:6px 14px;font-size:13px;">Sign in</a>`;
  }
  nav.appendChild(slot);
}

function setThemeClass(mood) {
  const moods = ["happy","sad","romantic","relaxed","scared","energetic","adventurous"];
  // Preserve any non-mood classes (none currently, but safe)
  document.body.classList.remove(...moods);
  if (mood && moods.includes(mood)) document.body.classList.add(mood);
}

// Raw mood color values (no CSS var references — needed for inline style gradients)
const MOOD_COLORS = {
  happy:       "#ffd93d",
  sad:         "#74b3f7",
  romantic:    "#ff6b9d",
  relaxed:     "#6bcb77",
  scared:      "#f8a05a",
  energetic:   "#ff4757",
  adventurous: "#00d4c8"
};

function applyMoodTheme(mood) {
  setThemeClass(mood);

  const color = MOOD_COLORS[mood];

  // Update primary buttons to mood color
  document.querySelectorAll(".btn.primary").forEach(btn => {
    btn.style.background = color
      ? `linear-gradient(135deg,${color},var(--accent-2))`
      : `linear-gradient(135deg,var(--accent),#9b77ff)`;
    btn.style.borderColor = "transparent";
  });

  // Mood-tinted active nav link underline
  document.querySelectorAll(".nav-links a.active").forEach(a => {
    a.style.borderColor = color ? `${color}55` : "";
    a.style.color = color || "";
  });

  // Mic float button glow matches mood
  const micFloat = document.querySelector(".mic-float");
  if (micFloat && color) {
    micFloat.style.background = `linear-gradient(135deg,${color},${color}aa)`;
    micFloat.style.boxShadow = `0 4px 28px ${color}66, 0 0 0 1px ${color}44`;
  }
}
