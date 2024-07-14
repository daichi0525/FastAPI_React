# FastAPI_React

## 前提【準備】必要な環境について
1. ソフトウェアのインストール（既にインストール済みの方はスキップください。）
① ブラウザ（chomeお勧めです。）https://www.google.com/intl/ja/chrome/
②コードエディタ（Visual Studio Codeがお勧めです。）https://code.visualstudio.com/
③JavaScriptの実行環境 （＝Node.js）https://nodejs.org/en
④Pythonの実行環境（＝minicondaがお勧めです。）https://docs.conda.io/projects/miniconda/en/latest/

## 【準備】実行環境について
※この講座内ではゼロから作成しておりますので、以下を実行していない状態でもご受講頂けます。
（まず、プログラムの挙動を確認したい方向け）

①Reactのソースコードを実行できる状態に持っていく方法（Node.jsインストール後）
　→package.jsonがあるフォルダに入った状態で、npm -install
　package.jsonに記載の環境や機能の実体であるnode_modules及びpackage-lock.jsonが生成されます。
②Pythonのソースコードを実行できる状態に持っていく方法（micicondaインストール後）
　requirements.txtがあるフォルダに入った状態で、pip install -r requirements.txt
　→requirements.txtに記載の各ライブラリがインストールされます。

## 【準備】Visual Studio code関連
1. Python実行時のデフォルトのターミナルをコマンドプロンプトへ変更する方法
「表示」→「コマンドパレット」→「Terminal:Select Default Profile」→「Command Prompt」
1. お勧め拡張機能
Prettier（Javascriptなど向けフォーマッター）
black（Python向けフォーマッター）
SQLite Viewer（sqlite閲覧用ツール）

## React開発環境を整える(create-react-app)
1. バージョン確認
   1. `node -v`
2. プロジェクト作成
   1. `npx create-react-app@5.0.1 section1-react`
3. うまくいかない時
   1. **やり方1：** キャッシュクリアとディレクトリ権限修正し、npmで再試行
	```bash
	npm cache clean --force
	sudo chown -R $(whoami) ~/.npm
	npx create-react-app@5.0.1 section1-react
	```
	1. **やり方2：** またはyarnで実行**⇦⭐️おすすめ**
	```bash
	npm install -g yarn
	yarn create react-app section1-react
	```
4. コマンド一覧
	```shell
	# Inside that directory, you can run several commands:

	yarn start
		# Starts the development server.

	yarn build
		# Bundles the app into static files for production.

	yarn test
		# Starts the test runner.

	yarn eject
		# Removes this tool and copies build dependencies, configuration files
		# and scripts into the app directory. If you do this, you can’t go back!

	# We suggest that you begin by typing:

	# 以下を実行してみましょう！
	cd section1-react
	yarn start
	```