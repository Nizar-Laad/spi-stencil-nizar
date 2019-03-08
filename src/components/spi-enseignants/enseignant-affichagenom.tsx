import { Component, State, Prop, Method } from "@stencil/core";

import { MatchResults, RouterHistory } from "@stencil/router";

@Component({
  tag: "enseignant-affichagenom",
  styleUrl: "enseignant.scss"
})
export class EnseignantAffichagenom {

    @Prop()   home : RouterHistory;
    @Prop()   match : MatchResults;
    @State() item : any  = [];
    @Method()
    deletefunction(ens){
      let url='http://api-dosispi.cleverapps.io/enseignants'
      return fetch((url),{
      method:'DELETE',headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(ens),
        }).then(() => {;
        location.href='/enseignant';
      }).catch((error) => {
          ;
          console.error(error);
        });
  }
  componentWillLoad() {
      let nom = this.match.params.Nom;
      console.log(nom);
      return fetch("http://api-dosispi.cleverapps.io/enseignants/nom/"+nom)
        .then(response => response.json())
        .then(data => {
          this.item = data;});
    }
  
  
  
  
  
    render() {
    
  
      return (
          
           
        
    
    
        <div>
            <br/>
            <br/>
          <div class="columns is-large is-mobile is-centered">
          <div class="column is-large">
        <div class="card large">
    <div class="card-image">
      
    </div>
    
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{this.item.nom} {this.item.prenom}</p>
          <p class="subtitle is-6">@{this.item.emailUbo}</p>
          
        </div>
      </div>
  
      <div class="content">
        Telephone mobile : {this.item.mobile}
        <br/>
        Pays : {this.item.Pays}
        <br/>
        Ville : {this.item.Ville}
          <br/>
        Telephone : {this.item.Telephone}
          <br/>
        Adresse : {this.item.Adresse}
        <br/>
        CodePostal : {this.item.CodePostal}
  
        <br></br>
        <footer class="card-footer">
      
      
        <div class="card-footer-item"> <stencil-route-link url={'/enseignants'}>
                        <button class="button is-large is-danger is-tooltip-danger tooltip" onClick={() => this.deletefunction(this.item)} data-tooltip="Supprimer Enseignant">   <i class="fas fa-trash-alt"></i> </button>
                      </stencil-route-link></div>
    </footer>
        
        
        
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  
  
         
                
        )
        }
        
      
  }

