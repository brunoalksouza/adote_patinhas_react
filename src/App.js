import ButtonAdd from "./componentes/ButtonAdd";
import ButtonDelete from "./componentes/ButtonDelete";
import ButtonDetails from "./componentes/ButtonDetails";
import ButtonFace from "./componentes/ButtonFace";
import ButtonGoogle from "./componentes/ButtonGoogle";
import ButtonInterest from "./componentes/ButtonInterest";
import ButtonRegister from "./componentes/ButtonRegister";
import ButtonRemove from "./componentes/ButtonRemove";

function App() {
  return (
    <div className="App">
      <ButtonInterest/>
      <ButtonGoogle/>
      <ButtonFace/>
      <ButtonDetails/>
      <ButtonRegister/>
      <ButtonAdd/>
      <ButtonDelete/>
      <ButtonRemove/>
    </div>
  );
}

export default App;
