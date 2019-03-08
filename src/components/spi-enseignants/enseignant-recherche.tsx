import { Component, State,Prop } from '@stencil/core';
import { Enseignant } from '../../global/enseignant';

@Component({
    tag: 'enseignant-recherche',
    styleUrl: 'enseignant.scss'
})

export class EnseignantRecherche {
    @State() enseignants :Enseignant[] = [] ;
    
    @Prop()

     name: string='/fetch/';
  
    apiRootUrl: string = 'http://api-dosispi.cleverapps.io/enseignants';

     Nooom: string;


    


    render() {
        
        return (
            
        <div class="center">
        <form>
          <div class="column is-half">
          <div class="field">
          <div class ="control">
          <label class="label ">Nom</label>
          <input type="text" class="input is-primary " onInput={(e: any) => (this.Nooom = e.target.value)}/>
          </div>
          </div></div>
          <div class="control">
  <stencil-route-link url={'/enseignantaffichagenom/'+this.Nooom}>
          <button  class="button is-success is-center">Rechercher</button>
    </stencil-route-link>
  </div>
  </form>
          </div>

          
    )}
    
    
}