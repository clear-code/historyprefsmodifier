/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
const ID = 'historyprefsmodifier@clear-code.com';

const Cc = Components.classes;
const Ci = Components.interfaces;
Components.utils.import('resource://gre/modules/XPCOMUtils.jsm');

const kCID  = Components.ID('{67e5b750-fd26-11e4-b939-0800200c9a66}');
const kID   = '@clear-code.com/historyprefsmodifier/startup;1';
const kNAME = 'HistoryPrefsModifierStartupService';

var { historyPrefsModifierUpdateUI } = Components.utils.import('resource://historyprefsmodifier-modules/updateUI.js', {});

var targets = [
  'about:preferences',
  'chrome://browser/content/preferences/in-content/preferences.xul'
];

const ObserverService = Cc['@mozilla.org/observer-service;1']
                          .getService(Ci.nsIObserverService);

function HistoryPrefsModifierStartupService() {
}
HistoryPrefsModifierStartupService.prototype = {
  observe : function(aSubject, aTopic, aData) {
    switch (aTopic)
    {
      case 'profile-after-change':
        this.targetPattern = new RegExp('^(' + targets.join('|') + ')');
        ObserverService.addObserver(this, 'chrome-document-global-created', false);
        ObserverService.addObserver(this, 'quit-application-granted', false);
        return;

      case 'chrome-document-global-created':
        this.onChromeLoaded(aSubject.QueryInterface(Ci.nsIDOMWindow));
        return;

      case 'quit-application-granted':
        ObserverService.removeObserver(this, 'chrome-document-global-created');
        ObserverService.removeObserver(this, 'quit-application-granted');
        return;
    }
  },

  onChromeLoaded : function(aWindow) {
    if (this.targetPattern.test(aWindow.location.href))
      return;

    aWindow.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
      aWindow.removeEventListener('DOMContentLoaded', onDOMContentLoaded, false);
      var originalInit = aWindow.gPrivacyPane.init;
      aWindow.gPrivacyPane.init = function(...aArgs) {
        originalInit.apply(this, aArgs);
		historyPrefsModifierUpdateUI(aWindow);
      };
	}, false);
  },

  classID : kCID,
  contractID : kID,
  classDescription : kNAME,
  QueryInterface : XPCOMUtils.generateQI([Ci.nsIObserver]),
  _xpcom_categories : [
    { category : 'profile-after-change', service : true }
  ]

};

var NSGetFactory = XPCOMUtils.generateNSGetFactory([HistoryPrefsModifierStartupService]);
