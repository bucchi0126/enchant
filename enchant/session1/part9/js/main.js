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
	},
	
	// addEventListener('enterframe', function(){})
	// と同じ機能を持つもの
	onenterframe: function() {
		// キー入力の処理
		if (game.input.up)		this.y--;
		if (game.input.down)	this.y++;
		if (game.input.left)	this.x--;
		if (game.input.right)	this.x++;


		// クマの画像を変える処理
		if (game.frame%5 != 0)	return;

		if (this.frame == 0)	this.frame = 1;
		else	this.frame = 0;
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
