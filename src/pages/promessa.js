import { useEffect, useState } from "react";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container } from "react-bootstrap";
export default function Promessa() {
    const [pao, setpao] = useState("")
    useEffect(() => {
        setTimeout(async () => {
            document.title = " é dívida";
            const espera = await mudaPao("Carregamento Completo.")
            console.log(espera);            
            setpao(espera);
        }, 4000)
    });
    return <>
        <Menu />
        <Container>
            {pao === "" ? <img src="./loading.gif" width={60} height={30} /> : pao}
        </Container>
        <Footer />
    </>
}
function mudaPao(texto) {
    return new Promise((resolva) =>
        setTimeout(() => {
            resolva(texto)
        }, 3000));
}
// var teste = "";
// if ("1" == 1) { //true ==1 | true === 1 | false == 0 | false === 0
//     teste = "veradeiro";
// } else {
//     teste = "falso";
// }