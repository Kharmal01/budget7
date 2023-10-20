import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="vertical-align">
      <div className="space-between">
        <button className="btn btn-primary" id="precedent"> ⬅ </button>
        <h3>Janvier</h3>
        <button className="btn btn-primary btn-add" id="suivant"> ➡ </button>
      </div>
      <div className="horizontal-align">

        <div className="card w-96 bg-base-100 shadow-xl" id="gauche">
          <div className="card-body">
            <h2 className="card-title">Dépenses</h2>
            <table>
              <tr> 
                  <th>Montant</th> 
                  <th>Libelle</th>
                  <th>Catégorie</th> 
              </tr>
            </table>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" id="ajout"> + </button>
            </div>
          </div>
        </div>

        <div id="droite">
          <div className="piechart card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h1>pieChart</h1>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
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
            </div>
          </div>
          
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Mois des dernieres années</h2>
              <table>
                <tr> 
                  <td>2021</td> 
                  <td>2022</td>
                  <td>2023</td> 
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
      </div>
    </div>
  );
}

export default App;
