import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import {Container, Row,Col} from 'react-bootstrap';


export default function Index() {
  return <div>
    <Menu />
    Bem Vindos a disciplina
    
    <Footer />
  </div>;
}
