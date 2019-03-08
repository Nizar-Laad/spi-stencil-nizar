
import { Component/*, Prop ,State, Method*/} from '@stencil/core';


@Component({
  tag: 'enseignants-home',
  styleUrl: 'enseignant.scss'

})
export class EnseignantsHome {




  render() {
    

      return (
       
        <div>
            <br>
            </br>
            <br></br>
            <stencil-route-link url={'/enseignantsaffichage'}>
            <a class="button is-large is-fullwidth is-info">
    <span class="icon">
      <i  class="fas fa-address-card"></i>
    </span>
    <span>Affichage des enseignants</span>
  </a>
  </stencil-route-link>
        <br></br>
        <stencil-route-link url={'/enseignantajout'}>
  <a class="button is-large is-fullwidth is-success">
    <span class="icon">
      <i class="fas fa-plus-circle"></i>
    </span>
    <span>Ajout d'un enseignant</span>
    
  </a>
  </stencil-route-link>
        
        </div>
      );
        
    } 

    
  }