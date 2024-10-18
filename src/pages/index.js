import { Container } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";

export default function Index() {
  return <div>
    <Menu />
    <Container>
      Bem Vindos a disciplina
    </Container>
    <Footer />
  </div>;
}
