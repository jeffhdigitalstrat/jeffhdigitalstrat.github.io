(function () {
  "use strict";
  var IMG = "assets/img/";
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var PLAY = '<span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>';

  /* ---------- Cards ---------- */
  function audioCard(a, i) {
    return '<button class="card card--audio reveal" data-kind="audio" data-i="' + i + '" data-cat="' + esc(a.cat) + '">' +
      '<span class="card__img"><img src="' + IMG + a.img + '" alt="" loading="lazy" decoding="async">' + PLAY + '</span>' +
      '<span class="card__meta"><span class="card__label">' + esc(a.label) + '</span>' +
      '<span class="card__title">' + esc(a.title) + '</span>' +
      '<span class="card__src">' + (a.type === "spotify" ? "Spotify" : "SoundCloud") + '</span></span></button>';
  }
  function videoCard(v, i) {
    return '<button class="card card--video reveal" data-kind="video" data-i="' + i + '" data-cat="' + esc(v.cat) + '">' +
      '<span class="card__img"><img src="' + IMG + v.img + '" alt="" loading="lazy" decoding="async">' + PLAY + '</span>' +
      '<span class="card__meta"><span class="card__label">' + esc(v.cat) + '</span>' +
      '<span class="card__title">' + esc(v.title) + '</span>' +
      '<span class="card__desc">' + esc(v.desc) + '</span></span></button>';
  }

  var audioGrid = document.getElementById("audioGrid");
  var videoGrid = document.getElementById("videoGrid");
  audioGrid.innerHTML = window.AUDIO.map(audioCard).join("");
  videoGrid.innerHTML = window.VIDEO.map(videoCard).join("");
  var stat = document.getElementById("statWorks");
  if (stat) stat.textContent = window.AUDIO.length + window.VIDEO.length;

  /* ---------- Filters ---------- */
  function buildFilters(el, cats, items) {
    var html = '<button class="chip is-on" data-cat="*">All <em>' + items.length + '</em></button>';
    cats.forEach(function (c) {
      var n = items.filter(function (x) { return x.cat === c; }).length;
      html += '<button class="chip" data-cat="' + esc(c) + '">' + esc(c) + ' <em>' + n + '</em></button>';
    });
    el.innerHTML = html;
    var grid = document.getElementById(el.getAttribute("data-target"));
    el.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      el.querySelectorAll(".chip").forEach(function (x) { x.classList.toggle("is-on", x === b); });
      var cat = b.getAttribute("data-cat");
      grid.querySelectorAll(".card").forEach(function (card) {
        card.hidden = !(cat === "*" || card.getAttribute("data-cat") === cat);
      });
    });
  }
  var f = document.querySelectorAll(".filters");
  buildFilters(f[0], window.AUDIO_CATEGORIES, window.AUDIO);
  buildFilters(f[1], window.VIDEO_CATEGORIES, window.VIDEO);

  /* ---------- Player modal ---------- */
  var modal = document.getElementById("modal");
  var player = document.getElementById("modalPlayer");
  var lastFocus = null;

  function scSrc(a) {
    return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A" + a.id + "%3Fsecret_token%3D" + a.token +
      "&color=%23ff6a3d&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false";
  }

  function open(kind, i) {
    var html = "", links = "", desc = "";
    if (kind === "audio") {
      var a = window.AUDIO[i];
      document.getElementById("modalKind").textContent = a.label + " \u00b7 " + a.cat;
      document.getElementById("modalTitle").textContent = a.title;
      var art = '<img class="modal__art" src="' + IMG + a.img + '" alt="">';
      if (a.type === "spotify") {
        html = art + '<iframe title="' + esc(a.title) + '" src="https://open.spotify.com/embed/episode/' + a.id +
          '?utm_source=generator&theme=0" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
      } else {
        html = art + '<iframe title="' + esc(a.title) + '" src="' + scSrc(a) + '" height="166" allow="autoplay"></iframe>';
      }
      modal.classList.remove("is-video");
    } else {
      var v = window.VIDEO[i];
      document.getElementById("modalKind").textContent = v.cat;
      document.getElementById("modalTitle").textContent = v.title;
      html = '<div class="ratio"><iframe title="' + esc(v.title) + '" src="https://www.youtube-nocookie.com/embed/' + v.youtube +
        '?autoplay=1&rel=0&modestbranding=1" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>';
      desc = v.desc;
      links = '<a class="link-arrow" href="https://www.youtube.com/watch?v=' + v.youtube + '" target="_blank" rel="noopener">Watch on YouTube</a>';
      if (v.doc) links += '<a class="link-arrow" href="' + v.doc.href + '" target="_blank" rel="noopener">' + esc(v.doc.label) + '</a>';
      modal.classList.add("is-video");
    }
    player.innerHTML = html;
    document.getElementById("modalDesc").textContent = desc;
    document.getElementById("modalLinks").innerHTML = links;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(function () { modal.classList.add("is-open"); });
    modal.querySelector(".modal__close").focus();
  }

  function close() {
    modal.classList.remove("is-open");
    player.innerHTML = ""; // destroys the iframe = stops playback, frees memory
    modal.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", function (e) {
    var card = e.target.closest(".card");
    if (card) { open(card.getAttribute("data-kind"), +card.getAttribute("data-i")); return; }
    if (e.target.closest("[data-close]")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) close();
  });

  /* ---------- Nav ---------- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 40); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toggle.addEventListener("click", function () {
    var openNow = nav.classList.toggle("is-menu");
    toggle.setAttribute("aria-expanded", openNow);
  });
  document.getElementById("navLinks").addEventListener("click", function (e) {
    if (e.target.closest("a")) { nav.classList.remove("is-menu"); toggle.setAttribute("aria-expanded", "false"); }
  });

  /* ---------- Reveal on scroll ---------- */
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }
})();
