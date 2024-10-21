import { Container } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import Accordion from 'react-bootstrap/Accordion';
export default function Produtos() {
    var produtos = [
        {
            id: 1,
            produto: "Bola de Futebol",
            descricao: "Bola de futebol oficial de tamanho 5, aprovada pela FIFA, feita de material sintético de alta durabilidade, com costura reforçada e camada externa resistente à abrasão. Ideal para jogos em gramados naturais ou sintéticos. O design aerodinâmico e a construção com 32 gomos proporcionam uma trajetória estável, permitindo maior precisão nos chutes e passes."
        },
        {
            id: 2,
            produto: "Raquete de Tênis",
            descricao: "Raquete de tênis profissional, fabricada em grafite e fibra de carbono, que oferece excelente controle e potência. Pesando apenas 300g, é leve o suficiente para permitir movimentação rápida, enquanto seu padrão de encordoamento de 16x19 proporciona maior controle sobre os golpes. Perfeita tanto para iniciantes quanto para jogadores avançados que buscam melhorar seu desempenho nas quadras."
        },
        {
            id: 3,
            produto: "Halteres Ajustáveis",
            descricao: "Conjunto de halteres ajustáveis, com peso variando de 2kg a 24kg. Possui um sistema de ajuste fácil que permite mudar o peso rapidamente durante os treinos. Feitos com aço resistente e revestimento de borracha, oferecem conforto e segurança no manuseio. Ideais para exercícios de musculação, fortalecimento muscular e treinamento funcional, otimizando o espaço de treino em casa."
        },
        {
            id: 4,
            produto: "Bicicleta Mountain Bike",
            descricao: "Bicicleta mountain bike de 21 marchas, com suspensão dupla, quadro em alumínio leve e rodas de 29 polegadas. Projetada para terrenos acidentados, trilhas e uso urbano, possui freios a disco hidráulicos que oferecem maior controle e segurança em descidas íngremes. Ideal para quem busca aventura e desempenho em atividades ao ar livre, oferecendo conforto e resistência."
        },
        {
            id: 5,
            produto: "Luvas de Boxe",
            descricao: "Luvas de boxe profissionais, feitas em couro sintético de alta qualidade, com acolchoamento interno para absorção de impacto. Oferecem um ajuste perfeito no pulso, garantindo segurança e conforto durante os treinos e competições. São projetadas para melhorar a performance de atletas em diversas modalidades de luta, como boxe, muay thai e kickboxing, protegendo as mãos contra lesões."
        }
    ]
    return <>
        <Menu />
        <Container>
            <Accordion defaultActiveKey="0">
                {produtos.map(item =>
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>
                            {item.produto}
                        </Accordion.Header>
                        <Accordion.Body>
                            {item.descricao}
                        </Accordion.Body>
                    </Accordion.Item>
                )}
            </Accordion>
        </Container>
        <Footer />
    </>
}




