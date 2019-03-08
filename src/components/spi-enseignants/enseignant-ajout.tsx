import { Component, State, Prop } from '@stencil/core';
import {RouterHistory} from "@stencil/router";

@Component({
    tag: 'enseignant-ajout',
    styleUrl: 'enseignant.scss'

})
export class EnseignantAjout {
  
    @State() adresse : String ;
  @State() codePostal : String ;
  @State() emailPerso : String ;
  @State() emailUbo : String ;
  @State() mobile : String ;
  @State() nom : String ;
  @State() pays : String ;
  @State() prenom : String ;
  @State() sexe : String;
  @State() telephone : String ;
  @State() type : String ;
  @State() ville : String ;
  @State() selectValue: string;
  
    @Prop() home : RouterHistory;

    reculer(){
       this.home.location;
      }

  postArticle(ens) {
    ens.preventDefault();
    console.log("!");
    
    const adresse = this.adresse;
  const codePostal = this.codePostal ;
  const emailPerso=this.emailPerso;
  const emailUbo=this.emailUbo;
  const mobile=this.mobile;
  const nom=this.nom;
  const pays=this.pays;
  const prenom=this.prenom;
  const sexe=this.sexe;
  const telephone=this.telephone;
  const type=this.type;
  const ville=this.ville;
    
    const payload = {
   
      adresse,
      codePostal,
      emailPerso,
      emailUbo,
      mobile,
      nom,
      pays,
      prenom,
      sexe,
      telephone,
      type,
      ville
    };
   
    

    fetch("http://api-dosispi.cleverapps.io/enseignants", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) { 
        location.href='/enseignant';
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
      });
  }

  componentWillLoad() {
    this.render();
  }
  
    render() {
        return (
          
          <form>
        


<div class="columns is-multiline is-mobile"> 
          
<div class="column is-half">
          <div class="field">
          <div class ="control">
          <label class="label">Nom </label>
          <input type="text" class="input is-primary " onInput={(e: any) => (this.nom = e.target.value)}/>
          </div>
          </div>


          
          <div class="field">
          <div class ="control">
          <label class="label">Prenom </label>
          <input type="text" class="input is-primary " onInput={(e: any) => (this.prenom = e.target.value)}/>
          </div>
          </div>

          
          <div class="field">
          <div class ="control">
          <label class="label">Email personnel</label>
          <input type="email" class="input is-primary "onInput={(e: any) => (this.emailPerso = e.target.value)}/>
          </div>
          </div>
          
          <div class="field">
          <div class ="control">
          <label class="label">Email UBO</label>
          <input type="email" class="input is-primary "onInput={(e: any) => (this.emailUbo = e.target.value)}/>
          </div>
          </div>
            
          <div class="field">
          <div class ="control">
          <label class="label">Telephone Mobile </label>
          <input type="tel" class="input is-primary " onInput={(e: any) => (this.mobile = e.target.value)}/>
          </div>
          </div>

          <div class="field">
          <div class ="control">
          <label class="label">Telephone Fixe </label>
          <input type="tel" class="input is-primary " onInput={(e: any) => (this.telephone = e.target.value)}/>
          </div>
          </div>
          
          <div class="field">
          <div class ="control">
          <label class="label">Type </label>
          <input type="text" class="input is-primary " onInput={(e: any) => (this.type = e.target.value)}/>
          </div>
          </div>

          
          
      
          
  </div>
  
  <div class="column is-half">
          
          
          <div class="field">
          <div class ="control">
          <label class="label">Pays </label>
          <input type="text" class="input is-primary " onInput={(e: any) => (this.pays = e.target.value)}/>
          </div>
          </div>
          
          <div class="field">
          <div class ="control">
          <label class="label">Adresse </label>
          <input type="text" class="input is-primary " onInput={(e: any) => (this.adresse = e.target.value)}/>
          </div>
          </div>
          
          <div class="field">
          <div class ="control">
          <label class="label">codePostal </label>
          <input type="text" class="input is-primary " onInput={(e: any) => (this.codePostal = e.target.value)}/>
          </div>
          </div>
          
          <div class="field">
          <div class ="control">
          <label class="label">Ville </label>
          <input type="text" class="input is-primary " onInput={(e: any) => (this.ville = e.target.value)}/>
          </div>
          </div>
  
          <div class="field">
          <div class ="control">
          <label class="label">Sexe </label>
          <div title="tooltip">
          <div class="select is-primary is-rounded" >
          <select  onInput={(e: any) => (this.sexe = e.target.value)} > 
        <option value="M" >M</option>
        <option value="F" >F</option>
      </select>
      </div></div></div>
         </div>
          
          
</div>
</div>
          
         
  
 <div class="field is-grouped is-grouped-centered">
  <p class="control">
  <stencil-route-link url={'/enseignants'}>
    <button onClick={this.postArticle.bind(this)} class="button is-success ">Ajouter</button>
    </stencil-route-link>
  </p>
  <p class="control">
  <button type="reset"   class="button is-light " > Réinitialiser </button>
   
  </p>
  <br></br>
  <br></br>
</div>

  </form>
  
  
      
        );
    }
}