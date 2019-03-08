import { Component } from "@stencil/core";
import {MatchResults as _} from '@stencil/router'; // _ = !"declared but never read"

@Component({
  tag: "spi-root",
  styleUrl: "spi-root.scss"
})
export class SpiRoot {
  render() {
    return (
      <div>
        <spi-header />

        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="spi-home" exact={true} />
              <stencil-route url="/candidats" component="spi-candidats"/>
              <stencil-route url="/enseignantsaffichage" component="enseignants-affichage" exact={true}/>
              <stencil-route url="/enseignantajout" component="enseignant-ajout" exact={true}/>
              <stencil-route url='/enseignantaffichage/:noEnseignant' component='enseignant-affichage' exact={true} />
              <stencil-route url='/enseignantsuppression/:noEnseignant' component='enseignant-suppression' exact={true}/>
              <stencil-route url='/enseignants' component='enseignants-home' exact={true}/>
              <stencil-route url='/enseignantrecherche' component='enseignant-recherche' exact={true}/>
              <stencil-route url='/enseignant' component='enseignants-home' exact={true}/>
              <stencil-route url='/enseignantaffichagenom/:nom' component='enseignant-affichagenom' exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
