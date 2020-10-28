export default class MPokemon{
    constructor(name,shinySprite,normalSprite,artworkSprite,isInTeam = false,isActive = true){
        this.name = name;
        this.shinySprite = shinySprite;
        this.normalSprite = normalSprite;
        this.artworkSprite = artworkSprite;
        this.isInTeam = isInTeam;
        this.isActive = isActive;
    }
}