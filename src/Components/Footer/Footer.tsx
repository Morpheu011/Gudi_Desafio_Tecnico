import GudiLogoFooter from "../../Images/Footer/GudiLogoFooter.svg"
import "../../Styles/Footer-style.sass"

export default function Footer() {
    return (
        <footer>
            <ul>
                <img src={GudiLogoFooter} alt="GudiLogo" />
                <li>Sobre nós</li>
                <li>Mural de memórias</li>
                <li>Eventos Gudi</li>
                <li>Nosso blog</li>
            </ul>
            <ul>
            <h5>Contato</h5>
                <li>Chat Virtual</li>
                <li>SAC Online</li>
                <li>Ouvidoria</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <h5>Benefícios</h5>
                <li>Conta digital</li>
                <li>Gudi Viaje com Milhas</li>
                <li>C6 Átomos</li>
                <li>iD Jovem</li>
            </ul>
            <ul>
                <h5>Lugares</h5>
                <li>O melhor do Brasil</li>
                <li>Cidades frequentes</li>
                <li>Pontos turísticos</li>
                <li>Restaurantes</li>
            </ul>
            <ul>
                <h5>Curiosidades</h5>
                <li>Cultura e tradições</li>
                <li>Pratos típicos</li>
                <li>Mitos brasileiros</li>
                <li>Carnaval</li>
            </ul>
        </footer>
    )
}