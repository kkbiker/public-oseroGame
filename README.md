# public-oseroGame

**サービス概要**  
簡易的なオセロアプリを作成しました。
対人もしくはCPUとの対戦を行え、CPU戦では先行もしくは後攻を選択してゲームを始めることができます。
主な機能として「自動で番手を交代する」「コマを置ける場所を示す」「コマが置けない場合は自動で相手に番手を渡す」「勝敗決定機能」などがあります。 
  
**画面**  
主な機能のキャプチャを紹介します。

* 初期画面
<kbd><img src="https://github.com/user-attachments/assets/e5316b66-498f-404c-ad3f-83db51be02d9"></kbd>
  
* コマセット後画面
<kbd><img src="https://github.com/user-attachments/assets/b8f6ac4b-9095-44f9-b581-3982e27ca62c"></kbd>
  
* プレイ中画面  
<kbd><img src="https://github.com/user-attachments/assets/20b765cb-8df0-45e4-bb2c-0e8cee459893"></kbd>

* 勝敗表示画面
<kbd><img src="https://github.com/user-attachments/assets/3551aa58-7967-4ef4-a1d4-e617b2d87a1a"></kbd>

* VS CPU画面
<kbd><img src="https://github.com/user-attachments/assets/c2c27bce-1ec6-47ac-9cf6-35e3a3f916c5"></kbd>


**使用技術**  
| カテゴリ  | 技術スタック |
| ------------- | ------------- |
| フロントエンド | html, css, scss, Javascript|
| etc.  | Git, VScode  |

**改善点**  
1. レスポンシブデザインの精緻化  
    * タブレット用のブレークポイント追加とレイアウトの調整  
2. 対人戦をリモートでできるように
    * リアルタイムでの変更を画面に反映できるようサーバーを介する通信機能を追加する
3. CPUのレベル付け
    * 現在ランダムでコマを打つ仕様になっているが、ユーザーの挙動に合わせてCPUレベル毎にコマを置く位置を変更するように変更

