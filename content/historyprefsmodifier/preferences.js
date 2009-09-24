window.addEventListener('DOMContentLoaded', function() {
	window.removeEventListener('DOMContentLoaded', arguments.callee, false);

	window.addEventListener('paneload', function() {
		if (!('gPrivacyPane' in window)) return;

		var menulist = document.getElementById('historyMode');
		menulist.value = 'custom';

		var historyDays = document.getElementById('historyDays');
		historyDays.setAttribute('onsynctopreference', <![CDATA[
			var historyDays = document.getElementById('historyDays');
			var value = parseInt(maxPref.defaultValue);
			var maxPref = document.getElementById('browser.history_expire_days');
			var minPref = document.getElementById('browser.history_expire_days_min');
			if (maxPref.defaultValue == minPref.defaultValue ||
				parseInt(maxPref.value) < value) {
				maxPref.value = value;
			}
			return value;
		]]>);

		window.removeEventListener('paneload', arguments.callee, false);
	}, false);

}, false);
