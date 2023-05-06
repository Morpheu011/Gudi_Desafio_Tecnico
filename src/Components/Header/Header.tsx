import GudiLogo from "../Gudi-Logo"
import "../../Styles/Header-style.sass"

export default function Header() {
    return (
        <header>
            <GudiLogo />
            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Benefícios</li>
                    <li>Contato</li>
                </ul>
                <button>AGENDAR</button>
            </nav>
        </header>
    )
}