# snrk tech blog.

https://snrk-portfolio--pr46-fix-45-ok5pxszf.web.app/

## tevh stack.

- [Next.js](https://nextjs.org/)
- [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter)
- [tailwindcss](https://tailwindcss.com/)

## How to.

### 記事追加方法

1. [/\_posts](https://github.com/snrk0622/portfolio/tree/develop/_posts)配下に`xxx.md`を作成
2. metadataを記述
   ```
   ---
   title: '記事タイトル'
   date: '2025-01-01'
   category: 'blog'
   tags:
     - 'tag1'
     - 'tag2'
   ---
   ```
   | キー     | 必須 | 値                                                                                                                                                        |
   | -------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | title    | \*   | 文字列                                                                                                                                                    |
   | date     | \*   | `yyyy/MM/dd`形式の文字列                                                                                                                                  |
   | category | \*   | [CategoriesData](https://github.com/snrk0622/portfolio/blob/6e788eb6e0bd0faae895ba56446db14213fd41db/src/data/categories.ts#L3)のいずれか                 |
   | tags     |      | [TagData](https://github.com/snrk0622/portfolio/blob/6e788eb6e0bd0faae895ba56446db14213fd41db/src/data/tags.ts#L16)のリスト（新しいタグの追加方法は後述） |
3. metadataの下に本文記述

### タグ追加方法

1. [TagData](https://github.com/snrk0622/portfolio/blob/6e788eb6e0bd0faae895ba56446db14213fd41db/src/data/tags.ts#L16)にデータ追加
   ```
   { id: 'javascript', name: 'JavaScript', icon: SiJavascript },
   ```
   | キー | 必須 | 値                                                                      |
   | ---- | ---- | ----------------------------------------------------------------------- |
   | id   | \*   | `[a-z-]+`形式の文字列                                                   |
   | name | \*   | 文字列                                                                  |
   | icon |      | [react-icons](https://react-icons.github.io/react-icons/)からインポート |

### 資格追加方法

1. [AuthorData.certifications](https://github.com/snrk0622/portfolio/blob/6e788eb6e0bd0faae895ba56446db14213fd41db/src/data/author.ts#L41)にデータ追加
   ```
   {
     name: 'AWS Certified Solutions Architect – Associate',
     url: 'https://aws.amazon.com/jp/certification/certified-solutions-architect-associate/?nc1=h_ls',
   },
   ```
   | キー | 必須 | 値     |
   | ---- | ---- | ------ |
   | name | \*   | 文字列 |
   | url  |      | URL    |

### スキル追加方法

1. [Author.skills](https://github.com/snrk0622/portfolio/blob/6e788eb6e0bd0faae895ba56446db14213fd41db/src/data/author.ts#L11)にデータ追加
   ```
   {
     name: 'JavaScript',
     years: 5,
   },
   ```
   | キー  | 必須 | 値     |
   | ----- | ---- | ------ |
   | name  | \*   | 文字列 |
   | years | \*   | 数字   |
