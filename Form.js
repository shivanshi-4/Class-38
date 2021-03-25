class Form{
    constructor(){
        this.input=createInput('NAME')
        this.button=createButton('PLAY')
        this.greeting=createElement('h3')
        }
        
        hide(){
            this.greeting.hide();
            this.input.hide();
           this.button.hide();


        }



    display(){
        var title=createElement('h2')
        title.html("CAR RACING GAME")
        title.position(130,0)

        
        this.input.position(130,160)

        
        this.button.position(250,200)

        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value()

            playerCountV+=1
            player.index=playerCountV
            player.update()
            player.updateCount(playerCountV)

            this.greeting.html("HELLO "+player.name)
            this.greeting.position(130,160)
        })
    }
}