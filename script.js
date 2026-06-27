/* ==========================================
   Professional Biodata - Custom JS
   ========================================== */

(function () {
  var dob = new Date(2000, 10, 6), now = new Date();
  var age = now.getFullYear() - dob.getFullYear();
  var m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
  document.getElementById('ageValue').textContent = age + ' years';
})();

/* ── Experience ── */
(function () {
  var joined = new Date(2022, 6, 1), now = new Date();
  var ms = now - joined;
  var yr = Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
  var mo = Math.floor((ms % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  document.getElementById('expValue').textContent = yr + ' yr' + (yr !== 1 ? 's' : '') + ' ' + mo + ' mo';
})();

/* ── Back to top ── */
var btn = document.getElementById('backTop');
window.addEventListener('scroll', function () {
  btn.classList.toggle('show', window.scrollY > 280);
}, { passive: true });

/* ── Fade-in on scroll ── */
var fades = document.querySelectorAll('.fade');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  fades.forEach(function (f) { io.observe(f); });
} else {
  fades.forEach(function (f) { f.classList.add('on'); });
}

/* ── Active nav pill ── */
var pills = document.querySelectorAll('.nav-pill');
var secs = document.querySelectorAll('section[id]');
var navIo = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      pills.forEach(function (p) { p.classList.remove('active'); });
      var a = document.querySelector('.nav-pill[href="#' + e.target.id + '"]');
      if (a) a.classList.add('active');
    }
  });
}, { threshold: 0.35 });
secs.forEach(function (s) { navIo.observe(s); });