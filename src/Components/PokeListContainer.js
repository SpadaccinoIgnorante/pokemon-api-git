import React, {useState, useEffect, useContext} from 'react'
import PokeResponse from '../Models/PokeResponse'
import AxiosRequest from '../Utils/AxiosRequest'
import PokemonBadge from './PokemonBadge';
import '../Css/PokeList.css' 
import MPokemon from '../Models/MPokemon';
import ContainerText from './ContainerText';
import SearchTab from './SearchTab'
import {PokemonContext} from '../Contexts/PokemonContext'
import {FunctionContext} from '../Contexts/FunctionPokemonContext'

function PokeListContainer() {
    
    const [modelList,setModels] = useState(new Array());
    const [modelChanged,setPokemonChanged] = useContext(PokemonContext);
    const [functionContext,setFunctionContext] = useContext(FunctionContext);

    // onMount and perform all promises
    useEffect(() => 
    {
        AxiosRequest.get("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0", (axiosResponse) => 
        {   
            const promises = axiosResponse.results.map(r => AxiosRequest.getPromise(r.url));
            
            AxiosRequest.getAll(promises, (responseArray) => 
            {
               requestDone(new PokeResponse(responseArray.map(response => response.data)));
            },alert);
        
        },alert)
    }, []);

    const searchByName = (name) => {
        
        if(name == null || name.length <= 0)
        {
            modelList.forEach(m => m.isActive = true);
            setModels(modelList.map(m => m));
            return;    
        }

        modelList.forEach(m => 
        {
            if(m.name.includes(name) == false)
                m.isActive = false;
            else
                m.isActive = true;
        });

        setModels(modelList.map(m => m));
    }

    const updateModel = (pokemonModel) => {

        if(modelList.length == 0) {
            return;
        }

        const index = modelList.findIndex(m => m.name == pokemonModel.name);

        if(index == -1 || index == undefined)
            return;

        modelList[index] = new MPokemon(pokemonModel.name,
                                        pokemonModel.shinySprite,
                                        pokemonModel.normalSprite,
                                        pokemonModel.artworkSprite,
                                        !pokemonModel.isInTeam);

        console.log(modelList[index]);

        setModels(modelList.map(m=>m));
        setFunctionContext(() => updateModel);
        setPokemonChanged(modelList[index]);
        
    }

    const requestDone = (response) => {

        const newModelList = response.results.map(response =>  new MPokemon(response.name,
                                                                            response.sprites.front_shiny,
                                                                            response.sprites.front_default,
                                                                            response.sprites.other["official-artwork"].front_default,
                                                                            false));

        if(newModelList.length == 0)
            return;

        setModels(newModelList);
    }

    // If all promises are not done, print the Loading content...
    if(modelList.length == 0)
        return <h2>Loading content...</h2>;
    
    // Render all badges
    return (
        <ol className='pokedex'>
            <SearchTab onValueChanged={searchByName}/>
            <ContainerText text="Pokedex"/>
            {modelList.map(pModel => <PokemonBadge key={pModel.name} 
                                                        pokemonModel={pModel}
                                                        onClickBadge={updateModel}/>)}
        </ol>
    )
}

export default PokeListContainer
