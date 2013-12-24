window.addEventListener('DOMContentLoaded', function() {
	window.removeEventListener('DOMContentLoaded', arguments.callee, false);

	window.addEventListener('paneload', function() {
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
					"	parseInt(maxPref.value) < value) {",
					"	maxPref.value = value;",
					"}"
				].join('\n'));
		}, 0);
	}, false);

}, false);
