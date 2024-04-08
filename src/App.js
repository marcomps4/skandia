import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./componentes/Navbar/NavBar";
import { Banner} from "./componentes/Banner/Banner";
import { Steps} from "./componentes/Steps/Steps";
import {Escoger} from "./componentes/Escoger/Escoger";
import {Testimonio} from "./componentes/Testimonios/Testimonios";
import {Channel} from "./componentes/Channel/Channel";
import {Faq} from "./componentes/Faq/Faq"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Steps />
      <Escoger />
      <Testimonio />
      <Channel />
      <Faq />
     
    </div>
  );
}

export default App;
