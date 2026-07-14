(function () {
  'use strict';

  // 読み込みに失敗した画像は非表示にする
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () { img.style.display = 'none'; });
    if (img.complete && img.naturalWidth === 0) { img.style.display = 'none'; }
  });

  var supportsIO = 'IntersectionObserver' in window;

  // スクロール連動フェードイン
  var fadeTargets = document.querySelectorAll('.fade-in');
  if (supportsIO && fadeTargets.length) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeTargets.forEach(function (el) { fadeObserver.observe(el); });
  } else {
    fadeTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // FVが画面外に出たら追従CTAバーを表示
  var sticky = document.getElementById('stickybar');
  var fv = document.getElementById('fv');
  if (sticky) {
    if (supportsIO && fv) {
      new IntersectionObserver(function (entries) {
        sticky.classList.toggle('is-visible', !entries[0].isIntersecting);
      }, { threshold: 0.1 }).observe(fv);
    } else {
      sticky.classList.add('is-visible');
    }
  }
})();
