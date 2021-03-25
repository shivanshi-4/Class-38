class Game{
    constructor(){}
    
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameStateV=data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })

    }
    
   async start(){
       if(gameStateV===0){
           player=new Player();
           var playerCountRef=await database.ref('playerCount').once("value")
           if(playerCountRef.exists()){
               playerCountV=playerCountRef.val()
               player.getCount();

           }
           
           form=new Form();
           form.display();
       }
    }
          play(){
              form.hide()
              textSize(30)
              text("GAME START",120,100)

              Player.getPlayerInfo();

              if(allPlayers!==undefined){
                  var displayPosition=130
                  for(var p in allPlayers){
                      if(p==="player"+player.index)
                      fill("red")
                      else
                      fill ("Black")
                      displayPosition+=20
                      textSize(15)
                      text(allPlayers[p].name+": "+allPlayers[p].distance,120,displayPosition)
                  }

              }
              if(keyIsDown(UP_ARROW)&&player.index!==null){
                  player.distance+=50
                  player.update();
              }
          }
       
   
}