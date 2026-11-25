/* =========================================================
   EDIT THIS BLOCK ONLY — your personal links
   ========================================================= */
const CONFIG = {
  email:    "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github:   "https://github.com/your-username",
  paper:    "weapon-of-awareness.pdf",   // put the PDF in the repo root
  photo:    "images/ali.jpg"             // put your photo at images/ali.jpg
};

/* ---------- Translations ---------- */
const T = {
  en: {
    brand:"Ali Yosry", name:"Ali Yosry", hi:"Hi, I'm",
    nav_about:"About", nav_expertise:"Expertise", nav_research:"Research", nav_journey:"Journey", nav_contact:"Contact",
    badge:"Open to legal internships",
    sub:"Law student at Alexandria University. I research how social media and cybercrime harm people, and what the law can do about it.",
    cta1:"View my research", cta2:"Contact me",
    chip1:"Legal Research", chip2:"Cybercrime Law", chip3:"Digital Awareness",
    st1:"Independent research paper", st2:"Major conferences attended in 2026", st3:"International ambassadorship", st4:"Expected graduation",
    about_h:"Law, applied to the digital world",
    about_p1:"I study law in the English Section at Alexandria University. My interest sits where legal rules meet online risk: privacy, digital evidence, and cybercrime.",
    about_p2:"I build my cybersecurity knowledge alongside my legal training, and I write legal content in a clear, practical style that non-lawyers can use.",
    i_loc:"Location", i_locv:"Alexandria, Egypt", i_edu:"Education", i_eduv:"Faculty of Law, Alexandria University",
    i_focus:"Focus", i_focusv:"Cybercrime law and digital rights", i_mail:"Email",
    exp_h:"What I work on",
    e1t:"Legal Research", e1d:"Structured, source-based analysis of legal questions, written to be verified and cited.",
    e2t:"Cybercrime and Digital Law", e2d:"How online offences work, how digital evidence is treated, and how people can protect themselves.",
    e3t:"Legal Content", e3d:"Clear, practical explanations of the law for the public, without the jargon.",
    sk1:"Legal research", sk2:"Legal writing", sk3:"Cybercrime law", sk4:"Cybersecurity fundamentals", sk5:"Public communication",
    res_h:"Featured research", res_tag:"Independent legal research", res_title:"Weapon of Awareness",
    res_p:"A legal research paper on the risks of social media and cybercrime, explaining the problem and the legal protections in plain, analytical language.",
    res_btn:"Read the paper", th1:"Social media risks", th2:"Cybercrime and the law", th3:"Digital awareness as protection",
    jr_h:"Education and activity",
    r1w:"Expected 2028", r1t:"Faculty of Law, Alexandria University", r1d:"English Section",
    r2w:"2026–2027", r2t:"Ambassador, International Organization of Youth", r2d:"Youth representation and international engagement",
    r3w:"October 2026", r3t:"Egypt Forum 2026", r3d:"Attended in person",
    r4w:"October 2026", r4t:"Mediterranean Offshore Conference & Exhibition", r4d:"Attended as a student",
    con_h:"Let's work together",
    con_p:"I'm looking for legal internships and research collaboration. Send a message and I'll reply as soon as I can.",
    f_name:"Name", f_mail:"Your email", f_msg:"Message", f_send:"Send message",
    f_err:"Please fill in all fields with a valid email.", f_ok:"Opening your email app to send the message…",
    top:"Back to top",
    roles:["Law Student","Legal Researcher","Cybercrime & Digital Law","Legal Content Writer"],
    marquee:["Legal research","Cybercrime law","Digital evidence","Privacy","Cybersecurity","Legal writing","Digital awareness","Social media risks"],
    title:"Ali Yosry — Law Student & Researcher"
  },
  ar: {
    brand:"علي يسري", name:"علي يسري", hi:"مرحبًا، أنا",
    nav_about:"نبذة", nav_expertise:"الخبرات", nav_research:"الأبحاث", nav_journey:"المسيرة", nav_contact:"تواصل",
    badge:"متاح للتدريب القانوني",
    sub:"طالب حقوق بجامعة الإسكندرية. أبحث في كيف تضر وسائل التواصل الاجتماعي والجرائم الإلكترونية بالناس، وما الذي يستطيع القانون فعله حيال ذلك.",
    cta1:"اطّلع على أبحاثي", cta2:"تواصل معي",
    chip1:"البحث القانوني", chip2:"الجرائم الإلكترونية", chip3:"الوعي الرقمي",
    st1:"بحث قانوني مستقل", st2:"مؤتمرات كبرى حضرتها في 2026", st3:"سفارة دولية", st4:"التخرج المتوقع",
    about_h:"القانون في خدمة العالم الرقمي",
    about_p1:"أدرس القانون بالقسم الإنجليزي بكلية الحقوق جامعة الإسكندرية. يتركز اهتمامي حيث تلتقي القواعد القانونية بالمخاطر الرقمية: الخصوصية، والدليل الرقمي، والجرائم الإلكترونية.",
    about_p2:"أطوّر معرفتي بالأمن السيبراني بالتوازي مع دراستي القانونية، وأكتب محتوى قانونيًا بأسلوب واضح وعملي يستفيد منه غير المتخصصين.",
    i_loc:"الموقع", i_locv:"الإسكندرية، مصر", i_edu:"التعليم", i_eduv:"كلية الحقوق، جامعة الإسكندرية",
    i_focus:"التركيز", i_focusv:"قانون الجرائم الإلكترونية والحقوق الرقمية", i_mail:"البريد الإلكتروني",
    exp_h:"مجالات عملي",
    e1t:"البحث القانوني", e1d:"تحليل منظم قائم على المصادر للمسائل القانونية، مكتوب ليكون قابلًا للتحقق والتوثيق.",
    e2t:"الجرائم الإلكترونية والقانون الرقمي", e2d:"كيف تعمل الجرائم عبر الإنترنت، وكيف يُعامل الدليل الرقمي، وكيف يحمي الناس أنفسهم.",
    e3t:"المحتوى القانوني", e3d:"شرح واضح وعملي للقانون للجمهور، بعيدًا عن التعقيد.",
    sk1:"البحث القانوني", sk2:"الكتابة القانونية", sk3:"قانون الجرائم الإلكترونية", sk4:"أساسيات الأمن السيبراني", sk5:"التواصل مع الجمهور",
    res_h:"بحث مميز", res_tag:"بحث قانوني مستقل", res_title:"سلاح الوعي",
    res_p:"بحث قانوني حول مخاطر وسائل التواصل الاجتماعي والجرائم الإلكترونية، يشرح المشكلة والحماية القانونية المتاحة بلغة تحليلية واضحة.",
    res_btn:"اقرأ البحث", th1:"مخاطر وسائل التواصل الاجتماعي", th2:"الجرائم الإلكترونية والقانون", th3:"الوعي الرقمي كوسيلة حماية",
    jr_h:"التعليم والنشاط",
    r1w:"التخرج المتوقع 2028", r1t:"كلية الحقوق، جامعة الإسكندرية", r1d:"القسم الإنجليزي",
    r2w:"2026–2027", r2t:"سفير المنظمة الدولية للشباب", r2d:"تمثيل الشباب والانخراط الدولي",
    r3w:"أكتوبر 2026", r3t:"منتدى مصر 2026", r3d:"حضور شخصي",
    r4w:"أكتوبر 2026", r4t:"مؤتمر ومعرض البحر المتوسط للنفط والغاز البحري", r4d:"حضور بصفة طالب",
    con_h:"لنعمل معًا",
    con_p:"أبحث عن فرص تدريب قانوني وتعاون بحثي. أرسل رسالتك وسأرد في أقرب وقت.",
    f_name:"الاسم", f_mail:"بريدك الإلكتروني", f_msg:"الرسالة", f_send:"إرسال الرسالة",
    f_err:"من فضلك املأ كل الحقول ببريد إلكتروني صحيح.", f_ok:"جارٍ فتح تطبيق البريد لإرسال الرسالة…",
    top:"العودة للأعلى",
    roles:["طالب حقوق","باحث قانوني","الجرائم الإلكترونية والقانون الرقمي","كاتب محتوى قانوني"],
    marquee:["البحث القانوني","الجرائم الإلكترونية","الدليل الرقمي","الخصوصية","الأمن السيبراني","الكتابة القانونية","الوعي الرقمي","مخاطر وسائل التواصل"],
    title:"علي يسري — طالب حقوق وباحث"
  }
};

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k,v); } catch(e){} }
};

/* ---------- Config links ---------- */
$$("[data-href]").forEach(a => {
  const k = a.dataset.href;
  a.href = k === "email" ? "mailto:" + CONFIG.email : CONFIG[k];
});
$$("[data-email]").forEach(el => { el.textContent = CONFIG.email; });

/* ---------- Photo (falls back to initials if missing) ---------- */
const photo = $("#photo");
photo.addEventListener("error", () => photo.remove());
photo.src = CONFIG.photo;

/* ---------- Theme ---------- */
const root = document.documentElement;
function setTheme(t){
  root.dataset.theme = t;
  $('meta[name="theme-color"]').content = t === "dark" ? "#070B14" : "#F6F8FC";
  store.set("theme", t);
}
setTheme(store.get("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
$("#themeBtn").addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

/* ---------- Language ---------- */
let lang = "en";
let typer = null;

function renderMarquee(items){
  const set = items.map(t => `<span>${t}</span>`).join("");
  $("#track").innerHTML = set + set;   // duplicated for a seamless loop
}

function setLang(l){
  lang = l;
  const d = T[l];
  root.lang = l;
  root.dir = l === "ar" ? "rtl" : "ltr";
  $$("[data-t]").forEach(el => { if (d[el.dataset.t] != null) el.textContent = d[el.dataset.t]; });
  $("#langBtn").textContent = l === "ar" ? "English" : "العربية";
  document.title = d.title;
  renderMarquee(d.marquee);
  startTyping();
  store.set("lang", l);
}
$("#langBtn").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));

/* ---------- Typing effect ---------- */
function startTyping(){
  clearTimeout(typer);
  const el = $("#typed");
  const roles = T[lang].roles;
  if (reduceMotion){ el.textContent = roles[0]; return; }
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

/* ---------- Scroll: progress bar, nav state ---------- */
const nav = $("#nav"), bar = $("#progress");
function onScroll(){
  const h = document.documentElement;
  const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
  bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
  nav.classList.toggle("scrolled", h.scrollTop > 20);
}
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Active nav link ---------- */
const links = $$(".links a");
const secObs = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting){
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => secObs.observe(s));

/* ---------- Mobile menu ---------- */
const burger = $("#burger"), menu = $("#menu");
function toggleMenu(open){
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
}
burger.addEventListener("click", () => toggleMenu(!menu.classList.contains("open")));
links.forEach(a => a.addEventListener("click", () => toggleMenu(false)));

/* ---------- Reveal on scroll ---------- */
const revObs = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); revObs.unobserve(e.target); } });
}, { threshold: .15 });
$$(".reveal").forEach(el => revObs.observe(el));

/* ---------- Count-up numbers ---------- */
const countObs = new IntersectionObserver(es => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count;
    countObs.unobserve(el);
    if (reduceMotion){ el.textContent = end; return; }
    const t0 = performance.now(), dur = 1400;
    (function step(t){
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  });
}, { threshold: .6 });
$$("[data-count]").forEach(el => countObs.observe(el));

/* ---------- Card tilt (mouse only) ---------- */
if (matchMedia("(hover: hover)").matches && !reduceMotion){
  $$(".tilt").forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });

  /* magnetic buttons */
  $$(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${((e.clientX - r.left - r.width/2) * .18).toFixed(1)}px, ${((e.clientY - r.top - r.height/2) * .25).toFixed(1)}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });

  /* hero aurora parallax */
  const blobs = $$(".aurora i");
  addEventListener("pointermove", e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    blobs.forEach((b, i) => { b.style.translate = `${x * (30 + i * 25)}px ${y * (30 + i * 25)}px`; });
  }, { passive: true });
}

/* ---------- Contact form (opens the visitor's email app) ---------- */
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

/* ---------- Init ---------- */
$("#yr").textContent = new Date().getFullYear();
setLang(store.get("lang") === "ar" ? "ar" : "en");
