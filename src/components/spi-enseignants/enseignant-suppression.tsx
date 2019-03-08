import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
    tag: 'enseignant-suppression',
    styleUrl: 'enseignant.scss'
})
export class EnseignantSuppression {
    @Prop() match: MatchResults;
    
        deleteData() {
            
            fetch("http://api-dosispi.cleverapps.io/enseignants/"+this.match.params.noEnseignant,{
                method: "DELETE",
                headers: {
                  Accept: "application/json, text/plain, /",
                  "Content-Type": "application/json"
                }
              })
        .then(response => response.json());
      }

    render() {
        return (
            <div>
            <br></br>
                <br></br>
            <div class="columns is-mobile is-centered">
                
           <div class="notification is-danger">
  <button class="delete"></button>
  L'enseignant Numero 
  <strong> {this.match.params.noEnseignant} </strong> a été supprimé avec succès
</div>
           </div>
           </div>
        );
    }
}