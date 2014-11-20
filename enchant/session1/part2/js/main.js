// ecnhant.jsを初期化
enchant();

window.onload = function() {

	// Gameオブジェクトの初期化、320x320の画面の作成
  game = new Game(320, 320);

  // ゲームが動作開始した時のコード
	game.onload = function() {

		// 文字を表示するにはLabelオブジェクト
		hello = new Label("Hello world.");
		hello.x = 100;	// 画面左上を起点として横の位置
		hello.y = 100;	// 画面左上を起点として縦の位置

		// rootSceneの下に追加
		game.rootScene.addChild(hello);
  }

  // ゲーム開始
  game.start();
}
