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

## React Router DOMのインストール

React Router DOMをインストールします。以下のコマンドを実行してください：

```bash
npm install react-router-dom@6.15.0
```

または、yarnを使用している場合：

```bash
yarn add react-router-dom
```

## Material UIのインストール

Material UI をインストールします。以下のコマンドを実行してください：

```bash
npm install @mui/material @emotion/react @emotion/styled
```

または、yarnを使用している場合：

```bash
yarn add @mui/material @emotion/react @emotion/styled
```








# 今後必要になってくる対応

```
Third-party cookie will be blocked in future Chrome versions as part of Privacy Sandbox.
```

サードパーティクッキーが使えなくなるので、主にファーストパーティデータの活用とPrivacy Sandboxの新技術に適応するためのステップを紹介します。

### 1. サードパーティクッキーの使用状況を把握する

まず、現在のウェブサイトで使用しているサードパーティクッキーの状況を把握します。例えば、Google Analyticsを使っている場合、クッキーの設定を確認します。

### 2. ファーストパーティデータの活用

ユーザーのデータを直接収集して活用する方法です。

#### ユーザー登録フォームの実装

ユーザー登録フォームを作成し、ユーザーから直接データを収集します。

```jsx
// UserRegistrationForm.js
import React, { useState } from 'react';

const UserRegistrationForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // ここでフォームデータを送信します
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名前:
        <input type="text" name="name" value={form.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        メール:
        <input type="email" name="email" value={form.email} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">登録</button>
    </form>
  );
};

export default UserRegistrationForm;
```

#### クッキーレスのユーザートラッキング

例えば、ローカルストレージを使って簡単なユーザートラッキングを実装します。

```javascript
// ユーザーの訪問回数をトラッキングするスクリプト
function trackUser() {
  const visits = localStorage.getItem('visits') || 0;
  localStorage.setItem('visits', parseInt(visits) + 1);
  console.log(`ユーザーの訪問回数: ${localStorage.getItem('visits')}`);
}

// ページが読み込まれるたびにトラッキングする
window.onload = trackUser;
```

### 3. Privacy Sandboxの新しい技術に対応する

#### FLoC (Federated Learning of Cohorts)

FLoCはまだ実験段階であり、具体的な実装はブラウザによって行われます。ウェブサイト側で特別な実装は不要ですが、以下のHTTPヘッダーを使ってFLoCのオプトアウトを設定することができます。

```plaintext
Permissions-Policy: interest-cohort=()
```

#### サーバーサイドトラッキングの導入

Google Analyticsのサーバーサイドトラッキングを使うことができます。これにより、クライアントサイドでのクッキー使用を避けることができます。

### 4. クッキーレスソリューションの導入

ユーザーセッション管理にセッションストレージやローカルストレージを活用します。

```javascript
// ログインセッションを管理するスクリプト
function saveSession(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
}

function getSession() {
  return JSON.parse(sessionStorage.getItem('user'));
}

// 例: ユーザーがログインした場合
const user = { id: 1, name: 'John Doe' };
saveSession(user);

// 例: ユーザーセッションを取得
console.log(getSession());
```

### まとめ

これらの実装方法を参考にして、サードパーティクッキーが使えなくなる未来に備えた具体的な対応策を講じることができます。以下に簡単なステップをまとめます。

1. **ユーザー登録フォーム**を作成し、ユーザーデータを直接収集する。
2. **ローカルストレージやセッションストレージ**を使って、ユーザーデータを管理し、トラッキングする。
3. **Privacy Sandboxの新技術**に対応するために、必要に応じてHTTPヘッダーを設定する。

これにより、ユーザーのプライバシーを保護しながら効果的なデータ収集と広告ターゲティングが可能になります。