import { Container } from "react-bootstrap";
import styles from "@/styles/Footer.module.css"
export default function Footer() {
    return <>
        <Container className="position-button bottom-0 start-50">
            <footer className={`${styles.footerGradiente} px-3 text-dark border border-info-subtle rounded rounded-4`}>
                <ul className="nav justify-content-center border-bottom ">
                    <li className="nav-item">Disciplina de FrameWorks2</li>
                </ul>
                <p className="text-center">&copy; 2024 IFMS</p>
            </footer>
        </Container>
    </>
}