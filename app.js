const STRINGS = {
  de: { title: "Things To Do", subtitle: "Sachen, die getan werden müssen", back: "← Übersicht", source: "Quelle: Instagram Reel", empty: "Noch keine Listen." },
  en: { title: "Things To Do", subtitle: "Things that need to get done", back: "← Overview", source: "Source: Instagram Reel", empty: "No lists yet." }
};

function getLang() {
  return localStorage.getItem("lang") || "de";
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  render();
}

// Stabiler Schlüssel pro Item (an den englischen Text gekoppelt, nicht an die Position),
// damit Haken auch dann stimmen bleiben, wenn Punkte in data.js umsortiert werden.
function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h.toString(36);
}

function itemKey(listId, item) {
  return `checked:${listId}:${hashStr(item.en)}`;
}

function isChecked(listId, item) {
  return localStorage.getItem(itemKey(listId, item)) === "1";
}

function toggleChecked(listId, item) {
  const key = itemKey(listId, item);
  const now = localStorage.getItem(key) === "1";
  if (now) localStorage.removeItem(key);
  else localStorage.setItem(key, "1");
}

function progress(list) {
  const done = list.items.filter(item => isChecked(list.id, item)).length;
  return { done, total: list.items.length };
}

function renderHeader(lang) {
  const s = STRINGS[lang];
  document.getElementById("app-title").textContent = s.title;
  document.title = s.title;
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function renderHome(lang) {
  const s = STRINGS[lang];
  const main = document.getElementById("main");
  if (LISTS.length === 0) {
    main.innerHTML = `<p class="empty">${s.empty}</p>`;
    return;
  }
  main.innerHTML = `<p class="subtitle">${s.subtitle}</p>` + LISTS.map(list => {
    const { done, total } = progress(list);
    const pct = total ? Math.round((done / total) * 100) : 0;
    return `
      <a class="card" href="#/list/${list.id}">
        <h2>${list.title[lang]}</h2>
        <div class="meta"><span>${done}/${total}</span><span>${list.date}</span></div>
        <div class="progress-bar"><div style="width:${pct}%"></div></div>
      </a>
    `;
  }).join("");
}

function renderList(lang, listId) {
  const s = STRINGS[lang];
  const list = LISTS.find(l => l.id === listId);
  const main = document.getElementById("main");
  if (!list) {
    main.innerHTML = `<a class="back-link" href="#/">${s.back}</a><p class="empty">${s.empty}</p>`;
    return;
  }
  main.innerHTML = `
    <a class="back-link" href="#/">${s.back}</a>
    <h2 class="list-title">${list.title[lang]}</h2>
    <p class="list-source">${s.source}: <a href="${list.source}" target="_blank" rel="noopener">${list.source}</a></p>
    ${list.items.map((item, i) => `
      <div class="item ${isChecked(list.id, item) ? "done" : ""}" data-index="${i}">
        <input type="checkbox" ${isChecked(list.id, item) ? "checked" : ""} />
        <span>${item[lang]}</span>
      </div>
    `).join("")}
  `;
  main.querySelectorAll(".item").forEach(el => {
    el.addEventListener("click", (e) => {
      const item = list.items[Number(el.dataset.index)];
      toggleChecked(list.id, item);
      el.classList.toggle("done");
      el.querySelector("input").checked = isChecked(list.id, item);
    });
  });
}

function render() {
  const lang = getLang();
  renderHeader(lang);
  const hash = location.hash || "#/";
  const match = hash.match(/^#\/list\/(.+)$/);
  if (match) renderList(lang, match[1]);
  else renderHome(lang);
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  document.getElementById("app-title").addEventListener("click", () => { location.hash = "#/"; });
  render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
});
