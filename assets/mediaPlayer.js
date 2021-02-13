class MediaPlayer{

    constructor(config){
        this.media = config.el;
        this.plugins = config.plugins || [];  

        this._initPlugins();

    }
     _initPlugins(){
         this.plugins.forEach(plugin =>{
             plugin.run();
         })
     }

    play(){
        if (this.media.paused){
            this.media.play();
            console.log("holas")
        }else{
            this.media.pause(); // holas
        }
        
    }
}

export default MediaPlayer;
