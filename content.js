/* =====================================================================
   PORTFOLIO CONTENT
   ---------------------------------------------------------------------
   To add or change a project, edit the lists below and save.
   - Audio:  type "soundcloud" -> id = track number, token = secret token (s-xxxx)
             type "spotify"    -> id = episode id
   - Video:  youtube = the video id (the part after "watch?v=")
   - img:    file name inside assets/img/
   ===================================================================== */

window.AUDIO_CATEGORIES = [
  "Podcast & Audio Documentary",
  "Audio Story",
  "Audio Recording",
  "Music Mixdown",
];

window.AUDIO = [
  { title: "AI in the Classroom", label: "Podcast Episode", cat: "Podcast & Audio Documentary",
    type: "soundcloud", id: "2399215836", token: "s-0hIuud2b9v0", img: "a-ai-classroom.jpg", featured: true },
  { title: "Impact89 FM Program", label: "Podcast Intro", cat: "Podcast & Audio Documentary",
    type: "soundcloud", id: "2399261055", token: "s-woAm0RqR58m", img: "a-impact89.jpg" },
  { title: "Lost in Time", label: "Audio Story", cat: "Audio Story",
    type: "spotify", id: "274subbVMhfASYz4CdKxAR", img: "a-lost-in-time.jpg", featured: true },
  { title: "Future and Career", label: "Audio Story", cat: "Audio Story",
    type: "soundcloud", id: "2399273055", token: "s-qR6N3HqWEvk", img: "a-future-career.jpg" },
  { title: "Thoughts on Cloud", label: "Audio Recording", cat: "Audio Recording",
    type: "soundcloud", id: "2399271804", token: "s-NLyWCxMqdVD", img: "a-cloud.jpg" },
  { title: "Sound of Change", label: "Audio Recording", cat: "Audio Recording",
    type: "soundcloud", id: "2399271417", token: "s-tMfwRjzC8HU", img: "a-sound-of-change.jpg", featured: true },
  { title: "#1 Low Ball", label: "Mixdown", cat: "Music Mixdown",
    type: "soundcloud", id: "2399300124", token: "s-iMgqvRycjOi", img: "a-mix1.jpg" },
  { title: "#2 Kronos", label: "Mixdown", cat: "Music Mixdown",
    type: "soundcloud", id: "2399299410", token: "s-0qRiPBf6oXT", img: "a-mix2.jpg" },
  { title: "#3 Gaia", label: "Mixdown", cat: "Music Mixdown",
    type: "soundcloud", id: "2399298297", token: "s-jp2nr6IZUWS", img: "a-mix3.jpg" },
  { title: "#4 Fat", label: "Mixdown", cat: "Music Mixdown",
    type: "soundcloud", id: "2399297343", token: "s-RptOWb2Vvet", img: "a-mix4.jpg" },
  { title: "Got It Made", label: "Integrated Mixdown", cat: "Music Mixdown",
    type: "soundcloud", id: "2399245464", token: "s-4jWwbntvfGE", img: "a-got-it-made.jpg", featured: true },
  { title: "8 Bit Music at BeepBox", label: "Chiptune", cat: "Music Mixdown",
    type: "soundcloud", id: "2399272197", token: "s-8Wu4o14T949", img: "a-beepbox.jpg" },
];

window.VIDEO_CATEGORIES = [
  "Audio & Sound Effect",
  "Silent Film Project",
  "Scoring Moving Films",
  "Short Story Video",
];

window.VIDEO = [
  { title: "Game BGM Redesign", cat: "Audio & Sound Effect", youtube: "IXXOx0K05Mk", img: "v-game-bgm.jpg",
    desc: "A game audio redesign project that replaces Super Mario's original soundtrack and sound effects with newly composed background music and custom-crafted SFX to offer a fresh interactive experience." },
  { title: "Music and Curated Visual", cat: "Audio & Sound Effect", youtube: "2d5VYGdx_Lo", img: "v-music-visual.jpg",
    desc: "A multimedia music project featuring custom-produced original audio paired with carefully curated visual elements (photos and video footage) to evoke a cohesive mood and artistic expression." },
  { title: "Silent Film Remixing 1", cat: "Silent Film Project", youtube: "yVchB_KeaR8", img: "v-silent1.jpg",
    desc: "A Sound Design & Foley project featuring custom Foley work, voice dubbing, and comical sound effects synchronized to a classic Charlie Chaplin slapstick comedy scene." },
  { title: "Silent Film Remixing 2", cat: "Silent Film Project", youtube: "34I93vn7ZSA", img: "v-silent2.jpg",
    desc: "A Sound Design & Foley project that transforms a classic silent film by orchestrating tailored background music and precise sound effects to enhance narrative depth and visual realism." },
  { title: "Fantasy-themed Soundscape", cat: "Scoring Moving Films", youtube: "5B2LSxhEy28", img: "v-fantasy.jpg",
    desc: "A music production project for a fantasy-themed video sequence, featuring whimsical and enchanting soundscapes that accompany a young girl's mystical bond with an owl in a forest." },
  { title: "African Savannah Wildlife", cat: "Scoring Moving Films", youtube: "5FfnLIH4yWk", img: "v-savannah.jpg",
    desc: "A nature documentary scoring project that creates a serene and immersive atmospheric soundtrack, reflecting the daily lifecycle and peaceful rhythm of African savannah wildlife." },
  { title: "TV Show Intro", cat: "Scoring Moving Films", youtube: "JG2Qz-YnSN4", img: "v-tv-intro.jpg",
    desc: "A punchy, modern, and stylish urban promo intro track crafted to complement fast-paced urban visuals and vibrant motion graphic transitions in cinematic colors." },
  { title: "Sci-fi Film Trailer", cat: "Scoring Moving Films", youtube: "DbDsWBxIch8", img: "v-scifi.jpg",
    desc: "An original BGM project designed for a sci-fi short trailer, featuring atmospheric and suspenseful soundscapes to complement the cinematic visuals of a snowy forest and a UFO appearance." },
  { title: "Capoeira Martial Arts", cat: "Scoring Moving Films", youtube: "Bhf9laIMHsI", img: "v-capoeira.jpg",
    desc: "A rhythmic background music production tailored to the dynamic martial arts movements of Capoeira, accentuating the energetic flow and timing of the performers." },
  { title: "Short Story Video", cat: "Short Story Video", youtube: "zVHpRmfGDx8", img: "v-short-story.jpg",
    desc: "A short narrative video project built upon detailed scene descriptions and screenplays, directing live-action performances to bring structured storytelling to life visually.",
    doc: { label: "Scene Description (PDF)", href: "assets/docs/Short-Story_Scene-Shot-List.pdf" } },
  { title: "Short Documentary", cat: "Short Story Video", youtube: "7mYJxaRt7bU", img: "v-documentary.jpg",
    desc: "An interview-based short documentary exploring the theme of \"Passion,\" capturing authentic human stories through engaging visual narrative and thoughtful editing." },
];
