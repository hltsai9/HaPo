(function () {
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var buttons = group.querySelectorAll('.tab-btn');
    var panels = group.querySelectorAll('.tab-panel');

    function activate(name) {
      buttons.forEach(function (b) {
        b.classList.toggle('active', b.dataset.tab === name);
        b.setAttribute('aria-selected', b.dataset.tab === name ? 'true' : 'false');
      });
      panels.forEach(function (p) {
        p.classList.toggle('active', p.dataset.panel === name);
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () { activate(btn.dataset.tab); });
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          activate(btn.dataset.tab);
        }
      });
    });

    if (window.location.hash) {
      var target = window.location.hash.slice(1);
      if (Array.from(buttons).some(function (b) { return b.dataset.tab === target; })) {
        activate(target);
      }
    }
  });
})();
