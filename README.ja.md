# History Prefs Modifier

## これは何？

MCDなどの方法で「プライバシー」パネルの設定の既定値を変更した場合、設定UI上は「Firefoxに：記憶させる設定を詳細設定する」が選択されている事が期待されます。しかしながら、既定の設定が変更されていても設定ダイアログは常に「Firefoxに：履歴を記憶させる」が選択された状態になってしまいます。

このアドオンは、Firefoxの設定ダイアログを常に「Firefoxに：記憶させる設定を詳細設定する」が選択された状態にします。それ以外の事は何もしません。
このアドオンは主に法人利用を想定して開発されています。

## 検証手順

### 問題の確認

 1. 「samples/autoconfig.js」を「（Firefoxのインストール先ディレクトリ）/defaults/pref/autoconfig.js」の位置に置く。
 2. 「samples/autoconfig.cfg」を「（Firefoxのインストール先ディレクトリ）/autoconfig.cfg」の位置に置く。
 3. Firefoxを起動する。
 4. 設定画面を開く。
 5. 「プライバシー」ペインを選択。
 6. 「履歴を記憶させる」が選択されていることを確認する。

### このアドオンの動作確認

 1. このアドオンをインストールする。
 2. 「samples/autoconfig.js」を「（Firefoxのインストール先ディレクトリ）/defaults/pref/autoconfig.js」の位置に置く。
 3. 「samples/autoconfig.cfg」を「（Firefoxのインストール先ディレクトリ）/autoconfig.cfg」の位置に置く。
 4. Firefoxを起動する。
 5. 設定画面を開く。
 6. 「プライバシー」ペインを選択。
 7. 「記憶させる設定を詳細設定する」が選択されていることを確認する。

