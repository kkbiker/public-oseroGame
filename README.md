# public-oseroGame

**サービス概要**  
簡易的なオセロアプリを作成しました。
対人もしくはCPUとの対戦を行え、CPU戦では先行もしくは後攻を選択してゲームを始めることができます。
主な機能として「自動で番手を交代する」「コマを置ける場所を示す」「コマが置けない場合は自動で相手に番手を渡す」「勝敗決定機能」などがあります。 
  
**画面**  
主な機能のキャプチャを紹介します。

* 質問画面（トップ）
<kbd><img src="https://github.com/user-attachments/assets/e5316b66-498f-404c-ad3f-83db51be02d9"></kbd>
  
* 診断結果画面  
<kbd><img src="https://github.com/champaya/public-alcohol-type/assets/159685650/14195476-c335-423d-9c55-ddbfb2505c20"></kbd>
  
* 診断結果詳細画面  
<kbd><img src="https://github.com/champaya/public-alcohol-type/assets/159685650/e8979d30-feba-4c52-9634-82c729f6f2b0"></kbd>
  
* すべての診断結果画面  
<kbd><img src="https://github.com/champaya/public-alcohol-type/assets/159685650/0df8689c-4e31-4f2f-baf8-89effb52905e"></kbd>

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

