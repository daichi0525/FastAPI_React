# FastAPI_React

## 前提【準備】必要な環境について

1. ソフトウェアのインストール（既にインストール済みの方はスキップください。）  
   ① ブラウザ（chome お勧めです。）https://www.google.com/intl/ja/chrome/  
   ② コードエディタ（Visual Studio Code がお勧めです。）https://code.visualstudio.com/  
   ③JavaScript の実行環境 （＝ Node.js）https://nodejs.org/en
   ④Python の実行環境（＝ miniconda がお勧めです。）https://docs.conda.io/projects/miniconda/en/latest/

## 【準備】実行環境について

※この講座内ではゼロから作成しておりますので、以下を実行していない状態でもご受講頂けます。  
（まず、プログラムの挙動を確認したい方向け）

①React のソースコードを実行できる状態に持っていく方法（Node.js インストール後）  
　 →package.json があるフォルダに入った状態で、npm -install  
　 package.json に記載の環境や機能の実体である node_modules 及び package-lock.json が生成されます。  
②Python のソースコードを実行できる状態に持っていく方法（miciconda インストール後）  
　 requirements.txt があるフォルダに入った状態で、pip install -r requirements.txt  
　 →requirements.txt に記載の各ライブラリがインストールされます。

## 【準備】Visual Studio code 関連

1. Python 実行時のデフォルトのターミナルをコマンドプロンプトへ変更する方法  
   「表示」→「コマンドパレット」→「Terminal:Select Default Profile」→「Command Prompt」
1. お勧め拡張機能  
   Prettier（Javascript など向けフォーマッター）  
    ※その際 `Editor: Format On Save` が必ずオンになっていること！
   black（Python 向けフォーマッター）  
   SQLite Viewer（sqlite 閲覧用ツール）

## React 開発環境を整える(create-react-app)

1. バージョン確認
   1. `node -v`
2. プロジェクト作成
   1. `npx create-react-app@5.0.1 section1-react`
3. うまくいかない時
   1. **やり方 1：** キャッシュクリアとディレクトリ権限修正し、npm で再試行
   ```bash
   npm cache clean --force
   sudo chown -R $(whoami) ~/.npm
   npx create-react-app@5.0.1 section1-react
   ```
   1. **やり方 2：** または yarn で実行**⇦⭐️ おすすめ**
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

## React Router DOM のインストール

React Router DOM をインストールします。以下のコマンドを実行してください：

```bash
npm install react-router-dom@6.15.0
```

または、yarn を使用している場合：

```bash
yarn add react-router-dom
```

## Material UI のインストール

[引用先](https://mui.com/material-ui/getting-started/installation/)

### Material UI デフォルトのインストールをします。

以下のコマンドを実行してください：

```bash
npm install @mui/material @emotion/react @emotion/styled
```

または、yarn を使用している場合：

```bash
yarn add @mui/material @emotion/react @emotion/styled
```

### Material UI アイコンのインストールをします。

以下のコマンドを実行してください：

```bash
npm install @mui/icons-material
```

または、yarn を使用している場合：

```bash
yarn add @mui/icons-material
```

## start yarn 時にエラーが出たので対応

1. **babel-preset-react-app の警告の修正**:
   `@babel/plugin-proposal-private-property-in-object`を`devDependencies`に追加することで警告を解消します。

2. package.json の修正

```json
{
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.14.5"
  }
}
```

3. 依存関係のインストール

`package.json`を修正した後、以下のコマンドを実行して依存関係をインストールします。

```bash
npm install
```

または yarn を使用している場合：

```bash
yarn add @babel/plugin-proposal-private-property-in-object --dev
```

# 今後必要になってくる対応

## 2024/7/22~サードパーティー対応

```
Third-party cookie will be blocked in future Chrome versions as part of Privacy Sandbox.
```

サードパーティクッキーが使えなくなるので、主にファーストパーティデータの活用と Privacy Sandbox の新技術に適応するためのステップを紹介します。

### 1. サードパーティクッキーの使用状況を把握する

まず、現在のウェブサイトで使用しているサードパーティクッキーの状況を把握します。例えば、Google Analytics を使っている場合、クッキーの設定を確認します。

### 2. ファーストパーティデータの活用

ユーザーのデータを直接収集して活用する方法です。

#### ユーザー登録フォームの実装

ユーザー登録フォームを作成し、ユーザーから直接データを収集します。

```jsx
// UserRegistrationForm.js
import React, { useState } from "react";

const UserRegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        メール:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
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
  const visits = localStorage.getItem("visits") || 0;
  localStorage.setItem("visits", parseInt(visits) + 1);
  console.log(`ユーザーの訪問回数: ${localStorage.getItem("visits")}`);
}

// ページが読み込まれるたびにトラッキングする
window.onload = trackUser;
```

### 3. Privacy Sandbox の新しい技術に対応する

#### FLoC (Federated Learning of Cohorts)

FLoC はまだ実験段階であり、具体的な実装はブラウザによって行われます。ウェブサイト側で特別な実装は不要ですが、以下の HTTP ヘッダーを使って FLoC のオプトアウトを設定することができます。

```plaintext
Permissions-Policy: interest-cohort=()
```

#### サーバーサイドトラッキングの導入

Google Analytics のサーバーサイドトラッキングを使うことができます。これにより、クライアントサイドでのクッキー使用を避けることができます。

### 4. クッキーレスソリューションの導入

ユーザーセッション管理にセッションストレージやローカルストレージを活用します。

```javascript
// ログインセッションを管理するスクリプト
function saveSession(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
}

function getSession() {
  return JSON.parse(sessionStorage.getItem("user"));
}

// 例: ユーザーがログインした場合
const user = { id: 1, name: "John Doe" };
saveSession(user);

// 例: ユーザーセッションを取得
console.log(getSession());
```

### まとめ

これらの実装方法を参考にして、サードパーティクッキーが使えなくなる未来に備えた具体的な対応策を講じることができます。以下に簡単なステップをまとめます。

1. **ユーザー登録フォーム**を作成し、ユーザーデータを直接収集する。
2. **ローカルストレージやセッションストレージ**を使って、ユーザーデータを管理し、トラッキングする。
3. **Privacy Sandbox の新技術**に対応するために、必要に応じて HTTP ヘッダーを設定する。

これにより、ユーザーのプライバシーを保護しながら効果的なデータ収集と広告ターゲティングが可能になります。













# Excelのイナズマ線

Excelマクロを使って、指定されたWBSデータに基づいてイナズマ線を描くコードは以下のようになります。ここでは、プロジェクト開始日と今日の日付を基準に、計画開始日、計画終了日、実績開始日、実績終了日を使用して、H列からBZ列までの日付セルに対してイナズマ線を描画します。

```vba
Sub DrawLightningLine()
    Dim ws As Worksheet
    Dim startDate As Date
    Dim todayDate As Date
    Dim planStart As Date
    Dim planEnd As Date
    Dim actualStart As Date
    Dim actualEnd As Date
    Dim progressRate As Double
    Dim i As Integer
    Dim j As Integer
    Dim x1 As Single, y1 As Single, x2 As Single, y2 As Single
    Dim shape As Shape
    Dim lineCoords As Variant
    Dim shapeName As String
    
    Set ws = ThisWorkbook.Sheets("Sheet1") ' シート名を適宜変更してください
    
    ' プロジェクト開始日と今日の日付を取得
    startDate = ws.Range("A1").Value
    todayDate = ws.Range("A2").Value
    
    ' 日付の範囲
    Dim dateRange As Range
    Set dateRange = ws.Range("H10:BZ10")
    
    ' 既存のイナズマ線を削除
    For Each shape In ws.Shapes
        If shape.Name Like "LightningLine*" Then shape.Delete
    Next shape
    
    ' 各行のデータに基づいてイナズマ線を描く
    For i = 11 To 50
        planStart = ws.Cells(i, 1).Value
        planEnd = ws.Cells(i, 3).Value
        actualStart = ws.Cells(i, 4).Value
        actualEnd = ws.Cells(i, 6).Value
        progressRate = ws.Cells(i, 7).Value ' 進捗率
        
        ' イナズマ線の座標を計算
        x1 = GetXCoordinate(ws, startDate, planStart, todayDate)
        y1 = ws.Cells(i, 8).Top + ws.Cells(i, 8).Height / 2
        
        x2 = GetXCoordinate(ws, startDate, actualEnd, todayDate)
        y2 = ws.Cells(i, 78).Top + ws.Cells(i, 78).Height / 2
        
        ' イナズマ線を描く
        shapeName = "LightningLine" & i
        Set shape = ws.Shapes.AddLine(x1, y1, x2, y2)
        shape.Name = shapeName
        shape.Line.ForeColor.RGB = RGB(255, 0, 0) ' 赤色
        shape.Line.Weight = 2
    Next i
End Sub

Function GetXCoordinate(ws As Worksheet, startDate As Date, targetDate As Date, todayDate As Date) As Single
    Dim dateRange As Range
    Dim col As Integer
    Dim x As Single
    
    Set dateRange = ws.Range("H10:BZ10")
    
    For col = 8 To 78 ' H列は8、BZ列は78
        If dateRange.Cells(1, col - 7).Value = targetDate Then
            x = dateRange.Cells(1, col - 7).Left + dateRange.Cells(1, col - 7).Width / 2
            Exit For
        End If
    Next col
    
    If targetDate = todayDate Then
        x = dateRange.Cells(1, col - 7).Left + dateRange.Cells(1, col - 7).Width / 2
    End If
    
    GetXCoordinate = x
End Function
```

このマクロでは、次のように各ステップを行っています：
1. プロジェクト開始日と今日の日付を取得。
2. 各タスクの計画開始日、計画終了日、実績開始日、実績終了日を取得。
3. 計画期間と実績期間に応じてH列からBZ列までのセルの背景色を変更。
4. 進捗率に基づいて計画と実績の中間点を計算し、その間にイナズマ線を描画。

このマクロを実行することで、WBSの内容に基づいてイナズマ線が描画されます。必要に応じてセルの範囲やシート名を変更してください。
