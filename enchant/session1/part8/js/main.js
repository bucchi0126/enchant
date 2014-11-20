// ecnhant.jsを初期化
enchant();

// Spriteクラスを継承
Bear = Class.create(Sprite, {
	
	// initializeは初期化の意味
	// オブジェクトを生成したときに自動的に実行される
	initialize: function(x, y) {

		// Spriteオブジェクトの初期化
		// bear = new Sprite(32, 32); みたいなもの
		Sprite.call(this, 32, 32);
		this.image = game.assets['./image/bear.png'];
		this.x = x;
		this.y = y;
		this.frame = 0;
		game.rootScene.addChild(this);
	}
});

window.onload = function() {

	// Gameオブジェクトの初期化、320x320の画面の作成
  game = new Game(320, 320);

	// 画像を先にロード
	game.preload('./image/bear.png')

  // ゲームが動作開始した時のコード
	game.onload = function() {
  
		bear1 = new Bear(0, 0);
		bear2 = new Bear(0, 50);
	}

  // ゲーム開始
  game.start()
}
