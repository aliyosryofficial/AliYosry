/* =========================================================
   1) EDIT THIS BLOCK ONLY — your personal links
   ========================================================= */
const CONFIG = {
  email:    "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github:   "https://github.com/your-username",
  cv:       "Ali_Yosry_CV.pdf",           // put your CV PDF in the repo root
  paper:    "weapon-of-awareness.pdf",    // put the research PDF in the repo root
  photo:    "images/ali.jpg",             // put your photo at images/ali.jpg
  protect:  true                          // anti-copy deterrent: true = on, false = off
};

/* =========================================================
   2) WORK ITEMS — to add one: add an object here, then add
      its texts (p_<id>_t, p_<id>_d, p_<id>_x) in both
      languages below. "link" can be a CONFIG key or empty.
   ========================================================= */
const PROJECTS = [
  { id:"weapon",  cat:"research",   tags:["tg_research","tg_cyber","tg_social"], link:"paper", linkLabel:"p_weapon_b" },
  { id:"ioy",     cat:"leadership", tags:["tg_leadership","tg_intl"] },
  { id:"writing", cat:"writing",    tags:["tg_writing","tg_comm"] }
];

/* =========================================================
   3) TEXT (English / Arabic)
   ========================================================= */
const T = {
  en: {
    brand:"Ali Yosry", name:"Ali Yosry", hi:"Hi, I'm",
    nav_about:"About", nav_cap:"Capabilities", nav_work:"Work", nav_journey:"Journey", nav_contact:"Contact",
    pal_btn:"Search", badge:"Open to opportunities and collaboration",
    sub:"Student, researcher and writer from Alexandria, Egypt. I turn complex ideas into clear, verified work that people can actually use.",
    cta1:"View my work", cta_cv:"Download CV",
    chip1:"Research", chip2:"Writing", chip3:"Leadership",
    st1:"Independent research paper", st2:"Ambassador role", st3:"Expected graduation",
    about_h:"Work that is clear, verified and useful",
    about_p1:"I'm a student and researcher from Alexandria, Egypt, studying at the Faculty of Law, Alexandria University. I care about doing work that holds up to scrutiny, whether that's a research paper, a piece of writing, or an international collaboration.",
    about_p2:"I'm disciplined by default, curious about technology and digital security, and I prefer substance over noise.",
    i_loc:"Based in", i_locv:"Alexandria, Egypt", i_edu:"Education", i_eduv:"Faculty of Law, Alexandria University",
    i_int:"Interests", i_intv:"Research, writing, digital security", i_mail:"Email",
    cap_h:"What I bring",
    c1t:"Research & Analysis", c1d:"Structured, source-based analysis that holds up to checking.",
    c2t:"Writing & Communication", c2d:"Clear explanations for general audiences, formal or accessible as the context demands.",
    c3t:"Leadership & Collaboration", c3d:"Building partnerships across borders and working with international networks.",
    c4t:"Digital Literacy & Security", c4d:"Understanding online risks and building cybersecurity fundamentals to stay ahead of them.",
    work_h:"Selected work",
    f_all:"All", f_research:"Research", f_leadership:"Leadership", f_writing:"Writing",
    p_weapon_t:"Weapon of Awareness",
    p_weapon_d:"An independent research paper on the risks of social media and cybercrime, and the protections available.",
    p_weapon_x:"An independent research paper examining the risks of social media and cybercrime and the protections available to users, written in plain analytical language so it is useful well beyond academic readers.",
    p_weapon_b:"Read the paper",
    p_ioy_t:"Ambassador, International Organization of Youth",
    p_ioy_d:"Ambassador role with an international youth organization for the 2026–2027 term.",
    p_ioy_x:"Accepted as an Ambassador of the International Organization of Youth for the 2026–2027 term, collaborating with an international network.",
    p_writing_t:"Public-facing explainers",
    p_writing_d:"Simplified, practical content that turns complex rules into clear guidance for everyday people.",
    p_writing_x:"Clear, practical content written for general audiences, turning complex rules and ideas into guidance people can apply, in a formal or accessible tone depending on the channel.",
    tg_research:"Research", tg_cyber:"Cybercrime", tg_social:"Social media", tg_leadership:"Leadership", tg_intl:"International", tg_writing:"Writing", tg_comm:"Communication",
    pr_eyebrow:"Principles", pr_h:"How I work",
    pr1t:"Clarity over noise", pr1d:"If it can't be explained simply, it isn't finished. I cut what doesn't carry weight.",
    pr2t:"Discipline over motivation", pr2d:"Consistency builds results. I rely on routine and standards, not on mood.",
    pr3t:"Verified over assumed", pr3d:"I check sources and show my reasoning, so the work can be trusted and challenged.",
    jr_h:"Education and milestones",
    r1w:"Expected 2028", r1t:"Faculty of Law, Alexandria University", r1d:"English Section",
    r2w:"2026–2027", r2t:"Ambassador, International Organization of Youth", r2d:"International network and collaboration",
    r3w:"Independent", r3t:"Research paper: Weapon of Awareness", r3d:"Self-directed research on social media risks and cybercrime",
    con_h:"Let's build something together",
    con_p:"Open to internships, collaborations and conversations. The fastest way to reach me is email.",
    f_name:"Name", f_mail:"Your email", f_msg:"Message", f_send:"Send message",
    f_err:"Please fill in all fields with a valid email.", f_ok:"Opening your email app to send the message…",
    top:"Back to top", copy_label:"Copy email", t_copied:"Email copied",
    pal_ph:"Type a command or search…", pal_hint:"↑↓ navigate · Enter select · Esc close",
    pal_go:"Go to", pal_theme:"Toggle light / dark theme", pal_lang:"Switch language", pal_copy:"Copy email address",
    pal_mail:"Send an email", pal_cv:"Download CV", pal_none:"No results",
    roles:["Student & Researcher","Writer","Lifelong Learner"],
    marquee:["Research","Writing","Analysis","Leadership","Digital literacy","Communication","Discipline","Learning"],
    title:"Ali Yosry — Student, Researcher & Writer"
  },
  ar: {
    brand:"علي يسري", name:"علي يسري", hi:"مرحبًا، أنا",
    nav_about:"نبذة", nav_cap:"القدرات", nav_work:"الأعمال", nav_journey:"المسيرة", nav_contact:"تواصل",
    pal_btn:"بحث", badge:"متاح للفرص والتعاون",
    sub:"طالب وباحث وكاتب من الإسكندرية، مصر. أحوّل الأفكار المعقدة إلى عمل واضح وموثّق يستفيد منه الناس فعلًا.",
    cta1:"شاهد أعمالي", cta_cv:"تحميل السيرة الذاتية",
    chip1:"بحث", chip2:"كتابة", chip3:"قيادة",
    st1:"بحث مستقل", st2:"دور سفير", st3:"التخرج المتوقع",
    about_h:"عمل واضح وموثّق ومفيد",
    about_p1:"أنا طالب وباحث من الإسكندرية، مصر، أدرس بكلية الحقوق جامعة الإسكندرية. يهمني أن يصمد عملي أمام التدقيق، سواء كان بحثًا أو مقالًا أو تعاونًا دوليًا.",
    about_p2:"الانضباط هو الأصل عندي، ولديّ فضول تجاه التقنية والأمن الرقمي، وأفضّل الجوهر على الضجيج.",
    i_loc:"مقيم في", i_locv:"الإسكندرية، مصر", i_edu:"التعليم", i_eduv:"كلية الحقوق، جامعة الإسكندرية",
    i_int:"الاهتمامات", i_intv:"البحث، الكتابة، الأمن الرقمي", i_mail:"البريد الإلكتروني",
    cap_h:"ما أقدّمه",
    c1t:"البحث والتحليل", c1d:"تحليل منظم قائم على المصادر، قابل للتحقق والمراجعة.",
    c2t:"الكتابة والتواصل", c2d:"شرح واضح لعموم الجمهور، رسمي أو مبسّط بحسب السياق.",
    c3t:"القيادة والتعاون", c3d:"بناء شراكات عابرة للحدود والعمل مع شبكات دولية.",
    c4t:"الثقافة الرقمية والأمان", c4d:"فهم المخاطر الرقمية وبناء أساسيات الأمن السيبراني للبقاء في المقدمة.",
    work_h:"أعمال مختارة",
    f_all:"الكل", f_research:"بحث", f_leadership:"قيادة", f_writing:"كتابة",
    p_weapon_t:"سلاح الوعي",
    p_weapon_d:"بحث مستقل حول مخاطر وسائل التواصل الاجتماعي والجرائم الإلكترونية والحماية المتاحة.",
    p_weapon_x:"بحث مستقل يتناول مخاطر وسائل التواصل الاجتماعي والجرائم الإلكترونية وسبل الحماية المتاحة للمستخدمين، مكتوب بلغة تحليلية واضحة ليفيد القارئ العادي وليس الأكاديمي فقط.",
    p_weapon_b:"اقرأ البحث",
    p_ioy_t:"سفير المنظمة الدولية للشباب",
    p_ioy_d:"دور سفير في منظمة شبابية دولية خلال دورة 2026–2027.",
    p_ioy_x:"تم قبولي سفيرًا للمنظمة الدولية للشباب لدورة 2026–2027، للتعاون مع شبكة دولية.",
    p_writing_t:"شروحات موجهة للجمهور",
    p_writing_d:"محتوى مبسّط وعملي يحوّل القواعد المعقدة إلى إرشادات واضحة للناس.",
    p_writing_x:"محتوى واضح وعملي موجه لعموم الجمهور، يحوّل القواعد والأفكار المعقدة إلى إرشادات قابلة للتطبيق، بنبرة رسمية أو مبسّطة بحسب القناة.",
    tg_research:"بحث", tg_cyber:"الجرائم الإلكترونية", tg_social:"وسائل التواصل", tg_leadership:"قيادة", tg_intl:"دولي", tg_writing:"كتابة", tg_comm:"تواصل",
    pr_eyebrow:"المبادئ", pr_h:"كيف أعمل",
    pr1t:"الوضوح قبل الضجيج", pr1d:"ما لا يمكن شرحه ببساطة لم يكتمل بعد. أحذف كل ما لا يحمل قيمة.",
    pr2t:"الانضباط قبل الحماس", pr2d:"الاستمرارية تصنع النتائج. أعتمد على الروتين والمعايير لا على المزاج.",
    pr3t:"التحقق قبل الافتراض", pr3d:"أراجع المصادر وأعرض منطقي، ليكون العمل جديرًا بالثقة وقابلًا للنقاش.",
    jr_h:"التعليم والمحطات",
    r1w:"التخرج المتوقع 2028", r1t:"كلية الحقوق، جامعة الإسكندرية", r1d:"القسم الإنجليزي",
    r2w:"2026–2027", r2t:"سفير المنظمة الدولية للشباب", r2d:"شبكة دولية وتعاون",
    r3w:"مستقل", r3t:"بحث: سلاح الوعي", r3d:"بحث ذاتي حول مخاطر وسائل التواصل والجرائم الإلكترونية",
    con_h:"لنبنِ شيئًا معًا",
    con_p:"متاح للتدريب والتعاون والنقاش. أسرع وسيلة للوصول إليّ هي البريد الإلكتروني.",
    f_name:"الاسم", f_mail:"بريدك الإلكتروني", f_msg:"الرسالة", f_send:"إرسال الرسالة",
    f_err:"من فضلك املأ كل الحقول ببريد إلكتروني صحيح.", f_ok:"جارٍ فتح تطبيق البريد لإرسال الرسالة…",
    top:"العودة للأعلى", copy_label:"نسخ البريد", t_copied:"تم نسخ البريد",
    pal_ph:"اكتب أمرًا أو ابحث…", pal_hint:"↑↓ تنقّل · Enter اختيار · Esc إغلاق",
    pal_go:"اذهب إلى", pal_theme:"تبديل الوضع الفاتح / الداكن", pal_lang:"تبديل اللغة", pal_copy:"نسخ عنوان البريد",
    pal_mail:"إرسال بريد إلكتروني", pal_cv:"تحميل السيرة الذاتية", pal_none:"لا توجد نتائج",
    roles:["طالب وباحث","كاتب","متعلّم دائم"],
    marquee:["البحث","الكتابة","التحليل","القيادة","الثقافة الرقمية","التواصل","الانضباط","التعلّم"],
    title:"علي يسري — طالب وباحث وكاتب"
  }
};

/* =========================================================
   Core helpers
   ========================================================= */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k,v); } catch(e){} }
};
let lang = "en";
let revealStarted = false;
let currentFilter = "all";

function toast(msg){
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast.id);
  toast.id = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---------- Config links ---------- */
$$("[data-href]").forEach(a => {
  const k = a.dataset.href;
  a.href = k === "email" ? "mailto:" + CONFIG.email : CONFIG[k];
});
$$("[data-email]").forEach(el => { el.textContent = CONFIG.email; });
$("#kbdHint").textContent = /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘ K" : "Ctrl K";

/* ---------- Photo (falls back to initials) ---------- */
const photo = $("#photo");
photo.addEventListener("error", () => photo.remove());
photo.src = CONFIG.photo;

/* =========================================================
   Theme
   ========================================================= */
let accent = "#4C8DFF";
function setTheme(t){
  root.dataset.theme = t;
  $('meta[name="theme-color"]').content = t === "dark" ? "#070B14" : "#F6F8FC";
  accent = getComputedStyle(root).getPropertyValue("--accent").trim() || accent;
  store.set("theme", t);
}
function toggleTheme(){ setTheme(root.dataset.theme === "dark" ? "light" : "dark"); }
$("#themeBtn").addEventListener("click", toggleTheme);

/* =========================================================
   Language
   ========================================================= */
function setLang(l){
  lang = l;
  const d = T[l];
  root.lang = l;
  root.dir = l === "ar" ? "rtl" : "ltr";
  $$("[data-t]").forEach(el => { if (d[el.dataset.t] != null) el.textContent = d[el.dataset.t]; });
  $$("[data-tp]").forEach(el => { el.placeholder = d[el.dataset.tp]; });
  $$("[data-tl]").forEach(el => { el.setAttribute("aria-label", d[el.dataset.tl]); });
  $("#langBtn").textContent = l === "ar" ? "English" : "العربية";
  document.title = d.title;
  renderMarquee();
  renderFilters();
  renderProjects();
  startTyping();
  if (!$("#palette").hidden) renderPalette($("#palInput").value);
  writeSchema();
  store.set("lang", l);
}
$("#langBtn").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));

function renderMarquee(){
  const set = T[lang].marquee.map(t => `<span>${t}</span>`).join("");
  $("#track").innerHTML = set + set;
}

function writeSchema(){
  let s = $("#ld");
  if (!s){ s = document.createElement("script"); s.id = "ld"; s.type = "application/ld+json"; document.head.appendChild(s); }
  s.textContent = JSON.stringify({
    "@context":"https://schema.org", "@type":"Person",
    name:"Ali Yosry", alternateName:"علي يسري",
    jobTitle:"Student, Researcher & Writer",
    address:{ "@type":"PostalAddress", addressLocality:"Alexandria", addressCountry:"EG" },
    alumniOf:{ "@type":"CollegeOrUniversity", name:"Alexandria University" },
    email:CONFIG.email, sameAs:[CONFIG.linkedin, CONFIG.github]
  });
}

/* ---------- Typing effect ---------- */
let typer = null;
function startTyping(){
  clearTimeout(typer);
  const el = $("#typed"), roles = T[lang].roles;
  if (reduce){ el.textContent = roles[0]; return; }
  let r = 0, i = 0, del = false;
  (function tick(){
    const word = roles[r];
    el.textContent = word.slice(0, i);
    let wait = del ? 40 : 85;
    if (!del && i === word.length){ del = true; wait = 1500; }
    else if (del && i === 0){ del = false; r = (r + 1) % roles.length; wait = 350; }
    else i += del ? -1 : 1;
    typer = setTimeout(tick, wait);
  })();
}

/* =========================================================
   Work: filters, cards, modal
   ========================================================= */
function renderFilters(){
  const cats = ["all", ...new Set(PROJECTS.map(p => p.cat))];
  $("#filters").innerHTML = cats.map(c =>
    `<button class="fbtn${c === currentFilter ? " on" : ""}" data-f="${c}" type="button">${T[lang]["f_" + c]}</button>`).join("");
}
$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".fbtn"); if (!b) return;
  currentFilter = b.dataset.f;
  $$(".fbtn").forEach(x => x.classList.toggle("on", x === b));
  $$(".proj").forEach(p => {
    const show = currentFilter === "all" || p.dataset.cat === currentFilter;
    if (show){ p.hidden = false; requestAnimationFrame(() => p.classList.remove("out")); }
    else { p.classList.add("out"); setTimeout(() => { if (p.classList.contains("out")) p.hidden = true; }, 300); }
  });
});

const ARROW = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
function renderProjects(){
  const d = T[lang];
  $("#projGrid").innerHTML = PROJECTS.map((p, i) => {
    const show = currentFilter === "all" || p.cat === currentFilter;
    return `<article class="card spot tilt proj reveal${revealStarted ? " in" : ""}${show ? "" : " out"}" ${show ? "" : "hidden"} data-id="${p.id}" data-cat="${p.cat}" tabindex="0" role="button" style="--d:${i * .08}s">
      <div class="proj-top"><span class="tag">${d["f_" + p.cat]}</span><span class="arrow">${ARROW}</span></div>
      <h3>${d["p_" + p.id + "_t"]}</h3>
      <p>${d["p_" + p.id + "_d"]}</p>
      <div class="mini-tags">${p.tags.map(t => `<span>${d[t]}</span>`).join("")}</div>
    </article>`;
  }).join("");
}
$("#projGrid").addEventListener("click", e => { const c = e.target.closest(".proj"); if (c) openModal(c.dataset.id); });
$("#projGrid").addEventListener("keydown", e => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const c = e.target.closest(".proj"); if (c){ e.preventDefault(); openModal(c.dataset.id); }
});

/* ---------- Overlay engine (modal + palette) ---------- */
let lastFocus = null;
function showOverlay(el, focusEl){
  lastFocus = document.activeElement;
  el.hidden = false;
  document.body.classList.add("lock");
  requestAnimationFrame(() => { el.classList.add("open"); if (focusEl) focusEl.focus(); });
}
function hideOverlay(el){
  if (el.hidden) return;
  el.classList.remove("open");
  setTimeout(() => {
    el.hidden = true;
    if ($("#modal").hidden && $("#palette").hidden) document.body.classList.remove("lock");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }, reduce ? 0 : 220);
}
function trapTab(e, box){
  if (e.key !== "Tab") return;
  const f = $$("button,a[href],input,textarea,[tabindex]:not([tabindex='-1'])", box).filter(x => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
}

function openModal(id){
  const p = PROJECTS.find(x => x.id === id), d = T[lang];
  $("#mCat").textContent = d["f_" + p.cat];
  $("#mTitle").textContent = d["p_" + id + "_t"];
  $("#mText").textContent = d["p_" + id + "_x"];
  $("#mTags").innerHTML = p.tags.map(t => `<span>${d[t]}</span>`).join("");
  $("#mCta").innerHTML = p.link
    ? `<a class="btn primary" href="${CONFIG[p.link]}" target="_blank" rel="noopener">${d[p.linkLabel]}</a>` : "";
  showOverlay($("#modal"), $("#modalX"));
}
$("#modalX").addEventListener("click", () => hideOverlay($("#modal")));
$("#modal").addEventListener("click", e => { if (e.target.id === "modal") hideOverlay($("#modal")); });
$("#modal").addEventListener("keydown", e => trapTab(e, $(".modal-box")));

/* =========================================================
   Command palette (Ctrl/⌘ + K)
   ========================================================= */
let palItems = [], palSel = 0;
function go(id){
  if (id === "top") scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  else document.getElementById(id).scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}
function copyEmail(){
  const done = () => toast(T[lang].t_copied);
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(CONFIG.email).then(done, fallback);
  } else fallback();
  function fallback(){
    const ta = document.createElement("textarea");
    ta.value = CONFIG.email; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch(e){}
    ta.remove();
  }
}
function downloadCV(){
  const a = document.createElement("a");
  a.href = CONFIG.cv; a.download = ""; document.body.appendChild(a); a.click(); a.remove();
}
function commands(){
  const d = T[lang], g = d.pal_go + " · ";
  return [
    { l:g + d.nav_about,   h:"#", run:() => go("about") },
    { l:g + d.nav_cap,     h:"#", run:() => go("capabilities") },
    { l:g + d.nav_work,    h:"#", run:() => go("projects") },
    { l:g + d.pr_eyebrow,  h:"#", run:() => go("principles") },
    { l:g + d.nav_journey, h:"#", run:() => go("journey") },
    { l:g + d.nav_contact, h:"#", run:() => go("contact") },
    { l:d.pal_theme, h:"◐", run:toggleTheme },
    { l:d.pal_lang,  h:"A/ع", run:() => setLang(lang === "ar" ? "en" : "ar") },
    { l:d.pal_copy,  h:"⧉", run:copyEmail },
    { l:d.pal_mail,  h:"@", run:() => { location.href = "mailto:" + CONFIG.email; } },
    { l:"LinkedIn",  h:"↗", run:() => window.open(CONFIG.linkedin, "_blank", "noopener") },
    { l:"GitHub",    h:"↗", run:() => window.open(CONFIG.github, "_blank", "noopener") },
    { l:d.pal_cv,    h:"↓", run:downloadCV }
  ];
}
function renderPalette(q = ""){
  const all = commands(), s = q.trim().toLowerCase();
  palItems = s ? all.filter(c => c.l.toLowerCase().includes(s)) : all;
  palSel = Math.min(palSel, Math.max(0, palItems.length - 1));
  $("#palList").innerHTML = palItems.length
    ? palItems.map((c, i) => `<li role="option" data-i="${i}" class="${i === palSel ? "sel" : ""}">${c.l}<small>${c.h}</small></li>`).join("")
    : `<li class="empty">${T[lang].pal_none}</li>`;
}
function openPalette(){
  if (!$("#palette").hidden) return;
  palSel = 0;
  $("#palInput").value = "";
  renderPalette();
  showOverlay($("#palette"), $("#palInput"));
}
function runPalette(i){
  const c = palItems[i]; if (!c) return;
  hideOverlay($("#palette"));
  setTimeout(c.run, reduce ? 0 : 240);
}
$("#palBtn").addEventListener("click", openPalette);
$("#palInput").addEventListener("input", e => { palSel = 0; renderPalette(e.target.value); });
$("#palList").addEventListener("click", e => { const li = e.target.closest("li[data-i]"); if (li) runPalette(+li.dataset.i); });
$("#palList").addEventListener("pointermove", e => {
  const li = e.target.closest("li[data-i]"); if (!li || +li.dataset.i === palSel) return;
  palSel = +li.dataset.i; $$("#palList li").forEach((x, i) => x.classList.toggle("sel", i === palSel));
});
$("#palette").addEventListener("click", e => { if (e.target.id === "palette") hideOverlay($("#palette")); });
$("#palette").addEventListener("keydown", e => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp"){
    e.preventDefault();
    if (!palItems.length) return;
    palSel = (palSel + (e.key === "ArrowDown" ? 1 : -1) + palItems.length) % palItems.length;
    $$("#palList li").forEach((x, i) => x.classList.toggle("sel", i === palSel));
    $("#palList .sel").scrollIntoView({ block:"nearest" });
  } else if (e.key === "Enter"){ e.preventDefault(); runPalette(palSel); }
  else trapTab(e, $(".pal-box"));
});
addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"){ e.preventDefault(); $("#palette").hidden ? openPalette() : hideOverlay($("#palette")); }
  else if (e.key === "Escape"){ hideOverlay($("#palette")); hideOverlay($("#modal")); }
});

/* =========================================================
   Scroll: progress, nav, active section, mobile menu
   ========================================================= */
const nav = $("#nav"), bar = $("#progress");
function onScroll(){
  const h = document.documentElement;
  const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
  bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
  nav.classList.toggle("scrolled", h.scrollTop > 20);
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navLinks = $$(".links a"), dots = $$(".dots a");
const secObs = new IntersectionObserver(es => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const id = e.target.dataset.sec;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
    dots.forEach(a => a.classList.toggle("active", a.dataset.s === id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("[data-sec]").forEach(s => secObs.observe(s));

const burger = $("#burger"), menu = $("#menu");
function toggleMenu(open){ menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", String(open)); }
burger.addEventListener("click", () => toggleMenu(!menu.classList.contains("open")));
navLinks.forEach(a => a.addEventListener("click", () => toggleMenu(false)));
document.addEventListener("click", e => { if (!e.target.closest(".nav")) toggleMenu(false); });

/* =========================================================
   Reveal on scroll + count-up
   ========================================================= */
let revObs;
function startReveals(){
  revealStarted = true;
  revObs = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); revObs.unobserve(e.target); } });
  }, { threshold: .15 });
  $$(".reveal:not(.in)").forEach(el => revObs.observe(el));

  const countObs = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count;
      countObs.unobserve(el);
      if (reduce){ el.textContent = end; return; }
      const t0 = performance.now(), dur = 1400;
      (function step(t){
        const k = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: .6 });
  $$("[data-count]").forEach(el => countObs.observe(el));
}

/* =========================================================
   Pointer effects: spotlight, tilt, magnetic, cursor
   ========================================================= */
document.addEventListener("pointermove", e => {
  const s = e.target.closest && e.target.closest(".spot");
  if (s){
    const r = s.getBoundingClientRect();
    s.style.setProperty("--mx", (e.clientX - r.left) + "px");
    s.style.setProperty("--my", (e.clientY - r.top) + "px");
  }
  if (finePointer && !reduce){
    const t = e.target.closest(".tilt");
    if (t){
      const r = t.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      t.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    }
  }
});
document.addEventListener("pointerout", e => {
  const t = e.target.closest && e.target.closest(".tilt");
  if (t && !t.contains(e.relatedTarget)) t.style.transform = "";
});

if (finePointer && !reduce){
  $$(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * .18).toFixed(1)}px, ${((e.clientY - r.top - r.height / 2) * .25).toFixed(1)}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });

  /* custom cursor */
  const ring = $("#cur"), dotEl = $("#curDot");
  let x = 0, y = 0, rx = 0, ry = 0;
  addEventListener("pointermove", e => {
    x = e.clientX; y = e.clientY;
    root.classList.add("cursor-on");
    dotEl.style.transform = `translate(${x}px,${y}px)`;
  }, { passive: true });
  (function loop(){
    rx += (x - rx) * .18; ry += (y - ry) * .18;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", e => {
    ring.classList.toggle("hover", !!(e.target.closest && e.target.closest("a,button,input,textarea,.proj")));
  });
  document.addEventListener("mouseleave", () => root.classList.remove("cursor-on"));

  /* aurora parallax */
  const blobs = $$(".aurora i");
  addEventListener("pointermove", e => {
    const px = e.clientX / innerWidth - .5, py = e.clientY / innerHeight - .5;
    blobs.forEach((b, i) => { b.style.translate = `${px * (30 + i * 25)}px ${py * (30 + i * 25)}px`; });
  }, { passive: true });
}

/* =========================================================
   Hero: interactive network canvas
   ========================================================= */
(function network(){
  const c = $("#net"), ctx = c.getContext("2d"), hero = c.parentElement;
  let w = 0, h = 0, pts = [], running = true;
  const mouse = { x: -999, y: -999 };

  function size(){
    const r = hero.getBoundingClientRect(), dpr = Math.min(2, devicePixelRatio || 1);
    w = r.width; h = r.height;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(85, (w * h) / 17000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .32, vy: (Math.random() - .5) * .32
    }));
  }
  function draw(){
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = accent; ctx.strokeStyle = accent;
    for (let i = 0; i < pts.length; i++){
      const p = pts[i];
      if (!reduce){
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < 14000){ const f = (1 - d2 / 14000) * .6; p.x += dx * f * .05; p.y += dy * f * .05; }
      }
      ctx.globalAlpha = .55; ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fill();
      for (let j = i + 1; j < pts.length; j++){
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = dx * dx + dy * dy;
        if (d < 15000){ ctx.globalAlpha = (1 - d / 15000) * .28; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
      }
      const mx = p.x - mouse.x, my = p.y - mouse.y, md = mx * mx + my * my;
      if (md < 26000){ ctx.globalAlpha = (1 - md / 26000) * .5; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
    }
    ctx.globalAlpha = 1;
  }
  function loop(){ if (running) draw(); requestAnimationFrame(loop); }

  size();
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(size, 150); });
  hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; });
  new IntersectionObserver(es => { running = es[0].isIntersecting; }).observe(hero);
  if (reduce) draw(); else loop();
})();

/* =========================================================
   Contact form (opens the visitor's email app)
   ========================================================= */
$("#copyMail").addEventListener("click", copyEmail);
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const n = $("#fName"), m = $("#fMail"), g = $("#fMsg"), note = $("#formNote");
  const ok = {
    n: n.value.trim().length > 1,
    m: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.value.trim()),
    g: g.value.trim().length > 4
  };
  n.classList.toggle("bad", !ok.n); m.classList.toggle("bad", !ok.m); g.classList.toggle("bad", !ok.g);
  if (!(ok.n && ok.m && ok.g)){ note.textContent = T[lang].f_err; return; }
  const subject = encodeURIComponent("Portfolio message from " + n.value.trim());
  const body = encodeURIComponent(g.value.trim() + "\n\n— " + n.value.trim() + " (" + m.value.trim() + ")");
  note.textContent = T[lang].f_ok;
  location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
});


/* =========================================================
   Anti-copy deterrent (set CONFIG.protect = false to disable)
   Note: this discourages casual copying only. Anyone determined
   can still read the page source, so never put secrets in it.
   ========================================================= */
if (CONFIG.protect){
  root.classList.add("protect");
  const editable = t => t && t.closest && t.closest("input,textarea,[contenteditable]");
  ["copy", "cut", "contextmenu", "dragstart", "selectstart"].forEach(ev =>
    document.addEventListener(ev, e => { if (!editable(e.target)) e.preventDefault(); }));
  document.addEventListener("keydown", e => {
    const mod = e.ctrlKey || e.metaKey;
    const inField = editable(e.target);
    const devtools = e.code === "F12" || (mod && (e.shiftKey || e.altKey) && ["KeyI", "KeyJ", "KeyC"].includes(e.code));
    const sourceOrSave = mod && ["KeyU", "KeyS"].includes(e.code);
    const copyKeys = mod && !inField && ["KeyC", "KeyX", "KeyA"].includes(e.code);
    if (devtools || sourceOrSave || copyKeys) e.preventDefault();
  }, true);
}

/* =========================================================
   Boot: theme, language, loader
   ========================================================= */
$("#yr").textContent = new Date().getFullYear();
setTheme(store.get("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
setLang(store.get("lang") === "ar" ? "ar" : "en");

(function boot(){
  const loader = $("#loader"), fill = $("#loaderBar");
  let finished = false;
  function finish(){
    if (finished) return; finished = true;
    loader.classList.add("done");
    root.classList.add("ready");
    startReveals();
    setTimeout(() => loader.remove(), 1000);
  }
  if (reduce){ finish(); return; }
  const t0 = performance.now(), dur = 900;
  (function step(t){
    const k = Math.min(1, (t - t0) / dur);
    fill.style.width = (k * 100) + "%";
    if (k < 1) requestAnimationFrame(step); else setTimeout(finish, 150);
  })(t0);
  setTimeout(finish, 3000);   // failsafe
})();
