import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:String = "";

  constructor() {
    this.baseURL= environment.pokeApi;
   }

    getPokemonName(pokemonName:String){
      console.log(this.baseURL);
    }
}
