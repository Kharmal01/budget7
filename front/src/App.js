import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="vertical-align">
      <div class="espace">
        <button id="precedent"> ⬅ </button>
        <h1>Janvier</h1>
        <button id="suivant"> ➡ </button>
      </div>
      <div class="horizontal-align">

        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Dépenses</h2>
            <table>
              <tr> 
                  <th>Montant</th> 
                  <th>Libelle</th>
                  <th>Catégorie</th> 
              </tr>
            </table>
            <div class="card-actions justify-end">
              <button class="btn btn-primary" id="ajout"> + </button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="piechart">
          </div>
          <table>
              <tr> 
                  <th>Dépenses</th> 
                  <th id="depenses">0</th> 
              </tr>
              <tr> 
                  <th>Revenu</th> 
                  <th id="revenu">0</th> 
              </tr>
              <tr> 
                  <th>Résultat</th> 
                  <th id="résultat">0</th> 
              </tr>
          </table>
          <table>
            <caption>Mois des dernieres années</caption>
            <tr> 
              <td colspan="2">2021</td> 
              <td colspan="2">2022</td>
              <td colspan="2">2023</td> 
            </tr>
              <tr>
                <tr> 
                  <th>Dépenses</th> 
                  <th id="depenses">0</th> 
                </tr>
                <tr> 
                  <th>Revenu</th> 
                  <th id="revenu">0</th> 
                </tr>
                <tr> 
                  <th>Résultat</th> 
                  <th id="résultat">0</th> 
                </tr>
              </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
