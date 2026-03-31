document.addEventListener("DOMContentLoaded", () => {
  renderNavUser();

  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  const id = params.get("id");

  mountFavoriteHandler(document.body);

  function renderNotFound() {
    applyMoodTheme("happy");
    document.getElementById("detailTitle").textContent = "Item not found";
    document.getElementById("detailSubtitle").textContent = "The link might be broken or the item was removed.";
    document.getElementById("detailBody").innerHTML = `<div class="meta">Go back to <a href="index.html">Home</a> or open <a href="playlists.html">Playlists</a>.</div>`;
  }

  if (!type || !id) { renderNotFound(); return; }

  const found = findItemById(id);
  if (!found) { renderNotFound(); return; }

  const { mood, data } = found;
  applyMoodTheme(mood);

  const detailTitle = document.getElementById("detailTitle");
  const detailSubtitle = document.getElementById("detailSubtitle");
  const detailActions = document.getElementById("detailActions");
  const detailThumb = document.getElementById("detailThumb");
  const detailBody = document.getElementById("detailBody");
  const extras = document.getElementById("extras");

  if (found.type === "movie") {
    detailTitle.textContent = data.title;
    detailSubtitle.textContent = `${data.year || "—"} · ${data.lang || ""} · ⭐ ${data.rating ?? "—"} · Mood: ${mood}`;
    detailThumb.innerHTML = data.poster ? `<img src="${data.poster}" alt="${data.title} poster">` : `<span>Poster</span>`;
    const favItem = { type: "movie", title: data.title, year: data.year };
    const fav = isFavorite(favItem);
    detailActions.innerHTML = `
      ${data.imdb ? `<a class="btn" href="${data.imdb}" target="_blank" rel="noopener">IMDb</a>` : ""}
      <button class="btn ${fav ? "success" : ""}" data-role="fav" data-type="movie" data-title="${data.title}" data-year="${data.year || ""}">${fav ? "Saved" : "Save"}</button>
    `;
    detailBody.innerHTML = `
      <div class="title">Synopsis</div><div class="meta">${data.description || "No description provided yet."}</div>
      <div class="title">OTT availability</div><div class="meta">${(data.ott && data.ott.length) ? data.ott.join(", ") : "Not specified"}</div>
      <div class="title">Genres & runtime</div><div class="meta">${(data.genres && data.genres.length) ? data.genres.join(", ") : "—"} · ${data.runtime ? data.runtime + " min" : "—"}</div>
    `;
    extras.innerHTML = `
      <div class="card"><div class="body"><div class="title">Similar vibe picks</div><div class="meta">Check Movies page for more “${mood}” films.</div><a class="btn" href="movies.html">Browse movies</a></div></div>
      <div class="card"><div class="body"><div class="title">Build a watchlist</div><div class="meta">Save favorites and manage them on Playlists.</div><a class="btn" href="playlists.html">Open playlists</a></div></div>
    `;
  } else {
    detailTitle.textContent = `${data.title} — ${data.artist || ""}`;
    detailSubtitle.textContent = `${data.year || "—"} · Mood: ${mood}`;
    detailThumb.innerHTML = data.cover ? `<img src="${data.cover}" alt="${data.title} cover">` : `<span>Album</span>`;
    const favItem = { type: "music", title: data.title, artist: data.artist, year: data.year };
    const fav = isFavorite(favItem);
    detailActions.innerHTML = `
      ${data.link ? `<a class="btn" href="${data.link}" target="_blank" rel="noopener">Listen</a>` : ""}
      <button class="btn ${fav ? "success" : ""}" data-role="fav" data-type="music" data-title="${data.title}" data-artist="${data.artist || ""}" data-year="${data.year || ""}">${fav ? "Saved" : "Save"}</button>
    `;
    detailBody.innerHTML = `
      <div class="title">Description</div><div class="meta">${data.description || "No description provided yet."}</div>
      <div class="title">Album</div><div class="meta">${data.album || "—"}</div>
      <div class="title">Lyric excerpt</div><div class="meta">${data.lyricsExcerpt || "Lyrics not available."}</div>
    `;
    extras.innerHTML = `
      <div class="card"><div class="body"><div class="title">More tracks</div><div class="meta">Browse “${mood}” music on the Music page.</div><a class="btn" href="music.html">Browse music</a></div></div>
      <div class="card"><div class="body"><div class="title">Save your vibe</div><div class="meta">Favorited songs show up in Playlists.</div><a class="btn" href="playlists.html">Open playlists</a></div></div>
    `;
  }
});