## 概要

<img src="https://i.imgur.com/Rg79DD6.png" width="20%" />
Discord Chrome Presence を使用すると、Discord RPの表示をChromeで見ているものに設定できます。<br>
サイトの情報に依存するため、Chrome拡張機能が含まれています。

## インストール及び実行に必要な条件

* [Discordクライアント](https://discordapp.com/)
* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/ja/)
* [Google Chrome](http://google.com/chrome) または [Chromium](https://www.chromium.org/getting-involved/download-chromium)

## インストール

コマンドは次のとおりです。
```
git clone https://github.com/ryuuta0217/discord-chrome-presence.git
cd discord-chrome-presence
npm install
npm start
```
次に、Chromeの拡張機能のページから拡張機能をインストールします。<br>
**chrome://extensions** を開き、**デベロッパーモードを有効に**した上で、**パッケージ化されていない拡張機能を読み込む**から
クローンされたフォルダーにある **extension フォルダーを指定してください。**

## 使い方
extension ディレクトリのChrome拡張機能のインストールが完了したら、次のコマンドを使用してDiscord RPを表示するためのサーバーを起動します。
```
npm start
```
Discordを開いてChrome拡張機能をインストールする必要があります(インストール の項を参照)

## ライセンス

[Unlicense](http://unlicense.org/)
