import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from "@/styles/Navbar.module.css"
export default function Menu() {
  return (
    <Container>
      <Navbar expand="sm" className={`${styles.navGradiente}  text-dark px-3 m-0 border border-info-subtle rounded rounded-4`}>
        <Navbar.Brand href="/">6A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/promessa">Promessa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
// import styles from '@/styles/Navbar.module.css' {`${styles.navgradiente}