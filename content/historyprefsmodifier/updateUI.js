/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
function historyPrefsModifierUpdateUI() {
  var menulist = document.getElementById('historyMode');
  if (!menulist) return;

  window.removeEventListener('paneload', arguments.callee, false);

  window.setTimeout(function() {
    menulist.value = 'custom';
    gPrivacyPane.updateHistoryModePane();
    gPrivacyPane.updatePrivacyMicroControls();

    var historyDays = document.getElementById('historyDays');
    if (historyDays) // for too old Firefox
      historyDays.setAttribute('onsynctopreference', [
        "var historyDays = document.getElementById('historyDays');",
        "var value = parseInt(historyDays.value);",
        "var maxPref = document.getElementById('browser.history_expire_days');",
        "var minPref = document.getElementById('browser.history_expire_days_min');",
        "if (maxPref.defaultValue == minPref.defaultValue ||",
        "  parseInt(maxPref.value) < value) {",
        "  maxPref.value = value;",
        "}"
      ].join('\n'));
  }, 0);
}
