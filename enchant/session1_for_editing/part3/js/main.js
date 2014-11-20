// ecnhant.jsを初期化
enchant();

window.onload = function() {

	// Gameオブジェクトの初期化、320x320の画面の作成
  game = new Game(320, 320);

  // ゲームが動作開始した時のコード
	game.onload = function() {
		

  }

  // ゲーム開始
  game.start()
}
