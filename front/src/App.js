import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="vertical-align">
        <h1>Janvier</h1>
          <div class="horizontal-align">

            <div id="gauche">
              <table>
                <caption>Dépenses</caption>
                <tr> 
                    <th>Montant</th> 
                    <th>Libelle</th>
                    <th>Catégorie</th> 
                </tr>
              </table>
              <button> + </button>
            </div>

            <div id="droite">
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
