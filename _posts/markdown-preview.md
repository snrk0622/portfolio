---
title: "ZennのMarkdown記法一覧"
date: "2024-01-05T00:00:00.000Z"
category: "blog"
tags:
  - 'JavaScript'
  - 'TypeScript'
  - 'React'
  - 'Next.js'
  - 'tailwindcss'
---

## はじめに
このブログは下記ライブラリを利用してZennのmarkdownを導入しています。

https://zenn-dev.github.io/zenn-docs-for-developers/guides/zenn-editor/zenn-markdown-html
https://zenn-dev.github.io/zenn-docs-for-developers/guides/zenn-editor/zenn-content-css
https://zenn-dev.github.io/zenn-docs-for-developers/guides/zenn-editor/zenn-embed-elements

Next.jsでのブログ構築手順は後日記事にしようと思います。

また、この記事はZenn公式の「ZennのMarkdown記法一覧」と表示を比較することを目的としています。
https://zenn.dev/zenn/articles/markdown-guide

一部利用する予定がない記法は割愛してますが、基本的にはサポートできていると思います。
ぜひ比較してみてください！！！

-----

## 見出し
```
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6
```

## リスト
```
- Hello!
- Hola!
  - Bonjour!
  * Hi!
```
- Hello!
- Hola!
  - Bonjour!
  * Hi!

## 番号付きリスト
```
1. First
2. Second
```
1. First
2. Second

## テキストリンク
```
[アンカーテキスト](リンクのURL)
```
[アンカーテキスト](リンクのURL)

## 画像
```
![](https://画像のURL)
```
![](https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

#### 画像の横幅を指定する
```
![](https://画像のURL =250x)
```
![](https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D =250x)

#### Altテキストを指定する
```
![Altテキスト](https://画像のURL)
```
![Altテキスト](https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D =250x)

#### キャプションをつける
```
![](https://画像のURL)
*キャプション*
```
![](https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D =250x)
*キャプション*

#### 画像にリンクを貼る
```
[![](画像のURL)](リンクのURL)
```
[![](画像のURL)](リンクのURL)

## テーブル
```
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |
```
| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

## コードブロック
「```言語」で挟むことでブロックとして挿入できます
```js
const great = () => {
  console.log("Awesome");
};
```

#### ファイル名を表示する
「```言語:ファイル名」と「:」区切りで記載することで、ファイル名がコードブロックの上部に表示されます
```js:fooBar.js
const great = () => {
  console.log("Awesome")
}
```

#### diff のシンタックスハイライト
「diff 言語:ファイル名」と半角スペース区切りで記載することで、ハイライトが適用されます
```diff js:fooBar.js
@@ -4,6 +4,5 @@
+    const foo = bar.baz([1, 2, 3]) + 1;
-    let foo = bar.baz([1, 2, 3]);
```

## 数式
zennでは**KaTeX**による数式表示に対応していますが
このブログでは対応できていません・・・

## 引用
```
> 引用文
> 引用文
```
> 引用文
> 引用文

## 脚注
脚注を指定するとページ下部にその内容が表示されます。
```
脚注の例[^1]です。インライン^[脚注の内容その2]で書くこともできます。

[^1]: 脚注の内容その1
```
脚注の例[^1]です。インライン^[脚注の内容その2]で書くこともできます。

[^1]: 脚注の内容その1

## 区切り線
```
-----
```
-----

## インラインスタイル
```
*イタリック*
**太字**
~~打ち消し線~~
インラインで`code`を挿入する
```
*イタリック*
**太字**
~~打ち消し線~~
インラインで`code`を挿入する

#### インラインのコメント
自分用のメモをしたいときは HTML のコメント記法を使用できます。
```
<!-- TODO: ◯◯について追記する -->
```
この形式で書いたコメントは公開されたページ上では表示されません。ただし、複数行のコメントには対応していないのでご注意ください。

## Zenn 独自の記法
#### メッセージ
```
:::message
メッセージをここに
:::
```
:::message
メッセージをここに
:::

```
:::message alert
警告メッセージをここに
:::
```
:::message alert
警告メッセージをここに
:::

#### アコーディオン（トグル）
```
:::details タイトル
表示したい内容
:::
```
:::details タイトル
表示したい内容
:::

#### 要素をネストさせるには
外側の要素の開始/終了に : を追加します。
```
::::details タイトル
:::message
ネストされた要素
:::
::::
```
::::details タイトル
:::message
ネストされた要素
:::
::::

## コンテンツの埋め込み
#### リンクカード
```
# URLだけの行
https://zenn.dev/zenn/articles/markdown-guide
```
URL だけが貼り付けられた行があると、その部分がカードとして表示されます。
https://zenn.dev/zenn/articles/markdown-guide

#### X（Twitter）のポスト（ツイート）
```
# ポストのURLだけの行（前後に改行が必要です）
https://twitter.com/jack/status/20

# x.comドメインの場合
https://x.com/jack/status/20
```

#### リプライ元のポストを非表示にする
リプライを埋め込んだ場合、デフォルトでリプライ元のポスト含まれて表示されます。
`ポストのURL?conversation=none`のようにクエリパラメータに`conversation=none`を指定すると、リプライ元のポストが含まれなくなります。

#### YouTube
```
# YouTubeのURLだけの行（前後に改行が必要です）
https://www.youtube.com/watch?v=WRVsOCh907o
```

#### GitHub
GitHub上のファイルへのURLまたはパーマリンクだけの行を作成すると、その部分にGitHubの埋め込みが表示されます。
```
# GitHubのファイルURLまたはパーマリンクだけの行（前後に改行が必要です）
https://github.com/octocat/Hello-World/blob/master/README
```
上記のリンクは、以下のように表示されます。
https://github.com/octocat/Hello-World/blob/master/README

#### 行の指定
GitHubと同じように、リンクの末尾に#L00-L00のような形で表示するファイルの開始行と終了行を指定することができます。
```
# コードの開始行と終了行を指定
https://github.com/octocat/Spoon-Knife/blob/main/README.md#L1-L3
```
上記のリンクは以下のように表示されます。
https://github.com/octocat/Spoon-Knife/blob/main/README.md#L1-L3

また、開始行のみ指定することもできます。
```
# コードの開始行のみ指定
https://github.com/octocat/Spoon-Knife/blob/main/README.md#L3
```
上記のリンクは、以下のように開始行のみ埋め込まれて表示されます。
https://github.com/octocat/Spoon-Knife/blob/main/README.md#L3

#### テキストファイル以外は埋め込めません
埋め込めるファイルは、ソースコードなどのテキストファイルのみとなっています。
もし画像などのファイルを指定した場合は、以下のような表示になります。
https://github.com/zenn-dev/zenn-editor/blob/canary/packages/zenn-cli/images/example-images/zenn-editor.png

