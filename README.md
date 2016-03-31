# History Prefs Modifier

**Important note**: This was completely obsolete by a bug [1203531 – Use custom settings for history should not be based on querying prefs](https://bugzilla.mozilla.org/show_bug.cgi?id=1203531) already fixed on Firefox 44. You don't need to use this on Firefox 44 and later.

## What's this?

If you change some default preferences in the "Privacy" pane via MCD or etc., then you'll expect that the "Firefox will:" list box become "Use custom settings for history". However, Firefox always set the list box to "Remember history" even if some history preferences are turned off.

This addon forces Firefox to set the list box to "Use custom settings for history". That's all.
This is mainly designed for corporate-use.

## How to test

### Confirmation of the issue itself

 1. Put "samples/autoconfig.js" at "(path to the installation directory of Firefox)/defaults/pref/autoconfig.js".
 2. Put "samples/autoconfig.cfg" at "(path to the installation directory of Firefox)/autoconfig.cfg".
 3. Start Firefox.
 4. Go to preferences.
 5. Go to the "privacy" pane.
 6. Then you'll see that the item "Remember history" is chosen.

### Confirmation that this addon works

 1. Install this addon.
 2. Put "samples/autoconfig.js" at "(path to the installation directory of Firefox)/defaults/pref/autoconfig.js".
 3. Put "samples/autoconfig.cfg" at "(path to the installation directory of Firefox)/autoconfig.cfg".
 4. Start Firefox.
 5. Go to preferences.
 6. Go to the "privacy" pane.
 7. Then you'll see that the item "Use custom settings for history" is chosen.

