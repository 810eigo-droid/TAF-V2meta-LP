# WordPress固定ページ ⇄ GitHubファイル 対応表

> 「WordPressのページ名」と「GitHubのファイル名」が一致せず分かりにくい問題の解決用。
> 編集を頼むときは、この表の「GitHubファイル」の名前で指定すればOK。
> 最終更新: 2026-07-19(WP固定ページ一覧のスクショで全スラッグ確認)

---

## このリポジトリ(TAF-V2meta-LP)でGit管理しているページ

| WPページのタイトル | スラッグ(URL) | GitHubファイル | 貼り付け方 |
|---|---|---|---|
| 料金表 | /price/ | `wordpress/price-block1-plans.html`<br>`wordpress/price-block2-consultation.html`<br>`wordpress/price-block3-faq.html` | 3つのカスタムHTMLブロックに上から順に |
| 簡単見積もり-order | /order/ | `wordpress/order-page-block.html` | カスタムHTMLブロック1つに丸ごと |
| 5,000円OFFクーポン | /coupon/ | `wordpress/coupon-page-blocks.html` | BLOCK1 → CF7ショートコード → BLOCK3 の3構成 |
| サイトまるごとバックアップパック | /backup/ | `wordpress/backup-pack-page.html` | カスタムHTMLブロック1つに丸ごと(2026-07-22新設。**WP側でスラッグ`backup`の固定ページ作成が必要**。料金表カード#13の「詳しくはこちら」がここへリンク) |
| 月次メンテナンスマニュアル(購入者向け) | /pdf-backup/ | `wordpress/backup-manual-page.html` | カスタムHTMLブロック1つに丸ごと(2026-07-22新設)。**print版(backup-manual-print.html)はA4 PDF専用でWPに貼ると崩れる — 必ずこちらを貼る**。購入者特典のため**WPの「パスワード保護」推奨** |

**サービス資料**(WordPress固定ページではなくサーバー直置きファイル):
| 用途 | 公開場所 | GitHubファイル |
|---|---|---|
| サービス資料(リンク配布用) | taf-design.com/lp/service-guide.html 等 | `service-guide.html`(エックスサーバーに直接アップロード) |

## このリポジトリでは管理していないページ(WP直接編集 or LPtools製 or 公式HP側)

これらは料金や文言を変えても**このセッションのGitには無い**ので、WordPress側で直接編集が必要。
価格改定時は price-master.md と食い違わないよう注意。

| WPページのタイトル | スラッグ | 現在のタイトル内価格 | 税込統一後の正しい価格(price-master準拠) |
|---|---|---|---|
| お問い合わせV2 | /offer2/ | ― | (資料DL・相談の受け皿) |
| LP・HPデザイン制作プラン | /lp-hp2/ | 2万円〜 | **22,000円(税込)〜** ← 要修正 |
| WordPress HP/LP制作プラン | /hp3/ | 3万円〜 | **33,000円(税込)〜** ← 要修正 |
| 専用AIアプリ制作プラン | **/app2_9/** | 2.9万円〜 | 29,000円(税込)〜(整合OK) |
| プロ制作プラン リスト取り特化 | /lp7/ | 7万円〜 | 70,000円(税込)〜(整合OK) |
| HP/LP+セールスファネル一元化 | /lp15/ | 15万円〜 | 150,000円(税込)〜(整合OK) |
| 広告運用・集客サポート | /ad/ | 月1.8万円〜 | **広告費の20%/月・最低月11,000円(税込)** ← 要修正 |
| 先に、ご予算を教えてください | /budget/ | ― | (予算ハブ・公式HPセッション管轄) |
| クーポン受け取りTHANKYOU | /coupon-thanks/ | ― | (クーポン送信後のサンクスページ) |
| 利用規約 | **/kiyaku/** | ― | 法務ページ |
| 特定商取引法に基づく表記 | **/tokushoho/** | ― | 法務ページ |
| プライバシーポリシー | **/privacy-policy/** | ― | 法務ページ |

## 重要メモ(スラッグの罠)

- AIアプリは **`app2_9`(アンダースコア)**。ハイフンの `app2-9` はリンク切れになる
- 法務3ページの実スラッグは **`kiyaku` / `tokushoho` / `privacy-policy`**。
  クーポンページが `terms` / `tokutei` / `privacy` にリンクしていた誤りは2026-07-19に修正済み
- タイトルに「2万円〜」等が入っているプランページ(/lp-hp2/ /hp3/ /ad/)は、
  税込統一に合わせて**WP側でタイトル・本文の価格を直す必要がある**(このGitには無いため)
