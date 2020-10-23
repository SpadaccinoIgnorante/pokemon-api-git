export default class MPokemon{
    constructor(name,shinySprite,normalSprite,artworkSprite,isInTeam = false,onResetOriginal = function(){}){
        this.name = name;
        this.shinySprite = shinySprite;
        this.normalSprite = normalSprite;
        this.artworkSprite = artworkSprite;
        this.isInTeam = isInTeam;
        this.onResetOriginal = onResetOriginal;
    }
}