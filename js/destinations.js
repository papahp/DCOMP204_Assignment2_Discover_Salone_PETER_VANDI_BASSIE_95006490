/* Discover Salone - destination filters and sorting
   Works on destinations.html. Every card carries data attributes:
   data-region, data-activities, data-low, data-high, data-name */

(function () {
  'use strict';

  var form = document.getElementById('filter-form');
  if (!form) { return; }

  var list = document.getElementById('results');
  var cards = Array.prototype.slice.call(list.querySelectorAll('.card'));
  var count = document.getElementById('result-count');
  var empty = document.getElementById('no-results');
  var sort = document.getElementById('sort');
  var budget = document.getElementById('budget');

  function checked(name) {
    return Array.prototype.map.call(
      form.querySelectorAll('input[name="' + name + '"]:checked'),
      function (box) { return box.value.toLowerCase(); }
    );
  }

  /* A card matches a budget band when the band overlaps its sample price range. */
  function fitsBudget(card, band) {
    var low = Number(card.dataset.low);
    var high = Number(card.dataset.high);
    if (band === 'under') { return low < 200; }
    if (band === 'mid') { return low <= 500 && high >= 200; }
    if (band === 'over') { return high > 500; }
    return true;
  }

  function apply() {
    var regions = checked('region');
    var activities = checked('activity');
    var band = budget.value;
    var shown = 0;

    cards.forEach(function (card) {
      var cardActs = card.dataset.activities.split(' ');
      var okRegion = regions.length === 0 || regions.indexOf(card.dataset.region.toLowerCase()) !== -1;
      var okActivity = activities.length === 0 || activities.some(function (a) { return cardActs.indexOf(a) !== -1; });
      var visible = okRegion && okActivity && fitsBudget(card, band);
      card.hidden = !visible;
      if (visible) { shown += 1; }
    });

    count.textContent = shown + (shown === 1 ? ' destination' : ' destinations');
    empty.hidden = shown !== 0;
  }

  function reorder() {
    var mode = sort.value;
    cards.sort(function (a, b) {
      if (mode === 'low') { return a.dataset.low - b.dataset.low; }
      if (mode === 'high') { return b.dataset.high - a.dataset.high; }
      return a.dataset.name.localeCompare(b.dataset.name);
    });
    cards.forEach(function (card) { list.appendChild(card); });
  }

  /* Read starting values from the address, e.g. ?region=Southern&activity=Wildlife&budget=over */
  var params = new URLSearchParams(window.location.search);
  ['region', 'activity'].forEach(function (name) {
    var wanted = params.get(name);
    if (!wanted) { return; }
    form.querySelectorAll('input[name="' + name + '"]').forEach(function (box) {
      if (box.value.toLowerCase() === wanted.toLowerCase()) { box.checked = true; }
    });
  });
  if (params.get('budget')) { budget.value = params.get('budget'); }

  form.addEventListener('change', apply);
  form.addEventListener('submit', function (event) { event.preventDefault(); apply(); });
  form.addEventListener('reset', function () { setTimeout(apply, 0); });
  sort.addEventListener('change', function () { reorder(); });

  reorder();
  apply();
})();
