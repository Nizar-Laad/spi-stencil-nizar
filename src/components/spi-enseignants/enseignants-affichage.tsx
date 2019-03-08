import { Component, Prop ,State, Method} from '@stencil/core';
import { Enseignant } from '../../global/enseignant';

@Component({
  tag: 'enseignants-affichage',
  styleUrl: 'enseignant.scss'

})
export class EnseignantsAffichage {

  @State() enseignants :Enseignant[] = [] ;
  @Prop()
  
   name: string='/fetch/';

  apiRootUrl: string = 'http://api-dosispi.cleverapps.io/enseignants';

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
  load () {
  
    fetch(`${this.apiRootUrl}`).then(rsp => {
      return   rsp.json();
  
    }).then(data => {
      this.enseignants = data;
  
    }).catch((err) => {
      console.error('Could not load data', err);
    }); 
  }

  componentWillLoad() { 
    console.log('Component is being rendered');

    this.load();
  }
  componentDidLoad() {
    this.load();

    console.log('Component has been rendered');
  }



  render() {
    if(this.enseignants && this.enseignants.length>0) {
        

      return (
          <div>
              <br></br>
              <br></br>
        <div class="container">
            <div class="row columns">
          <div class="row columns is-multiline">
         {this.enseignants.map((data:Enseignant) =>
      
  
  
      <div class="column is-one-third">
      
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
        <p class="title is-4">{data.nom} {data.prenom}</p>
        <p class="subtitle is-6">@{data.emailUbo}</p>
      </div>
    </div>

    <div class="content">
      Telephone mobile : {data.mobile}<br></br>
      Adresse : {data.adresse}
      <br></br>
      <footer class="card-footer">
    <div class="card-footer-item"> <stencil-route-link url={'/enseignantaffichage/' + data.noEnseignant}>
                    
                    <button class="button is-large is-info is-tooltip-info tooltip" data-tooltip="Plus d'infos"> <i class="fas fa-info-circle"></i> </button>
                  </stencil-route-link></div>
    
    <div class="card-footer-item"> <stencil-route-link url={'/enseignants' }>
                      <button class="button is-large is-danger is-tooltip-danger tooltip" onClick={() => this.deletefunction(data)} data-tooltip="Supprimer Enseignant">   <i class="fas fa-trash-alt"></i> </button>
                    </stencil-route-link></div>
  </footer>
      
      
      
    </div>
  </div>
</div>

</div>
       
              
      )}</div></div></div></div>)}
    else {
   
   return (" Nothing to render ");
   
    } 
   

    
  }
}