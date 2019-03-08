import { Component, Prop ,State, Method} from '@stencil/core';

@Component({
    tag: 'spi-candidats'
   
})
export class SpiCandidats {
    
 
    // Indicate that name should be a public property on the component
    @State() data :any[] = [];
    @Prop()
     name: string='/fetch/';
   
    
   
    @Method()
    load () {
    
      return fetch('https://dosispi.cleverapps.io/candidats').then(rsp => {
        return   rsp.json();
    
      }).then(data => {
        this.data = data;
    
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
      if(this.data && this.data.length>0) {
   
        return (
          <div>
          
         
 
   
                { 
   this.data.map((data) =>
   
   <div class="container">
   
   <div class="card ">
  <header class="card-header">
    <p class="card-header-title">
    <b>Nom Prenom  : {data.nom} {data.prenom}</b>


    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>

  
  <div class="card-content">
<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
  <tr>
    <td>
      <b>Nationalité</b> </td><td>{data.nationalite} </td> </tr> 
    
    <tr >
      <td>
        <b>Mobile</b> :</td> <td> {data.mobile} </td></tr> 
    
   
    </table>
   </div>
  <footer class="card-footer">
    <a  class="button card-footer-item is-info" href={"/candidats/fetch/"+data.noCandidat}>Details</a>
    <a class="button card-footer-item is-success " href={"/candidats/edit/"+data.noCandidat} >Edit</a>
    <a class="button card-footer-item is-danger" href={"/candidats/delete/"+data.noCandidat} >Delete</a>
  </footer>
  </div>
  </div>
  ) 
                } 
             
             </div>  
        
                 
                  
                )
   
   
   
      }
      else {
     
     return (" Nothing to render Candidat ");
     
      } 
     
   
      
    }


}