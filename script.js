:root{
  --bg: #f6f8fb;
  --surface: #ffffff;
  --text: #0b2d4d;
  --muted: #5f6b7a;
  --primary: #14406b;
  --primary-600:#0f3456;
  --accent: #0fa3b1;
  --accent-700:#0c8591;
  --ring: rgba(15,163,177,0.35);
  --radius: 14px;
  --shadow: 0 10px 24px rgba(10, 27, 45, 0.08);
}

*{ box-sizing: border-box; }
html, body{ height:100%; }
body{
  margin:0;
  font-family:"Nunito", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color:var(--text);
  background:
    radial-gradient(1200px 600px at 10% -10%, #eaf3ff 0%, transparent 60%),
    radial-gradient(900px 500px at 110% 10%, #e6fbff 0%, transparent 55%),
    var(--bg);
  line-height:1.6;
}

.wrap{ max-width:980px; margin:0 auto; padding:0 1rem; }

.site-header{
  background: linear-gradient(180deg, var(--primary), var(--primary-600));
  color:#fff; padding:1rem 0; box-shadow:0 6px 18px rgba(0,0,0,.08);
}
.site-header .wrap{ display:flex; align-items:center; justify-content:space-between; gap:1rem; }
.brand{ margin:0; font-size:clamp(1.25rem,2.2vw,1.6rem); letter-spacing:.3px; }
.nav{ display:flex; gap:.6rem; flex-wrap:wrap; }
.nav-link{ color:#e8f3ff; text-decoration:none; padding:.4rem .7rem; border-radius:999px; }
.nav-link:hover{ background:rgba(255,255,255,.12); }

.hero{ text-align:center; padding:clamp(1.25rem,3.5vw,2.2rem) 0 .5rem; }
.muted{ color:var(--muted); }

.card{
  background:var(--surface);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  padding:clamp(1rem, 3vw, 1.3rem);
  margin: 1rem auto 1.2rem;
  max-width: 800px;
}

.puzzle summary{
  display:flex; align-items:center; justify-content:space-between; gap:.75rem;
  list-style:none; cursor:pointer; user-select:none; font-weight:800;
}
.puzzle summary::-webkit-details-marker{ display:none; }
.puzzle .title{ font-size:1.05rem; }
.puzzle[open] summary .title{ color:var(--primary); }

.content{ margin-top:.6rem; }
.content h4{ margin:.6rem 0 .3rem; }
.content code{ background:#eef6fa; padding:.05rem .35rem; border-radius:6px; }

.note{
  margin-top:.6rem; border:1px dashed #cfd9e5; border-radius:10px;
  padding:.6rem .8rem; background: #fbfdff;
}
.note > summary{ font-weight:700; cursor:pointer; }

.link-btn{
  font:inherit; border:1px solid #cdd6e2; background:#f0f5fb; color:var(--text);
  padding:.45rem .6rem; border-radius:10px; cursor:pointer;
}
.link-btn:hover{ transform: translateY(-1px); }

.site-footer{
  padding:2rem 0; color:var(--muted); border-top:1px solid #e9eef4; margin-top:2rem;
}

@media (max-width:540px){
  .nav{ display:none; }
}
