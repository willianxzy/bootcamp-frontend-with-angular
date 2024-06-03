import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

    getPokemonName(pokemonName:String){
      console.log(pokemonName);
    }
}
