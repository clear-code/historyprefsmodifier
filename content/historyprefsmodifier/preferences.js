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
			historyDays.setAttribute('onsynctopreference', <![CDATA[
				var historyDays = document.getElementById('historyDays');
				var value = parseInt(historyDays.defaultValue);
				var maxPref = document.getElementById('browser.history_expire_days');
				var minPref = document.getElementById('browser.history_expire_days_min');
				if (maxPref.defaultValue == minPref.defaultValue ||
					parseInt(maxPref.value) < value) {
					maxPref.value = value;
				}
				return value;
			]]>);
		}, 0);
	}, false);

}, false);
