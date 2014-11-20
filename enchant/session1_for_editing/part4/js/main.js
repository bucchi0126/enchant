// ecnhant.jsを初期化
enchant();

window.onload = function() {

	// Gameオブジェクトの初期化、320x320の画面の作成
  game = new Game(320, 320);

	// 画像を先にロード
	game.preload('./image/bear.png')

  // ゲームが動作開始した時のコード
	game.onload = function() {
		
		// スプライトの作成
		bear = new Sprite(32, 32);
		bear.x = 150;
		bear.y = 150;
		bear.image = game.assets['./image/bear.png'];
		bear.frame = 0;
		game.rootScene.addChild(bear);

  }

  // ゲーム開始
  game.start()
}
