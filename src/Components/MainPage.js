import React, { Component } from 'react'
import axios from 'axios'

class MainPage extends Component{

    constructor(){
        super()
        this.state = {
            pokemonResponse:[]
        }
    }

    async componentDidMount(){
        const axiosResponse = await axios("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0") 

        if(axiosResponse.data.errcode === "")
            return;
        
        if(axiosResponse.data == null || axiosResponse.data == undefined)
            return;

        console.log("mounting..." + axiosResponse.data.results);

        this.setState({
            pokemonResponse : axiosResponse.data.results
        });
        
    }

    render(){
        return(
            <div>{this.state.pokemonResponse.map(p => p.name)}</div>
        )
    }
}

export default MainPage