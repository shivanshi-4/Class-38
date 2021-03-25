
var database,gameStateV=0,playerCountV=0
var form,player,game
var allPlayers

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()
   
}

function draw(){
    if(playerCountV===4){
        game.update(1)
    }
   if(gameStateV===1){
      clear()
      game.play()
   }
    
}
