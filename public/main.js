const RELEASE_AT = new Date("2026-11-19T00:00:00-05:00");
const OFFICIAL = {
  game: "https://www.rockstargames.com/VI",
  leonida: "https://www.rockstargames.com/VI/only-in-leonida",
  media: "https://www.rockstargames.com/VI/media",
  trailer1: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
  trailer2: "https://www.youtube.com/watch?v=VQRLujxTm3c",
  newswire: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
};

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
let toastTimer;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
const sourceLink = (href, label = "source") => `<a href="${href}" target="_blank" rel="noreferrer">${label} ↗</a>`;

function countdown() {
  const remaining = RELEASE_AT.getTime() - Date.now();
  if (remaining <= 0) return { value: "OUT NOW", label: "current official date has arrived" };
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  return { value: `${days}d ${String(hours).padStart(2, "0")}h`, label: "until the current official release date" };
}

function homePage() {
  const clock = countdown();
  return `<div class="page home">
    <section class="hero">
      <div class="hero-copy"><p class="eyebrow">Independent fan intelligence · fact checked</p><h1>Welcome to <span>Vice City.</span></h1><p class="hero-deck">The signal behind <strong>Grand Theft Auto VI</strong>: the confirmed date, the people, the state, and the details worth keeping separate from the noise.</p><div class="hero-actions"><a class="cta" href="#intel">Enter the intel <span>→</span></a><a class="outline-cta" href="${OFFICIAL.trailer2}" target="_blank" rel="noreferrer">Watch trailer 2 ↗</a></div><p class="hero-note"><strong>Official release:</strong> November 19, 2026 · PlayStation 5 · Xbox Series X|S</p></div>
      <div class="hero-art" aria-label="Abstract neon Vice City skyline illustration"><div class="sun"></div><div class="horizon"></div><div class="road"></div><div class="art-card"><small>LEONIDA / 001</small><strong>Only in Leonida</strong><span>Sun, crime, and a state built for the next chapter.</span></div><div class="art-label">Vice City / USA</div></div>
    </section>
    <div class="dashboard-strip"><div class="dash-item"><span>RELEASE COUNTDOWN</span><strong class="pink">${clock.value}</strong><small>${clock.label}</small></div><div class="dash-item"><span>PROTAGONISTS</span><strong>Lucia + Jason</strong><small>officially named</small></div><div class="dash-item"><span>SETTING</span><strong class="cyan">Leonida</strong><small>Vice City at its center</small></div><div class="dash-item"><span>PLATFORMS</span><strong>PS5 · X|S</strong><small>currently listed by Rockstar</small></div></div>
    <section><div class="section-heading"><div><p class="section-kicker">The clean signal</p><h2>Three things we <em>know.</em></h2><p>No leaks, no map pixels, no wish lists. Just the public record from Rockstar and Take-Two.</p></div><div class="source-label">Last checked against<br />${sourceLink(OFFICIAL.game, "Rockstar's official page")}</div></div><div class="fact-grid"><article class="fact-card"><span class="fact-number">01 / THE DATE</span><h3>November 19, 2026</h3><p>The current official release date. An earlier May 26, 2026 date was superseded by Rockstar's later announcement.</p>${sourceLink(OFFICIAL.newswire, "Read the update")}</article><article class="fact-card"><span class="fact-number">02 / THE WORLD</span><h3>Vice City, USA</h3><p>The story extends across the fictional state of Leonida, with Vice City as the bright, dangerous center of the frame.</p>${sourceLink(OFFICIAL.leonida, "See Leonida")}</article><article class="fact-card"><span class="fact-number">03 / THE DUO</span><h3>Lucia & Jason</h3><p>Two partners, one criminal conspiracy, and a plan that gets harder to survive once the easy score goes wrong.</p>${sourceLink(OFFICIAL.game, "Meet the official brief")}</article></div></section>
    <div class="disclaimer" style="margin-top:1.1rem"><span>✦</span><div><strong>Fan-made, source-aware, not official.</strong> GTAVI is an independent information design project. It uses original CSS artwork and links out to Rockstar's official materials instead of reproducing game assets.</div></div>
  </div>`;
}

function intelPage() {
  return `<div class="page intel"><div class="section-heading"><div><p class="section-kicker">The signal report / 01</p><h1>Confirmed <em>only.</em></h1><p>A quick-reference archive for what the official pages actually say — and what they don't.</p></div><div class="source-label">Primary sources<br />${sourceLink(OFFICIAL.game, "Rockstar VI")}</div></div><div class="fact-grid"><article class="fact-card"><span class="fact-number">RELEASE</span><h3>Nov 19, 2026</h3><p>Rockstar's current official date. The earlier May 26, 2026 date is historical context, not the current listing.</p>${sourceLink(OFFICIAL.newswire, "Rockstar Newswire")}</article><article class="fact-card"><span class="fact-number">PLATFORMS</span><h3>PS5 + Xbox Series</h3><p>PlayStation 5 and Xbox Series X|S are the platforms currently listed by Rockstar. No PC date is officially listed there.</p>${sourceLink(OFFICIAL.game, "Official listing")}</article><article class="fact-card"><span class="fact-number">STORY</span><h3>A partnership under pressure</h3><p>Lucia Caminos and Jason Duval are drawn into a conspiracy across Leonida after a score goes wrong.</p>${sourceLink(OFFICIAL.leonida, "Official story hub")}</article></div><div class="section-heading" style="margin-top:5rem"><div><p class="section-kicker">Rumor firewall / 02</p><h2>What stays <em>unknown.</em></h2><p>Not every blank is an invitation to invent an answer. These topics remain unconfirmed in the official material reviewed.</p></div></div><div class="signal-board"><div class="signal warn"><div><b>PC release</b><span>No PC platform or date is currently listed on Rockstar's official VI page.</span></div><i></i></div><div class="signal warn"><div><b>Online mode details</b><span>Rockstar has not published a complete official multiplayer feature list.</span></div><i></i></div><div class="signal warn"><div><b>Map size and mechanics</b><span>Specific map dimensions, systems, and progression claims remain outside the confirmed record.</span></div><i></i></div></div><a class="back-link" href="#media">See the primary sources →</a></div>`;
}

function charactersPage() {
  return `<div class="page characters"><div class="section-heading"><div><p class="section-kicker">People of Leonida / 02</p><h1>Two lives.<br /><em>One score.</em></h1><p>Rockstar's official story centers on partners Lucia Caminos and Jason Duval.</p></div><div class="source-label">Character details are limited<br />to public official material.</div></div><div class="char-grid"><article class="char-card lucia"><div class="char-card-content"><span class="role">The survivor</span><h2>Lucia<br />Caminos</h2><p>Officially identified as one half of GTA VI's central duo. The public brief places her in a partnership that has to survive a conspiracy stretching across Leonida.</p></div><span class="char-source">${sourceLink(OFFICIAL.leonida, "Official brief")}</span></article><article class="char-card jason"><div class="char-card-content"><span class="role">The partner</span><h2>Jason<br />Duval</h2><p>Lucia's partner in the official setup. Together they are pulled beyond an easy score and into a wider criminal story across the state.</p></div><span class="char-source">${sourceLink(OFFICIAL.leonida, "Official brief")}</span></article></div><div class="disclaimer" style="margin-top:1rem"><span>!</span><div><strong>Character firewall:</strong> Supporting cast, backstories, abilities, and relationship details beyond the official synopsis are not presented here as fact.</div></div></div>`;
}

function leonidaPage() {
  return `<div class="page leonida"><div class="section-heading"><div><p class="section-kicker">A state of mind / 03</p><h1>Only in <em>Leonida.</em></h1><p>Vice City is back — but the official frame is larger than one skyline. GTA VI takes place across the fictional state of Leonida.</p></div><div class="source-label">${sourceLink(OFFICIAL.leonida, "Read Rockstar's setting page")}</div></div><div class="map-card"><span class="map-title">Fictional state / official setting</span><h2>Vice City<br /><em>and beyond.</em></h2><span class="map-pin pin-one">Vice City</span><span class="map-pin pin-two">Leonida coast</span><span class="map-pin pin-three">State roads</span><p class="map-copy">An original visual interpretation — not an official map, scale, or complete location list.</p></div><div class="dashboard-strip" style="margin-bottom:0"><div class="dash-item"><span>CONFIRMED CORE</span><strong class="pink">Vice City</strong><small>“USA” in the official framing</small></div><div class="dash-item"><span>WIDER SETTING</span><strong class="cyan">Leonida</strong><small>a fictional U.S. state</small></div><div class="dash-item"><span>VISUAL LANGUAGE</span><strong>Sun / neon / heat</strong><small>original fan interpretation</small></div><div class="dash-item"><span>MAP STATUS</span><strong>Not complete</strong><small>official scale not published</small></div></div></div>`;
}

function mediaPage() {
  return `<div class="page media"><div class="section-heading"><div><p class="section-kicker">The archive / 04</p><h1>Watch the <em>signal.</em></h1><p>Official trailers and source pages only. Open them on Rockstar's own channels.</p></div><div class="source-label">No unofficial mirrors<br />${sourceLink(OFFICIAL.media, "Rockstar media hub")}</div></div><div class="media-grid"><article class="media-card"><div><div class="media-art"><strong>TRAILER 01</strong></div><h2>Grand Theft Auto VI · Trailer 1</h2><p>The first official look at the next Vice City chapter, published by Rockstar Games.</p></div><a href="${OFFICIAL.trailer1}" target="_blank" rel="noreferrer">Open official video ↗</a></article><article class="media-card trailer-two"><div><div class="media-art"><strong>TRAILER 02</strong></div><h2>Grand Theft Auto VI · Trailer 2</h2><p>Rockstar's second official trailer. Footage was captured on PlayStation 5.</p></div><a href="${OFFICIAL.trailer2}" target="_blank" rel="noreferrer">Open official video ↗</a></article></div><div class="section-heading" style="margin-top:5rem"><div><p class="section-kicker">Source desk / 05</p><h2>Keep the <em>receipts.</em></h2><p>These are the primary pages used to keep the hub's confirmed and unconfirmed labels separate.</p></div></div><div class="source-list"><div class="source-item"><div><b>Rockstar Games · Grand Theft Auto VI</b><br />Current date, platforms, title, and official overview</div>${sourceLink(OFFICIAL.game, "Open source")}</div><div class="source-item"><div><b>Rockstar Games · Only in Leonida</b><br />Official setting and protagonist story framing</div>${sourceLink(OFFICIAL.leonida, "Open source")}</div><div class="source-item"><div><b>Rockstar Games · Media</b><br />Official video and artwork hub</div>${sourceLink(OFFICIAL.media, "Open source")}</div><div class="source-item"><div><b>Rockstar Newswire · Release update</b><br />Current November 19, 2026 date announcement</div>${sourceLink(OFFICIAL.newswire, "Open source")}</div></div></div>`;
}

const pages = { home: homePage, intel: intelPage, characters: charactersPage, leonida: leonidaPage, media: mediaPage };
function showToast(message) { clearTimeout(toastTimer); toast.textContent = message; toast.classList.add("show"); toastTimer = setTimeout(() => toast.classList.remove("show"), 2600); }
function render() {
  const route = location.hash.slice(1).split("?")[0] || "home";
  const page = pages[route] ? route : "home";
  app.innerHTML = pages[page]();
  app.className = `route-${page}`;
  document.querySelectorAll("[data-route]").forEach((link) => link.classList.toggle("active", link.dataset.route === page));
  document.title = page === "home" ? "GTAVI · Welcome to Vice City" : `GTAVI · ${page[0].toUpperCase()}${page.slice(1)}`;
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelectorAll(".mobile-nav a").forEach((link) => link.addEventListener("click", () => closeMenu()));
}
function closeMenu() { document.querySelector("#mobile-nav").classList.remove("open"); document.querySelector("#menu-button").setAttribute("aria-expanded", "false"); }

document.querySelector("#menu-button").addEventListener("click", () => { const nav = document.querySelector("#mobile-nav"); const open = nav.classList.toggle("open"); document.querySelector("#menu-button").setAttribute("aria-expanded", String(open)); });
window.addEventListener("hashchange", render);
render();
setInterval(() => { if ((location.hash.slice(1) || "home") === "home") { const clock = countdown(); const value = document.querySelector(".dash-item strong.pink"); const label = value?.nextElementSibling; if (value) value.textContent = clock.value; if (label) label.textContent = clock.label; } }, 60000);
