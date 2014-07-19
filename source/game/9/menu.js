var menu_state = {
    create: function() {
        console.log('Menu#create');

        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.start, this);

        var style = { font: "20px Arial", fill: "#ffffff" };
        var x = game.world.width/2, y = game.world.height/2;
        var text = this.game.add.text(x, y-50, "Press space to start", style);
        text.anchor.setTo(0.5, 0.5);
    },

    start: function() {
        console.log('Menu#start');

        this.game.state.start('play');
    }
};