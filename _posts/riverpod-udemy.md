---
title: 'Riverpodを使った状態管理'
date: '2025-01-18'
category: 'blog'
tags:
  - 'Dart'
  - 'Flutter'
---

# はじめに

## 状態管理とは

- アプリケーションの動作やUIの状態を追跡し、制御すること
- 非同期処理を伴う機能の実装において特に重要
- ユースケース
  - APIサーバーとの通信
  - ファイルの保存　など

## Flutterでの状態管理

- StatefulWidget
  - Flutterでの状態管理の基本
  - 特定の部分の状態を保存・変更・再レンダリング
- InheritedWidget
  - 状態を親から子に伝える
  - アプリ全体での情報共有に便利
- Bloc
  - メリット
    - Streamを活用したリアクティブな状態管理
    - 複雑なアプリに利用可能
    - 良好なテスト性
  - デメリット
    - 学習コストが高い
- Redux
  - メリット
    - グローバル階層で状態管理（状態が一箇所に集約）
    - ミドルウェアのサポート
    - 大きなコミュニティと多くのツール
  - デメリット
    - 複雑な階層構造が苦手
- Provider
  - メリット
    - 複雑な階層構造の簡単な管理
    - 直感的な状態管理
    - コード量の削減
  - デメリット
    - 大規模アプリの管理が複雑になる可能性あり
- **Piverpod**
  - メリット
    - Providerの強化版
    - Flutter非依存
    - より安全な状態管理
  - デメリット
    - Provider空の移行時の学び直しが必要

## Riverpod

https://riverpod.dev/ja/

特徴

- 安全性
  - 不正な状態やnullの心配軽減
- 柔軟性
  - プロバイダの上書き
  - family化
  - スコープ化
- テストと統合
  - アプリの状態を簡単にモック化
  - DevToolsとの統合
- プロバイダとコンシューマ
  - 状態の提供者（Provider）と状態の利用者（Consumer）が明確に分離
- 公式ドキュメントの充実

## パッケージのインストール

https://riverpod.dev/ja/docs/introduction/getting_started#installing-the-package

```
flutter pub add flutter_riverpod
flutter pub add riverpod_annotation
flutter pub add dev:riverpod_generator
flutter pub add dev:build_runner
flutter pub add dev:custom_lint
flutter pub add dev:riverpod_lint
```

TODO: それぞれのパッケージの用途

## 使い方

### main.dartでriverpodのインポートとProviderScopeの挿入

```dart:main.dart
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
  // runApp(const MyApp());
  runApp(const ProviderScope(child: MyApp()));
}
```

### Providerの作成

:::message alert
この段階ではエラーが出ます
`build_runner build`コマンド実行後に解消されます
:::

```dart:例）items/items_provider.dart
import 'package:riverpod_annotation/riverpod_annotation.dart';

// コマンドで自動生成されるファイル名を指定
// 拡張子前に「.g」をつけて「${プロバイダー名}.g.dart」とする命名規則
part 'items_provider.g.dart';

// 型 プロバイダー名(プロバイダー名Ref ref) {...}
// Tips: live template「ri」
@riverpod
List<String> items(ItemsRef ref) {
  return [
    'Item 1',
    'Item 2',
    'Item 3',
  ];
}
```

#### NotifierProvider

- 変更される可能性のある状態（state）を管理するためのProvider
- 自分自身および外からNotifierProviderの管理しているstateを変更可能
- 変更があったことを`ref.watch`および`ref.listen`している他のProviderに通知可能

```dart:NotifierProvider
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'プロバイダー名.g.dart';

@riverpod
class クラス名 extends _$クラス名 {

  @override
  初期値の型 build() {
    return 初期値;
  }

  // stateを操作するメソッド等記述
  void someFunction(String value) {
    state = value
  }
}
```

### ${プロバイダー名}.g.dartを生成する

```
flutter pub run build_runner build
```

### ウィジェットからProviderを利用する

```dart:例）ChildWidget.dart
// 「.g」がついていない方
import 'items/items_provider.dart';

// ConsumerWidgetを継承
// Tips: live template「cons」
class ChildWidget extends ConsumerWidget {
  const ChildWidget ({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {

    // ref.watch(プロバイダー名)で取得
    final items = ref.watch(itemsProvider);

    return Scaffold(
      body: ListView.builder(itemBuilder: (context, index) {
        return ListTile(
          title: Text(items[index]),
        );
      },
      itemCount: items.length,
      ),
    );
  }
}
```

#### NotifierProviderのメソッドを呼び出して状態を変更する

```dart
ref.read(プロバイダー名.notifier).メソッド()
```
