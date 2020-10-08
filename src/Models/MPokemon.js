import AxiosRequest from "../Utils/AxiosRequest";

export default class MPokemon {
   
    constructor(pokemonUrl) {
    
        this.name = "???";
        this.types = [];

        this.shinySprite = "shinyUrl";
        this.normalSprite = "normalUrl";
        this.artworkSprite = "artworkUrl";

        AxiosRequest.Get(pokemonUrl, (axiosResponse) => 
        {
            this.name = axiosResponse.name;
            axiosResponse.types.forEach(type => 
            {
                this.types.push(new Type(type.url))
            });
            this.shinySprite = axiosResponse.sprites.front_shiny;
            this.normalSprite = axiosResponse.sprites.front_default;
            this.artworkSprite = axiosResponse.sprites.other["official-artwork"].front_default;
        }, (err) => 
        {
            alert(err);
        });
    }
}

export class Type {
    constructor(url) {
        
    }
}