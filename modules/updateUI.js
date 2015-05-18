/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
var EXPORTED_SYMBOLS = ['historyPrefsModifierUpdateUI'];

function historyPrefsModifierUpdateUI(aWindow) {
  var menulist = aWindow.document.getElementById('historyMode');
  if (!menulist) return;

  aWindow.removeEventListener('paneload', arguments.callee, false);

  aWindow.setTimeout(function() {
    menulist.value = 'custom';
    aWindow.gPrivacyPane.updateHistoryModePane();
    aWindow.gPrivacyPane.updatePrivacyMicroControls();

    var historyDays = aWindow.document.getElementById('historyDays');
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
