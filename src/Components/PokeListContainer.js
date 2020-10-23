import React, {useState, useEffect} from 'react'
import PokeResponse from '../Models/PokeResponse'
import AxiosRequest from '../Utils/AxiosRequest'
import PokemonBadge from './PokemonBadge';
import '../Css/PokeList.css' 
import MPokemon from '../Models/MPokemon';
import ContainerText from './ContainerText';
import SearchTab from './SearchTab'

function PokeListContainer() {
    
    const [response, setResponse] = useState(new PokeResponse());
    const [pokemonBadges, setBadges] = useState(new Array());
    const [modelList,setModels] = useState(new Array());

    const searchByName = (name) => {
        
        if(name == null || name.length <= 0)
        {
            setBadges(modelList.map(model => <PokemonBadge key={model.name} 
                                                                pokemonModel={model}
                                                                isOriginal={true}
                                                                onModelChanged={updateModel.bind(pokemonBadges,modelList)}/>));
            return;    
        }

        const modelsFound = modelList.filter(m => 
        {
            if(m.name.includes(name) == true)
                return m.name;
        });

        if(modelsFound.length == 0) {
            alert("No pokemon found");
            return;
        }

        setBadges(modelsFound.map(model => <PokemonBadge key={model.name} 
                                                            pokemonModel={model}
                                                            isOriginal={true}
                                                            onModelChanged={updateModel.bind(pokemonBadges,modelList)}/>));
    }

    const updateModel = (pokemonModel) => {

        if(modelList.length == 0) {
            alert("no models ");
            return;
        }

        const index = modelList.findIndex(m => m.name == pokemonModel.name);

        if(index == -1 || index == undefined)
            return;

        modelList[index] = pokemonModel;

        const bIndex = pokemonBadges.findIndex(b => b.key == pokemonModel.name);

        if(bIndex == -1)
            return;

        pokemonBadges[bIndex] = <PokemonBadge key={pokemonModel.name} 
                                                pokemonModel={pokemonModel} 
                                                isOriginal={true} 
                                                onModelChanged={updateModel.bind(pokemonBadges,modelList)}/>;
        setModels(modelList);
        setBadges(pokemonBadges);
    }

    // Triggered after response is changed and fill pokemonBadges
    useEffect(() => 
    {
        const newModelList = response.results.map(response =>  new MPokemon(response.name,
                                                                            response.sprites.front_shiny,
                                                                            response.sprites.front_default,
                                                                            response.sprites.other["official-artwork"].front_default,
                                                                            false,
                                                                            null));

        if(newModelList.length == 0)
            return;

        const badgeList = newModelList.map(pModel => <PokemonBadge key={pModel.name} 
                                                                        pokemonModel={pModel} 
                                                                        isOriginal={true}
                                                                        onModelChanged={updateModel.bind(pokemonBadges,modelList)}/>);
                                                                        
        setModels(newModelList);
        setBadges(badgeList);

    },[response]);

    // onMount and perform all promises
    useEffect(() => 
    {
        AxiosRequest.get("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0", (axiosResponse) => 
        {   
            const promises = axiosResponse.results.map(r => AxiosRequest.getPromise(r.url));
            
            AxiosRequest.getAll(promises, (responseArray) => 
            {
                setResponse(new PokeResponse(responseArray.map(response => response.data)));
            },alert);
        
        },alert)
    }, [])

    // If all promises are not done, print the Loading content...
    if(pokemonBadges.length == 0)
        return <h2>Loading content...</h2>;
    
    // Render all badges
    return (
        <ol className='pokedex'>
            <SearchTab onValueChanged={searchByName.bind(pokemonBadges,modelList)}/>
            <ContainerText text="Pokedex"/>
            {pokemonBadges}
        </ol>
    )
}



export default PokeListContainer
